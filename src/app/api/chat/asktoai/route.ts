import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Message } from "@/models/message";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { checkToolSwitch, detectTool, toolPrompts } from "./helperFunction";

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const { chatId, prompt, tool } = await req.json();
        if (!chatId || !prompt) {
            return NextResponse.json({ error: 'chatId and prompt are required' }, { status: 400 });
        }

        await connectToDatabase();

        type ToolType = keyof typeof toolPrompts;
        let selectedTool: ToolType = (tool as ToolType) || 'Brainstorm'; 
        
       const switchedTool = checkToolSwitch(prompt, selectedTool);
        if (switchedTool !== selectedTool && switchedTool !== detectTool(prompt)) {
            selectedTool = switchedTool as ToolType;
        }

        // Get the appropriate prompt for the selected tool
        const finalPrompt = toolPrompts[selectedTool] + prompt;

        // Send prompt to Gemini AI
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.0-flash",
            generationConfig: {
                temperature: selectedTool === 'Develop' ? 0.3 : 0.7,
                maxOutputTokens: selectedTool === 'Develop' ? 4096 : 2048,
            }
        });
        
        const result = await model.generateContent(finalPrompt);
        const response = await result.response;
        const aiReply = await response.text();

        // Save AI reply as a message with tool info
        const now = new Date();
        const time = now.toTimeString().split(' ')[0];
        const aiMessage = await Message.create({
            userId: session.user.id,
            chatId,
            senderId: "ai",
            message: aiReply,
            tool: selectedTool, // Save which tool was used
            date: now,
            time
        });

        // Return response with tool information
        return NextResponse.json({
            ...aiMessage.toObject(),
            toolUsed: selectedTool,
            toolSwitched: selectedTool !== tool
        }, { status: 201 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ 
            error: "An error occurred while processing your request." 
        }, { status: 500 });
    }
}
import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/models/message';
import { connectToDatabase } from '@/lib/mongodb';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const { chatId, prompt } = await req.json();
        if (!chatId || !prompt) {
            return NextResponse.json({ error: 'chatId and prompt are required' }, { status: 400 });
        }
        await connectToDatabase();

        // Send prompt to Gemini AI
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const aiReply = await response.text();

        // Save AI reply as a message
        const now = new Date();
        const time = now.toTimeString().split(' ')[0];
        const aiMessage = await Message.create({
            userId: session.user.id,
            chatId,
            senderId: "ai",
            message: aiReply,
            date: now,
            time
        });

        return NextResponse.json(aiMessage, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred." }, { status: 500 });
    }
}

import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { Message } from "@/models/message";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { checkToolSwitch, detectTool, toolPrompts } from "./helperFunction";
import { env } from "process";

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


        // Prepare request to DeepSeek R1 Qwen 3 8B via OpenRouter
        const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
                "X-Title": "My Next.js App"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
                stream: true,
                temperature: selectedTool === 'Develop' ? 0.3 : 0.7,
                max_tokens: selectedTool === 'Develop' ? 4096 : 2048,
                messages: [
                    { role: "system", content: toolPrompts[selectedTool]  },
                    { role: "user", content: prompt }
                ]
            })
        });

        if (!upstream.ok || !upstream.body) {
            const text = await upstream.text();
            return new Response(text || 'Upstream error', { status: upstream.status || 500 });
        }

        let aiReply = '';
        const stream = new ReadableStream({
            async start(controller) {
                const decoder = new TextDecoder();
                const reader = upstream.body!.getReader();

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });

                    // Parse SSE lines
                    for (const line of chunk.split("\n")) {
                        const trimmed = line.trim();
                        if (!trimmed.startsWith("data:")) continue;

                        const data = trimmed.slice(5).trim();
                        if (data === "[DONE]") continue;

                        try {
                            const json = JSON.parse(data);
                            const delta = json?.choices?.[0]?.delta?.content || '';
                            if (delta) {
                                aiReply += delta;
                                controller.enqueue(new TextEncoder().encode(`data: ${delta}\n\n`));
                            }
                        } catch {
                            // ignore keepalive or parsing errors
                        }
                    }
                }

                controller.close();

                const now = new Date();
                const time = now.toTimeString().split(' ')[0];
                await Message.create({
                    userId: session.user.id,
                    chatId,
                    senderId: "ai",
                    message: aiReply,
                    tool: selectedTool,
                    date: now,
                    time
                });
            }
        });

        return new NextResponse(stream, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
                "Transfer-Encoding": "chunked"
            }
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            error: "An error occurred while processing your request."
        }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from 'next/server';
import { ChatHistoryModel } from '@/models/chat';
import { connectToDatabase } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { GoogleGenerativeAI } from '@google/generative-ai';

// GET: List all chats for a user
export async function GET(req: NextRequest) {
    await connectToDatabase();
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const chats = await ChatHistoryModel.find({ userId: session.user.id }).sort({ createdAt: -1 });
    console.log('Fetched chats:', chats);
    if (!chats || chats.length === 0) {
        return NextResponse.json([], { status: 200 });
    }
    return NextResponse.json(chats);
}

// POST: Create a new chat
export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { chatHeadClue } = await req.json();

    const prompt = `Generate a single, short chat title (max 5 words) for the following message, suitable for direct database storage: "${chatHeadClue}"`;

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiReply = await response.text();

    const chatHead = aiReply.replace(/\*\*(.*?)\*\*/g, '$1').trim();

    await connectToDatabase();

    const chat = await ChatHistoryModel.create({ userId: session.user.id, chatHead: chatHead });
    return NextResponse.json(chat, { status: 201 });
}

// PATCH: Update chatHead of a chat
export async function PATCH(req: NextRequest) {
    await connectToDatabase();
    const { chatId, chatHead } = await req.json();
    if (!chatId || !chatHead) {
        return NextResponse.json({ error: 'chatId and chatHead are required' }, { status: 400 });
    }
    const chat = await ChatHistoryModel.findByIdAndUpdate(
        chatId,
        { chatHead, updatedAt: new Date() },
        { new: true }
    );
    if (!chat) {
        return NextResponse.json({ error: 'Chat not found' }, { status: 404 });
    }
    return NextResponse.json(chat);
}

// DELETE: Delete a chat
export async function DELETE(req: NextRequest) {
    await connectToDatabase();
    const { chatId } = await req.json();
    if (!chatId) {
        return NextResponse.json({ error: 'chatId is required' }, { status: 400 });
    }
    const chat = await ChatHistoryModel.findByIdAndDelete(chatId);
    if (!chat) {
        return NextResponse.json({ error: 'Chat not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Chat deleted' });
}

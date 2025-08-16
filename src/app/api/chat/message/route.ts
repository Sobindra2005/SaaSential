import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/models/message';
import { connectToDatabase } from '@/lib/mongodb';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export async function GET(req: NextRequest) {
    const chatId = req.nextUrl.searchParams.get('chatId');
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (!chatId) {
        return NextResponse.json({ error: 'chatId are required' }, { status: 400 });
    }

    await connectToDatabase();

    const messages = await Message.find({ chatId, userId: session.user.id }).sort({ date: 1, time: 1 });
    return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { chatId, senderId, message } = await req.json();
    console.log('Creating message for chatId:', chatId, 'by senderId:', senderId, 'with message:', message, 'by userId:', session.user.id);

    if (!chatId || !senderId || !message) {
        return NextResponse.json({ error: 'userId, chatId, senderId, and message are required' }, { status: 400 });
    }
    await connectToDatabase();
    const now = new Date();
    const time = now.toTimeString().split(' ')[0];

    await Message.create({
        userId: session.user.id,
        chatId,
        senderId,
        message,
        date: now,
        time
    });

    const messages = await Message.find({ chatId })
        .sort({ date: -1, time: -1 });

    return NextResponse.json(messages, { status: 200 });
}



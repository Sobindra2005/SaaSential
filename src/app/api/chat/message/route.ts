import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/models/message';
import { connectToDatabase } from '@/lib/mongodb';

// GET: List all messages for a chatId and userId
export async function GET(req: NextRequest) {
  await connectToDatabase();
  const chatId = req.nextUrl.searchParams.get('chatId');
  const userId = req.nextUrl.searchParams.get('userId');
  if (!chatId || !userId) {
    return NextResponse.json({ error: 'chatId and userId are required' }, { status: 400 });
  }
  // Find all messages for the given chatId and userId, sorted by date/time ascending
  const messages = await Message.find({ chatId, userId }).sort({ date: 1, time: 1 });
  return NextResponse.json(messages);
}

// POST: Add a new message to a chat
export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { userId, chatId, senderId, message } = await req.json();
  if (!userId || !chatId || !senderId || !message) {
    return NextResponse.json({ error: 'userId, chatId, senderId, and message are required' }, { status: 400 });
  }
  const now = new Date();
  const time = now.toTimeString().split(' ')[0];
  const newMessage = await Message.create({
    userId,
    chatId,
    senderId,
    message,
    date: now,
    time
  });
  return NextResponse.json(newMessage, { status: 201 });
}



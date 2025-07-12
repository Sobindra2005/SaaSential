import { NextRequest, NextResponse } from 'next/server';
import { ChatHistoryModel } from '@/models/chat';
import { connectToDatabase } from '@/lib/mongodb';

// GET: List all chats for a user
export async function GET(req: NextRequest) {
  await connectToDatabase();
  const userId = req.nextUrl.searchParams.get('userId');
  if (!userId) {
    return NextResponse.json({ error: 'userId is required' }, { status: 400 });
  }
  const chats = await ChatHistoryModel.find({ userId }).sort({ createdAt: -1 });
  return NextResponse.json(chats);
}

// POST: Create a new chat
export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { userId, chatHead } = await req.json();
  if (!userId || !chatHead) {
    return NextResponse.json({ error: 'userId and chatHead are required' }, { status: 400 });
  }
  const chat = await ChatHistoryModel.create({ userId, chatHead });
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

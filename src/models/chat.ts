import mongoose, { Schema, model, Document } from 'mongoose';

export interface ChatHistory extends Document {
    userId: string;
    chatHead: string;
    createdAt: Date;
    updatedAt?: Date;
}


const ChatHistorySchema = new Schema<ChatHistory>({
    userId: { type: String, required: true },
    chatHead: { type: String, required: true, default: 'untitled'},
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date }
});


export const ChatHistoryModel =
  mongoose.models.ChatHistory || mongoose.model('ChatHistory', ChatHistorySchema);

import { Schema, model, Document } from 'mongoose';

export interface IMessage extends Document {
    userId: Schema.Types.ObjectId;
    chatId: Schema.Types.ObjectId;
    message: string;
    date: Date;
    time: string;
    senderId: Schema.Types.Mixed;
}

const messageSchema = new Schema<IMessage>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    chatId: { type: Schema.Types.ObjectId, ref: 'ChatHistory', required: true },
    senderId: { type: Schema.Types.Mixed, ref: 'User', required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

export const Message = model<IMessage>('Message', messageSchema);
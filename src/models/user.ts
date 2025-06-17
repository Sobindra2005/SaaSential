import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create or get User model
export const User = mongoose.models.User || mongoose.model('User', UserSchema);
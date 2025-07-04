import mongoose from 'mongoose';

// Use server-side environment variable instead of client-side
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Improved TypeScript interface for better type safety
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

// Create a type-safe global cache
const globalMongoose = {
    conn: null as typeof mongoose | null,
    promise: null as Promise<typeof mongoose> | null
};

// Initialize cached connection
const cached: MongooseCache = globalMongoose;

export async function connectToDatabase(): Promise<typeof mongoose> {
    // Return existing connection if available
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts: mongoose.ConnectOptions = {
            bufferCommands: false,
            maxPoolSize: 10, 
            serverSelectionTimeoutMS: 5000, 
            socketTimeoutMS: 45000, 
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    try {
        cached.conn = await cached.promise;
        console.log('✅ MongoDB connected successfully');
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
}

export async function disconnectFromDatabase(): Promise<void> {
    if (cached.conn) {
        await mongoose.disconnect();
        cached.conn = null;
        cached.promise = null;
        console.log('🔌 MongoDB disconnected');
    }
}

// Optional: Connection event listeners for better monitoring
mongoose.connection.on('connected', () => {
    console.log('📡 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('🚨 Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('📴 Mongoose disconnected from MongoDB');
});
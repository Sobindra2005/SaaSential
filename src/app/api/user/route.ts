import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { User } from '@/models/user';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, name } = body;

        // Validate required fields
        if (!email || !password || !name) {
            return NextResponse.json(
                { message: 'Email, password, and name are required' },
                { status: 400 }
            );
        }

        // Connect to database
        await connectToDatabase();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            email,
            password: hashedPassword,
            name
        });

        // Return user data without password
        const userData = {
            id: user._id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt
        };

        return NextResponse.json(userData, { status: 201 });

    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json(
            { message: 'Error creating user' },
            { status: 500 }
        );
    }
}


export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');
        const password = searchParams.get('password');


        // Validate required fields
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }
        
        await connectToDatabase();


        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Return user data without password
        const userData = {
            id: user._id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt
        };

        return NextResponse.json(userData);
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json(
            { message: 'Error during login' },
            { status: 500 }
        );
    }
}

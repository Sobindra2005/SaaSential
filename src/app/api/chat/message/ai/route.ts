// import { NextRequest, NextResponse } from 'next/server';
// import { authOptions } from '@/lib/auth';
// import { getServerSession } from 'next-auth';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// export async function GET(req: NextRequest) {
//     const prompt = req.nextUrl.searchParams.get('prompt');
//     const session = await getServerSession(authOptions);

//     if (!session) {
//         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }
//     if (!prompt) {
//         return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
//     }

//     const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
//     const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     console.log(response)
//     const aiReply = await response.text();
// }
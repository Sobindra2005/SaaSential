import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { connectToDatabase } from '@/lib/mongodb';
import { Project } from '@/models/Project';
import { authOptions } from '@/lib/auth';
import { Template } from '@/models/Template';

// GET /api/userProjects
export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const projects = await Project.find({ userId: session.user.id })
            .sort({ lastModified: -1 }); // Sort by last modified date, newest first

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

// POST /api/userProjects
export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const { searchParams } = new URL(request.url);
        const type = searchParams.get('type');
        const template = searchParams.get('template');

        const body = await request.json();
        await connectToDatabase();

        if (type === 'ai') {
            const availableTemplates = await Template.find({
                projectType: template
            });


            if (availableTemplates.length === 0) {
                return NextResponse.json(
                    { error: 'No templates found for the specified type' },
                    { status: 404 }
                );
            }

            const randomTemplate = availableTemplates[Math.floor(Math.random() * availableTemplates.length)];


            const project = new Project({
                ...body,
                html: randomTemplate.html,
                css: randomTemplate.css,
                userId: session.user.id,
                projectImage:randomTemplate.thumbnailImage
            });

            const savedProject = await project.save();
            return NextResponse.json(savedProject, { status: 201 });
        }

        const project = new Project({
            ...body,
            userId: session.user.id,
        });

        const savedProject = await project.save();
        return NextResponse.json(savedProject, { status: 201 });
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that don't require authentication
const publicPaths = ['/', '/login', '/api/user', '/signup', '/contribute', '/api/auth/login', '/api/auth/register'];

export function middleware(request: NextRequest) {
    const token = request.cookies.get(process.env.envrionment == 'production' ? '__Secure-next-auth.session-token' : 'next-auth.session-token')?.value;
    const { pathname } = request.nextUrl;

    // Allow access to public paths
    if (publicPaths.includes(pathname)) {
        return NextResponse.next();
    }

    // Check if the path starts with /api/auth
    if (pathname.startsWith('/api/auth')) {
        return NextResponse.next();
    }

    // Redirect to login if no token is present
    if (!token) {
        const url = new URL('/login', request.url);
        url.searchParams.set('from', pathname);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!_next/static|_next/image|favicon.ico|public/).*)',
    ],
}; 
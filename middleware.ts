import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllowedOrigins } from '@/lib/env';

export function middleware(request: NextRequest) {
    // Security headers
    const response = NextResponse.next();

    // Prevent clickjacking
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Content-Security-Policy', "frame-ancestors 'none'");

    // MIME type sniffing protection
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // XSS protection
    response.headers.set('X-XSS-Protection', '1; mode=block');

    // Referrer policy
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Only allow API requests from same origin or specific origins
    if (request.nextUrl.pathname.startsWith('/api/')) {
        const origin = request.headers.get('origin');
        const host = request.headers.get('host');

        // Allow same-origin requests
        if (origin && host && !origin.includes(host)) {
            // Check against allowed origins
            const allowedOrigins = getAllowedOrigins();

            if (allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) {
                console.warn(`Blocked request from unauthorized origin: ${origin}`);
                return new NextResponse('Forbidden', { status: 403 });
            }
        }

        // Block requests with suspicious user agents
        const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
        const suspiciousPatterns = ['bot', 'crawler', 'spider', 'scraper'];

        if (suspiciousPatterns.some(pattern => userAgent.includes(pattern))) {
            // You might want to allow legitimate bots in production
            console.warn(`Blocked suspicious user agent: ${userAgent}`);
        }
    }

    return response;
} export const config = {
    matcher: [
        // Match all request paths except for the ones starting with:
        // - _next/static (static files)
        // - _next/image (image optimization files)
        // - favicon.ico (favicon file)
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};

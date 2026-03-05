import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
    const isProtectedPath = request.nextUrl.pathname.startsWith('/admin') ||
        request.nextUrl.pathname.startsWith('/dashboard')

    if (isProtectedPath) {
        const token = request.cookies.get('token')?.value

        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        try {
            const secretStr = process.env.JWT_SECRET
            if (!secretStr) {
                console.error('JWT_SECRET is not defined')
                return NextResponse.redirect(new URL('/login', request.url))
            }
            const secret = new TextEncoder().encode(secretStr)
            await jwtVerify(token, secret)
            return NextResponse.next()
        } catch (err) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*'],
}


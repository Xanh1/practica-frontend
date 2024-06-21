import { NextResponse } from 'next/server'
 
export function middleware(request) {
    
    const token = request.cookies.get('token');

    if (token) {

        return NextResponse.next();
    }
  
    return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*',
}
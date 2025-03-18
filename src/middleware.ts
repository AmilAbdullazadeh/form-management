import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define valid paths that should not be redirected
  const validPaths = ['/forms', '/forms/'];

  // Check if the path is a valid subpath of /forms
  const isValidFormsSubpath = path.startsWith('/forms/') && path.length > 7;

  // Redirect if not a valid forms path
  if (!validPaths.includes(path) && !isValidFormsSubpath) {
    return NextResponse.redirect(new URL('/forms', request.url));
  }

  const response = NextResponse.next();

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}

// Configure the paths that should be matched by this middleware
export const config = {
  matcher: [
    /*
     * Match all paths except Next.js system paths
     */
    '/((?!_next/|api/|favicon.ico).*)',
  ],
};

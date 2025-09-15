import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\w-]+\.\w+).*)',
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers.get('host') || 'meunegocio.site';

  // Get the pathname of the request (e.g. /, /about, /blog/hello-world)
  const path = url.pathname;

  /*  You have to replace `.vercel.pub` with your own domain if you deploy this example under your domain.
      You can also use wildcard subdomains on Vercel.
  */
  const currentHost = process.env.NODE_ENV === 'production' && process.env.VERCEL_URL
    ? hostname.replace(`.meunegocio.site`, '')
    : hostname.replace(`.localhost:3000`, '');


  if (currentHost === hostname) {
     url.pathname = `/`;
     return NextResponse.rewrite(url);
  }

  // rewrite everything else to `/_sites/[site] dynamic route
  url.pathname = `/_sites/${currentHost}${path}`;
  return NextResponse.rewrite(url);
}

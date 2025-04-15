import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["uz", "ru", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.(jpg|jpeg|png|svg|webp|gif|ico|css|js|json)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to Uzbek by default
  request.nextUrl.pathname = `/uz${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: "/:path*",
};

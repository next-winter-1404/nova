// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const serverAccessToken = request.cookies.get("serverAccessToken")?.value;
  const path = request.nextUrl.pathname;

  const authPages = ["/signup", "/verifyemail", "/final-step"];
  const isAuthPage = authPages.includes(path);

  if (isAuthPage) {
    return NextResponse.next();
  }

  const protectedPaths = ["/dashboard"];
  const isProtectedPath = protectedPaths.some((p) => path.startsWith(p));

  if (serverAccessToken && path === "/signup") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!serverAccessToken && isProtectedPath) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signup", "/verifyemail", "/final-step"],
};

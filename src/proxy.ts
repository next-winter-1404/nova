
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const serverAccessToken = request.cookies.get("ServerAccessToken")?.value;
  const path = request.nextUrl.pathname;
  const role = request.cookies.get("userRole")?.value;
  const authPages = ["/signup", "/verifyemail", "/final-step"];
  const isAuthPage = authPages.includes(path);
  // if user was loged in allow user to continue
  
  
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
  
  // redirect user buy their role
  if (path == "/dashboard" || path == "/dashboard/") {
    if (role == "buyer") {
      return NextResponse.redirect(new URL("/dashboard/buyer", request.url));
    }
    if (role == "seller") {
      return NextResponse.redirect(new URL("/dashboard/seller", request.url));
    }
    if (role == "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }
    return NextResponse.redirect(new URL("/signup", request.url));
  }
  // prevent user to access to a other role dashboard
  if (path.startsWith("/dashboard/buyer") && role !== "buyer") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (path.startsWith("/dashboard/seller") && role !== "seller") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (path.startsWith("/dashboard/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signup", "/verifyemail", "/final-step"],
};

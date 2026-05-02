import { NextRequest, NextResponse } from "next/server";
import React from "react";

export const middleware = (request: NextRequest) => {
  const serverAccessToken = request.cookies.get("serverAccessToken")?.value;
  if (serverAccessToken) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("login", request.url));
};
export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
};

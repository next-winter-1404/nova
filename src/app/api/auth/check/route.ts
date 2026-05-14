import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { NextResponse } from "next/server";

export async function GET() {
  const token = await getServerSideCookie("ServerAccessToken");
  
  return NextResponse.json({ 
    isAuthenticated: !!token 
  });
}
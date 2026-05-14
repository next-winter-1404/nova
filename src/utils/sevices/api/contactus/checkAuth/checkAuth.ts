import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { NextResponse } from "next/server";

export async function CheckAuth() {
    const code = getServerSideCookie("ServerAccessToken")

    if (code){
        return NextResponse.json({isAuthentication : true});
    }
    return NextResponse.json({isAuthentication: false})
}
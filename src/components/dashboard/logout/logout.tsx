// src/actions/logout.ts
"use server";

import { deleteServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { redirect } from "next/navigation";

export async function logout() {
  await deleteServerSideCookie("ServerAccessToken");
  await deleteServerSideCookie("userRole");
  await deleteServerSideCookie("userName");
  redirect("/");
}
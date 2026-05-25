"use server";

import { deleteServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { redirect } from "next/navigation";

export async function logout() {
  await deleteServerSideCookie("ServerAccessToken");
  await deleteServerSideCookie("userRole");
  await deleteServerSideCookie("userName");
  await deleteServerSideCookie("userId");
  await deleteServerSideCookie("userEmail");
  await deleteServerSideCookie("refreshToken");
  redirect("/");
}
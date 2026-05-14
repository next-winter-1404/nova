"use server"
import { cookies } from "next/headers";
// Getting Cookies
export const getServerSideCookie = async (
  name: string
): Promise<string | undefined> => {
  try {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value;
  } catch (error) {
    console.error(`Error reading server-side cookie "${name}":`, error);
    return undefined;
  }
};

//   Setting and Save Cookies
export const setServerSideCookie = async (name: string, value: string) => {
  try {
    const cookieStore = await cookies();
    return cookieStore.set(name, value, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  } catch (error) {
    console.error("Error set server-side cookies:", error);
    return null;
  }
};

// Delete Cookies
export const deleteServerSideCookie = async (name: string): Promise<void> => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(name);
  } catch (error) {
    console.error(`Error deleting server-side cookie "${name}":`, error);
    throw error;
  }
};

//   Check whether the Cookie exists
export const hasServerSideCookie = async (name: string): Promise<boolean> => {
  try {
    const cookieStore = await cookies();
    return cookieStore.has(name);
  } catch (error) {
    console.error(`Error checking server-side cookie "${name}":`, error);
    return false;
  }
};

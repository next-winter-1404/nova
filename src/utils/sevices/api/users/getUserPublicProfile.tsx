"use server";
import { IUserPublic } from "@/src/core/types/IUser";
import instance from "../../interseptor";

export const getUserPublicProfile = async (
  id: number
): Promise<{user:IUserPublic} | null> => {
  try {
    const response = await instance.get(`/api/users/${id}/public`);

    if (!response) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    return null;
  }
};

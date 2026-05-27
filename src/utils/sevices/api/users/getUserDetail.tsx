"use server";
import { IUserResponse } from "@/src/core/types/IUser";
import instance from "../../interseptor";

export const getUsersDetail = async (
  id: number
): Promise<IUserResponse | null> => {
  try {
    const response = await instance.get(`/api/users/${id}`);

    if (!response) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching house ${id}:`, error);
    return null;
  }
};

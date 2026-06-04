"use server";
import instance from "@/src/utils/sevices/interseptor";

export const deleteUser = async (id: number) => {
  try {
    const response = await instance.delete(`/api/admin/users/${id}`);
    return response.data;
  } catch (error) {
    console.log("Delete User Api Error: ", error);
    throw error;
  }
};

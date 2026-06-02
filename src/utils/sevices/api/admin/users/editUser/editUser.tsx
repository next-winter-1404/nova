"use server";
import instance from "@/src/utils/sevices/interseptor/index";

export const editUser = async (id: number, data: IAdminUserEdit) => {
  try {
    const response = await instance.put(`/api/admin/users/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("Edit User Api Error: ", error);
  } 
};

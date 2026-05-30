"use server";
import instance from "@/src/utils/sevices/interseptor/index";

export const editUser = async (id: number, data: IAdminUserEdit) => {
  const respons = await instance.put(`/api/admin/users/${id}`, data);
  return respons.data;
};

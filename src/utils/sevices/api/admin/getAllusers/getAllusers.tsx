"use server";
import instance from "@/src/utils/sevices/interseptor/index";

export const getAllusers = async () => {
  const response = await instance.get('/api/admin/users')
  return response.data;
};
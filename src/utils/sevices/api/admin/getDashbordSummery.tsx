"use server";
import instance from "@/src/utils/sevices/interseptor/index";

export const getDashbordSummery = async () => {
  const response = await instance.get('/api/admin/dashboard')
  return response.data;
};
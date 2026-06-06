"use server";
import { IDashboardStats } from "@/src/core/types/IDashboardStats";
import instance from "@/src/utils/sevices/interseptor/index";

export const getDashbordSummery = async ():Promise<IDashboardStats> => {
  const response = await instance.get('/api/dashboard/summary')
  return response.data;
};
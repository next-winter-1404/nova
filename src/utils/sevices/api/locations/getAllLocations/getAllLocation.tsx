"use server";
import instance from "@/src/utils/sevices/interseptor";

export const getAllLocation = async () => {
  const res = await instance.get("/api/locations");

  return res.data;
};

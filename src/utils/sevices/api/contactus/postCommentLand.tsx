"use server"
import instance from "../../interseptor";
import { IContactUsMassage } from "@/src/core/types/IContactUsMassage";

export const postCommentsLand = async (apiParams = {}): Promise<IContactUsMassage> => {
  const response = await instance.post("/api/contact-us", apiParams);
  return response.data;
};

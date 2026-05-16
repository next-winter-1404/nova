import React from "react";
import instance from "../../interseptor";
import { AxiosResponse } from "axios";
import { IContactUsMassage } from "@/src/core/types/IContactUsMassage";

export const postCommentsLand = async (apiParams = {}): Promise<AxiosResponse<IContactUsMassage>> => {
  const response = await instance.post("/api/contact-us", apiParams);
  return response;
};
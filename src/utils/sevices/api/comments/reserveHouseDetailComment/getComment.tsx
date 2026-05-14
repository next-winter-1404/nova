import React from "react";
import instance from "@/src/utils/sevices/interseptor/index";
import { ICommentResponse } from "@/src/core/types/IComment";
import { AxiosResponse } from "axios";

export const getHousesComment = async (
  houseId: number
): Promise<ICommentResponse> => {
  const response = await instance.get(`/api/houses/${houseId}/comments`);
  return response.data;
};

"use server";
import instance from "@/src/utils/sevices/interseptor/index";
import { ICommentResponse } from "@/src/core/types/IComment";

export const getAllComment = async (

  apiParams = {}
): Promise<ICommentResponse> => {
  const response = await instance.get(`/api/comments`, {
    params: apiParams,
  });
  return response.data;
};

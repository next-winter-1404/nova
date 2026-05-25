"use server"
import instance from "@/src/utils/sevices/interseptor/index";
import { ICommentResponse } from "@/src/core/types/IComment";

export const getSellerComment = async (
    seller_id: number
): Promise<ICommentResponse> => {
  const response = await instance.get(`/api/comments/seller/${seller_id}`);
  return response.data;
};

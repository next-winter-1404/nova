"use server";

import { IComment } from "@/src/core/types/IComment";
import instance from "@/src/utils/sevices/interseptor";
import { z } from "zod";

const CommentSchema = z.object({
  title: z.string(""),
  caption: z.string(""),
  rating: z.coerce.number().min(1).max(5),
  houseId: z.coerce.number(),
});

export interface SendCommentResult {
  success: boolean;
  message: string;
  data?: IComment;
}

export const sendComment = async (
    prevState: SendCommentResult, 
  formData: FormData
): Promise<SendCommentResult> => {
  const title = formData.get("title");
  const caption = formData.get("caption");
  const rating = formData.get("rating");
  const houseId = formData.get("houseId");
  const validationResult = CommentSchema.safeParse({ title, caption,rating,houseId });
  if (!validationResult.success) {
    return {
      success: false,
      message: "لطفا فیلد های مورد نظر را پر کنید",
    };
  }

  try {
    const res = await instance.post("/api/comments", {
      title: validationResult.data.title,
      caption: validationResult.data.caption,
      rating: validationResult.data.rating,
      house_id: validationResult.data.houseId,
    });

    const dataResponse: IComment = res.data || res;
// console.log("---------------data:",dataResponse)
    return {
      success: true,
      message: "نظر شما ارسال شد",
      data: dataResponse,
    };
  } catch (error: any) {
    console.error("Error message:", error.message);
    return {
      success: false,
      message:  "خطا در ارسال نظر",
    };
  }
};

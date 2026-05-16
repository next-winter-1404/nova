"use client";
import StarRatingContainer from "../starRatingcontainer";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";
import Image from "next/image";
import line from "@/src/assets/images/divideLine.svg";
import { FC, useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getHousesCommentById } from "@/src/utils/sevices/api/comments/reserveHouseDetailComment/getCommentById";
import { sendReplyComment } from "@/src/utils/sevices/api/comments/reserveHouseDetailComment/postReply";
import { IComment } from "@/src/core/types/IComment";

export interface IReplyCommentsProps {
  parentId?:  number | undefined;
  houseId?: string | number | undefined;
}
const ReplyForm: FC<IReplyCommentsProps> = ({ parentId,houseId }) => {
  const [ratingReply, setRatingReply] = useState(0);
  const { data: parentComment } = useQuery<IComment | null>({
    queryKey: ["commentReply", parentId],
    queryFn: () => getHousesCommentById(Number(parentId)),
    enabled:parentId !== undefined && parentId !== null,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });
  const [state, formAction] = useActionState(sendReplyComment, {
    success: false,
    message: "",
  });
  useEffect(() => {
    if (!state?.message) return;
    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    
    <form action={formAction} className="flex flex-col gap-8 justify-center">
      <div className="flex justify-end gap-10">
        <StarRatingContainer onChange={setRatingReply} initialRating={ratingReply} />

        <input type="hidden" name="rating" value={ratingReply} />
        <input type="hidden" name="parentId" value={parentId} />
        <input type="hidden" name="houseId" value={houseId} />
        <Input
          labelText=" برای نظر"
          InputHeight="h-[50px]"
          borderColor="border-white"
          labelTextSize="text-white"
          tagBgStyle={{ background:"var(--color-dark-900)" }}
          textColor="text-white"
          parentWidth="w-full"
          value={parentComment?.caption ?? ""}
          readOnly
          dir="rtl"

        />
      </div>
      <div className="flex-center gap-8 w-full">
        <LoginButton
          buttonText="ارسال"
          loadingText="در حال ارسال پیام"
          type="submit"
          width="w-[53%] "
          height="h-9"
          radius="rounded-[10px]"
        />
        <Input
          labelText="توضیحات پاسخ"
          InputHeight="h-[50px]"
          borderColor="border-white"
          labelTextSize="text-white"
          tagBgStyle={{ background: "var(--color-dark-900)" }}
          textColor="text-white"
          parentWidth="w-full"
          name="caption"
          dir="rtl"

        />
        <Input
          labelText="عنوان پاسخ"
          InputHeight="h-[50px]"
          borderColor="border-white"
          labelTextSize="text-white"
          tagBgStyle={{ background: "var(--color-dark-900)" }}
          textColor="text-white"
          parentWidth="w-full"
          name="title"
          dir="rtl"

        />
      </div>
      <Image alt="icon" src={line} />

    </form>
  );
};

export default ReplyForm;

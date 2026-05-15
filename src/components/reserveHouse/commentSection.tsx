"use client";
import StarRatingContainer from "./starRatingcontainer";
import Input from "../common/input/Input";
import LoginButton from "../login/button/LoginButton";
import Image from "next/image";
import UserComments from "./userComments";
import { FC, useActionState, useEffect, useState } from "react";
import { IComment } from "@/src/core/types/IComment";
import toast from "react-hot-toast";
import { sendComment } from "@/src/utils/sevices/api/comments/reserveHouseDetailComment/postcomment";
import CommentForm from "./commentForm";
import { useSearchParams } from "next/navigation";
import ReplyForm from "./replyForm";

export interface ICommentsProps {
  comments: IComment[];
  houseId?: string | number | undefined;
}

// CommentSection.tsx
const CommentSection: FC<ICommentsProps> = ({ comments, houseId }) => {
  const searchParams = useSearchParams();
  const replyTo = searchParams.get("replyTo");
  console.log("replyTo from URL:", replyTo);
  return (
    <>
      {replyTo ? (
        <ReplyForm houseId={Number(houseId)} parentId={Number(replyTo)} />
      ) : (
        <CommentForm houseId={houseId} />
      )}
      
      <UserComments houseId={houseId} comments={comments} />
    </>
  );
};
export default CommentSection
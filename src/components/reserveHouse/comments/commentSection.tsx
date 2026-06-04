"use client";
import UserComments from "./userComments";
import { FC } from "react";
import { IComment } from "@/src/core/types/IComment";
import CommentForm from "./commentForm";
import { useSearchParams } from "next/navigation";
import ReplyForm from "./replyForm";

export interface ICommentsProps {
  comments: IComment[];
  houseId?: string | number | undefined;
}

const CommentSection: FC<ICommentsProps> = ({ comments, houseId }) => {
  const searchParams = useSearchParams();
  const replyTo = searchParams.get("replyTo");
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
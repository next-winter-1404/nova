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
  mortgage?: boolean;

}

const CommentSection: FC<ICommentsProps> = ({ comments, houseId,mortgage=false }) => {
  const searchParams = useSearchParams();
  const replyTo = searchParams.get("replyTo");
  return (
    <div className="w-full">
      {replyTo ? (
        <ReplyForm houseId={Number(houseId)} parentId={Number(replyTo)} />
      ) : (
        <CommentForm houseId={houseId} />
      )}
      
      <UserComments houseId={houseId} comments={comments} mortgage={mortgage}/>
    </div>
  );
};
export default CommentSection
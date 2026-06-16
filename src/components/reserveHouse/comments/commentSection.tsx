"use client";
import UserComments from "./userComments";
import { FC } from "react";
import { IComment } from "@/src/core/types/IComment";
import CommentForm from "./commentForm";
import { useSearchParams } from "next/navigation";
import ReplyForm from "./replyForm";
import Slide from "../../animations/Slide";

export interface ICommentsProps {
  comments: IComment[];
  houseId?: string | number | undefined;
}

const CommentSection: FC<ICommentsProps> = ({ comments, houseId }) => {
  const searchParams = useSearchParams();
  const replyTo = searchParams.get("replyTo");
  return (
    <Slide direction="right">
      <>
        {replyTo ? (
          <ReplyForm houseId={Number(houseId)} parentId={Number(replyTo)} />
        ) : (
          <CommentForm houseId={houseId} />
        )}

        <UserComments houseId={houseId} comments={comments} />
      </>
    </Slide>
  );
};
export default CommentSection;

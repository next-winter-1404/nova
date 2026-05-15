"use client"
import React, { useActionState, useEffect, useState,FC } from 'react'
import toast from 'react-hot-toast';
import StarRatingContainer from '../starRatingcontainer';
import Input from '../../common/input/Input';
import LoginButton from '../../login/button/LoginButton';
import Image from 'next/image';
import line from "@/src/assets/images/divideLine.svg";
import { sendComment } from '@/src/utils/sevices/api/comments/reserveHouseDetailComment/postcomment';
interface IProp{
    houseId:string | number | undefined
}
const CommentForm:FC<IProp> = ({houseId}) => {
    const [rating, setRating] = useState(0);
  const [state, formAction] = useActionState(sendComment, {
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
      <StarRatingContainer onChange={setRating} initialRating={rating} />

      <input type="hidden" name="rating" value={rating} />
      <input type="hidden" name="houseId" value={houseId} />
      <Input
        labelText="عنوان کامنت"
        InputHeight="h-[50px]"
        borderColor="border-white"
        labelTextSize="text-white"
        tagBgStyle={{ background: "var(--color-dark-900)" }}
        textColor="text-white"
        parentWidth="w-full"
        name="title"
      />
    </div>
    <div className="flex-center gap-8 w-full">
      <LoginButton
        buttonText="ارسال"
        loadingText="در حال ارسال پیام"
        type="submit"
        width="w-[26%] "
        height="h-9"
        radius="rounded-[10px]"
      />
      <Input
        labelText="توضیحات کامنت"
        InputHeight="h-[50px]"
        borderColor="border-white"
        labelTextSize="text-white"
        tagBgStyle={{ background: "var(--color-dark-900)" }}
        textColor="text-white"
        parentWidth="w-full"
        name="caption"
      />
    </div>
    <Image alt="icon" src={line} />

  </form>
  )
}

export default CommentForm

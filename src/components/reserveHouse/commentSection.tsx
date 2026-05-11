import React from "react";
import StarRatingContainer from "./starRatingcontainer";
import Input from "../common/input/Input";
import LoginButton from "../login/button/LoginButton";
import Image from "next/image";
import UserComments from "./userComments";
import line from "@/src/assets/images/divideLine.svg";


const CommentSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center">
      <div className="flex justify-end gap-10">
        <StarRatingContainer />

        <Input
          labelText="نام و نام خانوادگی"
          InputHeight="h-[50px]"
          borderColor="border-white"
          labelTextSize="text-white"
          tagBgStyle={{ background: "var(--color-dark-900)" }}
          textColor="text-white"
          parentWidth="w-[35%]"
        />
        <Input
          labelText="ایمیل شما"
          InputHeight="h-[50px]"
          borderColor="border-white"
          labelTextSize="text-white"
          tagBgStyle={{ background: "var(--color-dark-900)" }}
          textColor="text-white"
          parentWidth="w-[35%]"
        />
      </div>
      <div className="flex-center gap-8 w-full">
        <LoginButton
          buttonText="ارسال"
          loadingText="در حال ارسال پیام"
          type="submit"
          width="w-[111px] "
          height="h-9"
          radius="rounded-[10px]"
        />
        <Input
          labelText="پیام شما"
          InputHeight="h-[50px]"
          borderColor="border-white"
          labelTextSize="text-white"
          tagBgStyle={{ background: "var(--color-dark-900)" }}
          textColor="text-white"
          parentWidth="w-full"
        />
      </div>
      <Image alt="icon" src={line} />
      <UserComments />
    </div>
  );
};

export default CommentSection;

"use client";
import Input from "@/src/components/common/input/Input";
import { sendEmail } from "@/src/components/emailaction";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper/page";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [state, formAction] = useActionState(sendEmail, { message: "" });
  useEffect(() => {
    if (state?.message) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction} className="w-1/2 flex flex-col gap-9" dir="rtl">
      <LoginWrapper
        ButtonSection={
          <LoginButton
            loadingText="در حال ارسال کد"
            buttonText="ارسال کد تایید"
            width="w-full"
          />
        }
        content={
          <Input
            name="email"
            labelText="ایمیل شما* : "
            InputHeight={"h-[43px]"}
            htmlFor="email"
            parentWidth="w-full"
            placeHolder="example@gmail.com"
          />
        }
      />
    </form>
  );
};

export default SignUpPage;

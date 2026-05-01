"use client";
import Input from "@/src/components/common/input/Input";
import { sendEmail } from "@/src/utils/sevices/api/auth/register/sendEmail";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper/page";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [state, formAction] = useActionState(sendEmail, { message: "" });
  const router = useRouter();
  useEffect(() => {
    if (state?.message) {
      if (state.message === "کد تایید ارسال شد") {
        toast.success(state.message);
        router.push("/verifyemail");
      } else {
        toast.error(state.message);
      }
      console.log("state.message=========>", state.message);
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="md:w-1/2 w-full  flex flex-col gap-9"
      dir="rtl"
    >
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

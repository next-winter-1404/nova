"use client";

import Input from "@/src/components/common/input/Input";
import LoginWrapper from "@/src/components/login/wrapper";
import LoginButton from "@/src/components/login/button/LoginButton";
import Button from "@/src/components/common/button/page";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getResetCode,
  getVerificationCode,
} from "@/src/utils/helper/getVrificationCode/getVrificationCode";
import { forgetPasswordVerifyCode } from "@/src/utils/sevices/api/auth/forgetPassword/verificationCode";
import Timer from "@/src/utils/hooks/timer";
import FadeIn from "@/src/components/animations/FadeIn";

const VerifyEmailPage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const router = useRouter();
  const [state, formAction] = useActionState(forgetPasswordVerifyCode, {
    success: false,
    message: "",
  });

  useEffect(() => {
    const loadCode = async () => {
      const code = await getResetCode();
      setVerificationCode(code);
    };
    loadCode();
  }, []);

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);
      router.push("/forgetPassword/reset");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
      <form
        action={formAction}
        className="md:w-1/2 w-full flex flex-col gap-9"
        dir="rtl"
      >
        <LoginWrapper
          description="لطفا کد ارسال شده به ایمیل خود را وارد کنید"
          content={
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"verificationCode"}
              id={"verificationCode"}
              name={"verificationCode"}
              labelText={"کد ورود * :"}
              parentWidth={"w-full"}
              type={"text"}
              borderColor="text-white-pure border-white-pure"
              tagBgStyle={{ background: "var(--color-dark-900)" }}
              labelTextSize="text-white"
              textColor="text-white"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              dir="rtl"
            />
          }
          ButtonSection={
            <LoginButton
              buttonText="ساخت حساب کاربری"
              width="w-full"
              loadingText="loading"
            />
          }
        />
      </form>
  );
};

export default VerifyEmailPage;

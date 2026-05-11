"use client";

import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper";
import { forgetPasswordResetCode } from "@/src/utils/sevices/api/auth/forgetPassword/resetPassword";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ForgetPassWordReset = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(forgetPasswordResetCode, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);
      router.push("/dashboard");
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
        description="لطفا رمز مورد نظر خود را وارد کنید"
        content={
          <>
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"password"}
              id={"password"}
              name={"password"}
              labelText={"کد ورود * :"}
              parentWidth={"w-full"}
              type={"text"}
              borderColor="border-white"
              tagBgStyle={{ background: "var(--color-dark-900)" }}
              labelTextSize="text-white"
              textColor="text-white"
            />
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"confirmPassword"}
              id={"confirmPassword"}
              name={"confirmPassword"}
              labelText={"تکرار رمز * :"}
              parentWidth={"w-full"}
              type={"text"}
              borderColor="border-white"
              tagBgStyle={{ background: "var(--color-dark-900)" }}
              labelTextSize="text-white"
              textColor="text-white"
            />
          </>
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

export default ForgetPassWordReset;

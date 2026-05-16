"use client";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { sendPhone } from "@/src/utils/sevices/api/auth/phoneRegister/sendPhone";

const RegisterWithPhone = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(sendPhone, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);

      router.push("/verify-phone");
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
      description="جهت ساخت اکانت با شماره تلفن لطفا شماره تماس خود را وارد کنید"
        ButtonSection={
          <LoginButton
            loadingText="در حال ارسال کد"
            buttonText="ارسال کد تایید"
            width="w-full"
          />
        }
        content={
          <Input
            name="phone"
            type="number"
            id="phone"
            labelText="شماره شما* : "
            InputHeight={"h-[43px]"}
            htmlFor="phone"
            parentWidth="w-full"
            placeHolder="0912....."
            borderColor="border-white "
            tagBgStyle={{ background: "var(--color-dark-900)", color: "white" }}
            textColor="text-white"
            dir="rtl"
          />
        }
      />
    </form>
  );
};

export default RegisterWithPhone;

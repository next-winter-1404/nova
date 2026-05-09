"use client";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RequestPassword } from "@/src/utils/sevices/api/auth/forgetPassword/requestPass";

const ForgetPassWordRequest = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(RequestPassword, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);

      router.push("/forgetPassword/verify");
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
      description="ایمیل خود را وارد کنید تا کد را دریافت کنید"
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
            borderColor="border-white "
            tagBgStyle={{background:"var(--color-dark-900)",color:"white"}}
            textColor="text-white"

          />
        }
      />
    </form>
  );
};

export default ForgetPassWordRequest;

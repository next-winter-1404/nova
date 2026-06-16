"use client";
import FadeIn from "@/src/components/animations/FadeIn";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper";
import { finalStep } from "@/src/utils/sevices/api/auth/register/finalStep";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const SetPasswordAndPhonePage = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(finalStep, {
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
    <FadeIn>
    <form
      action={formAction}
      className="md:w-1/2 w-full flex flex-col gap-9"
      dir="rtl"
    >
      <LoginWrapper
      headerText="خوش اومدی!"
      description="جهت ساخت اکانت شماره تماس و رمز مورد نظر خود را وارد کنید"
        content={
          <div className="flex gap-9">
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"phoneNumber"}
              id={"phoneNumber"}
              name={"phoneNumber"}
              labelText={"شماره تماس شما * :"}
              parentWidth={"w-1/2"}
              placeHolder={".......0911"}
              type={"number"}
              borderColor="border-white"
              tagBgStyle={{ background: "var(--color-dark-900)" }}
              labelTextSize="text-white"
              textColor="text-white"
              dir="rtl"
            />
            <div className="flex flex-col gap-4 w-1/2">
              <Input
                InputHeight={"h-[43px]"}
                htmlFor={"password"}
                id={"password"}
                name={"password"}
                labelText={"کلمه عبور * :"}
                parentWidth={"w-full"}
                type={"password"}
                borderColor="border-white"
                tagBgStyle={{ background: "var(--color-dark-900)" }}
                labelTextSize="text-white"
                textColor="text-white"
                dir="rtl"
              />
            </div>
          </div>
        }
        ButtonSection={
          <LoginButton
            buttonText="ارسال اطلاعات"
            width="w-full"
            loadingText="loading"
          />
        }
      />
    </form>
    </FadeIn>
  );
};

export default SetPasswordAndPhonePage;
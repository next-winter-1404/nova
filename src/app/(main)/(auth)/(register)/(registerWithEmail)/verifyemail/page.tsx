"use client";

import Input from "@/src/components/common/input/Input";
import LoginWrapper from "@/src/components/login/wrapper";
import Image from "next/image";
import smallLeftArrow from "@/src/assets/icons/smallLeftArrow.svg";
import clock from "@/src/assets/icons/clock 2.svg";
import refresh from "@/src/assets/icons/refresh 2.svg";
import LoginButton from "@/src/components/login/button/LoginButton";
import Button from "@/src/components/common/button/page";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { verifyCode } from "@/src/utils/sevices/api/auth/register/verifyCode";
import { getVerificationCode } from "@/src/utils/helper/getVrificationCode/getVrificationCode";
import Timer from "@/src/utils/hooks/timer";
import FadeIn from "@/src/components/animations/FadeIn";

const VerifyEmailPage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const router = useRouter();
  const [state, formAction] = useActionState(verifyCode, {
    success: false,
    message: "",
  });

  useEffect(() => {
    const loadCode = async () => {
      const code = await getVerificationCode();
      setVerificationCode(code);
    };
    loadCode();
  }, []);

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message);
      router.push("/final-step");
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
          description="لطفا کد ارسال شده به ایمیل خود را وارد کنید"
          content={
            <div className="flex gap-18">
              <Input
                InputHeight={"h-[43px]"}
                htmlFor={"verificationCode"}
                id={"verificationCode"}
                name={"verificationCode"}
                labelText={"کد ورود * :"}
                parentWidth={"w-[48%]"}
                type={"text"}
                borderColor="border-white"
                tagBgStyle={{ background: "var(--color-dark-900)" }}
                labelTextSize="text-white"
                textColor="text-white"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                dir="rtl"
              />
              <Timer />
            </div>
          }
          ButtonSection={
            <div className="flex gap-8">
              <Button
                text={"تغییر ایمیل"}
                buttonStyle={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid white",
                  fontSize: "semibold",
                  display: "flex",
                  gap: 12,
                }}
                icon={<Image src={refresh} alt="refresh" />}
              />
              <LoginButton
                buttonText="ساخت حساب کاربری"
                width="w-full"
                loadingText="loading"
              />
            </div>
          }
        />
      </form>
    </FadeIn>
  );
};

export default VerifyEmailPage;

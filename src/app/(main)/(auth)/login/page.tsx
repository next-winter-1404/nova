"use client";
import Input from "@/src/components/common/input/Input";
import LoginWrapper from "@/src/components/login/wrapper";
import LoginButton from "@/src/components/login/button/LoginButton";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { Login } from "@/src/utils/sevices/api/auth/login/login";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import Timer from "@/src/utils/hooks/timer";
import FadeIn from "@/src/components/animations/FadeIn";
import Slide from "@/src/components/animations/Slide";

const LoginPage = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(Login, {
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
        description="
      با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه
      هاتون خبر بگیرید !"
        headerText="خوش برگشتی!"
        content={
          <div className="flex gap-9">
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"email"}
              id={"email"}
              name={"email"}
              labelText={"ایمیل شما * :"}
              tagBgStyle={{ background: "var(--color-dark-900)" }}
              parentWidth={"w-1/2"}
              placeHolder={"example@gmail.com"}
              type={"email"}
              textColor="text-gray-300"
              borderColor="border-white-pure"
              labelTextSize="text-13-regular"
              dir="rtl"
            />
            <div className="flex flex-col gap-4 w-1/2">
              <Input
                InputHeight={"h-[43px]"}
                htmlFor={"password"}
                id={"password"}
                name={"password"}
                labelText={"کلمه عبور * :"}
                tagBgStyle={{ background: "var(--color-dark-900)" }}
                parentWidth={"w-full"}
                type={"password"}
                textColor="text-gray-300"
                borderColor="border-white-pure"
                labelTextSize="text-13-regular"
                dir="rtl"
              />
              <div className="flex gap-3">
                <span
                  className="text-16-medium md:indent-3 text-white cursor-pointer"
                  onClick={() => {
                    router.push("/forgetPassword/request");
                  }}
                >
                  رمز عبور خود را فراموش کردم
                </span>
                {/* <Image src={leftArrow} alt="arrow" /> */}
                <FaArrowLeft />
              </div>
            </div>
          </div>
        }
        ButtonSection={
          <LoginButton
            buttonText="ورود به حساب کاربری"
            width="w-full"
            loadingText="loading"
          />
        }
      />
    </form>
  );
};

export default LoginPage;

"use client";
import Input from "@/src/components/common/input/Input";
import LoginButton from "@/src/components/login/button/LoginButton";
import LoginWrapper from "@/src/components/login/wrapper/page";
const SignUpPage = () => {
  
  return (
    <form className="w-1/2  flex flex-col gap-9" dir="rtl">
      <LoginWrapper
        ButtonSection={
          <LoginButton loadingText="در حال ارسال کد" buttonText="ارسال کد تایید" width="w-full" />
        }
        content={
          <Input
            labelText="ایمیل شما* : "
            InputHeight={"h-[43px]"}
            htmlFor=""
            parentWidth="w-full"
            placeHolder="example@gmail.com"
          />
        }
      />
    </form>
  );
};

export default SignUpPage;

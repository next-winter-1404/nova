import leftArrow from "../../../../assets/icons/leftArrow.svg";
import Image from "next/image";
import Input from "@/src/components/common/input/Input";
import LoginWrapper from "@/src/components/login/wrapper/page";
import LoginButton from "@/src/components/login/button/LoginButton";

const LoginPage = () => {

  return (
    <form className="md:w-1/2 w-full flex flex-col gap-9" dir="rtl">
      <LoginWrapper
      content={
        <div className="flex gap-9">
          <Input
            InputHeight={"h-[43px]"}
            htmlFor={"email"}
            id={"email"}
            labelText={"ایمیل شما * :"}
            parentWidth={"w-1/2"}
            placeHolder={"example@gmail.com"}
            type={"email"}
          />
          <div className="flex flex-col gap-4 w-1/2">
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"password"}
              id={"password"}
              labelText={"کلمه عبور * :"}
              parentWidth={"w-full"}
              type={"password"}
            />
            <div className="flex gap-3">
              <span className="text-16-medium md:indent-3">
                رمز عبور خود را فراموش کردم
              </span>
              <Image src={leftArrow} alt="arrow" />
            </div>
          </div>
        </div>
      }
      ButtonSection={<LoginButton buttonText="ورود به حساب کاربری"  width="w-full" loadingText="loading"/>}

    />
    </form>
  );
};

export default LoginPage;

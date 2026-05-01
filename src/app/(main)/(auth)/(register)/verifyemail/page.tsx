import Input from "@/src/components/common/input/Input";
import LoginWrapper from "@/src/components/login/wrapper/page";
import Image from "next/image";
import smallLeftArrow from "@/src/assets/icons/smallLeftArrow.svg";
import clock from "@/src/assets/icons/clock 2.svg";
import refresh from "@/src/assets/icons/refresh 2.svg";
import LoginButton from "@/src/components/login/button/LoginButton";
import Button from "@/src/components/common/button/page";

const VerifyEmailPage = () => {
  return (
    <form className="md:w-1/2 w-full  flex flex-col gap-9" dir="rtl">
      <LoginWrapper
        content={
          <div className="flex gap-18">
            <Input
              InputHeight={"h-[43px]"}
              htmlFor={"email"}
              id={"email"}
              labelText={" کد ورود * :"}
              parentWidth={"w-[48%]"}
              type={"email"}
            />
            <div className="bg-blue-purple-500 md:rounded-xl rounded-xl h-4/5 p-1 lg:w-1/3 w-1/2 flex items-center gap-2 md:gap-4">
              <button className="bg-white md:rounded-[10px]  rounded-md h-full w-[60%] flex-center md:gap-2 ">
                <span className="cursor-pointer  text-[13px] whitespace-nowrap">ارسال دوباره رمز</span>
                <Image alt="arrow" src={smallLeftArrow} />
              </button>
              <div className="flex-center md:gap-3">
                <span className="text-16-semibold">1:58</span>
                <Image alt="clock" src={clock} />
              </div>
            </div>
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
  );
};

export default VerifyEmailPage;

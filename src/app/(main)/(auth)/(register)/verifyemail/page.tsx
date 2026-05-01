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
    <form className="w-1/2  flex flex-col gap-9" dir="rtl">
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
            <div className="bg-blue-purple-500 rounded-xl h-4/5 p-1 w-1/3 flex items-center gap-4">
              <button className="bg-white rounded-[10px] h-full w-[60%] flex-center gap-2">
                <span className="cursor-pointer">ارسال دوباره رمز</span>
                <Image alt="arrow" src={smallLeftArrow} />
              </button>
              <div className="flex-center gap-3">
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

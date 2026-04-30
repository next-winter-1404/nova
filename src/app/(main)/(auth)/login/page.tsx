import Button from "@/src/components/common/button/page";
import LoginImage from "@/src/components/login/LoginImage";
import LoginInstructions from "@/src/components/login/LoginInstructions";
import WelcomeText from "@/src/components/login/welcomeText";
import line from "../../../../assets/images/line.svg";
import Image from "next/image";
import Input from "@/src/components/common/input/Input";

const LoginPage = () => {
  return (
    <div className="flex-center w-full gap-24 p-8 ">
      <LoginImage />
      <div className="w-1/2  flex flex-col gap-9 " dir="rtl">
        <WelcomeText />
        <LoginInstructions />
        <div className="flex gap-8">
          <Button
            text={"google"}
            buttonStyle={{
              width: "50%",
              background: "var(--color-unSelectedButton)",
              cursor: "pointer",
            }}
          />
          <Button
            text={"ll"}
            buttonStyle={{
              width: "50%",
              background: "var(--color-unSelectedButton)",
              cursor: "pointer",
            }}
          />
        </div>
        <Image alt="line" src={line} className="w-full" />
       <div className="flex gap-9">
       <Input
        name="email_field_123"
          InputHeight={"h-[43px]"}
          htmlFor={"email"}
          id={"email"}
          labelText={"ایمیل شما * :"}
          parentWidth={"w-1/2"}
          placeHolder={"example@gmail.com"}
          type={"email"}
        />
        <Input
          InputHeight={"h-[43px]"}
          htmlFor={"password"}
          id={"password"}
          labelText={"کلمه عبور * :"}
          parentWidth={"w-1/2"}
          type={"password"}
        />
       </div>
      </div>
    </div>
  );
};

export default LoginPage;

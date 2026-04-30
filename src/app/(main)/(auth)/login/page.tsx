import Button from "@/src/components/common/button/page";
import LoginImage from "@/src/components/login/LoginImage";
import LoginInstructions from "@/src/components/login/LoginInstructions";
import WelcomeText from "@/src/components/login/welcomeText";
import line from "../../../../assets/images/line.svg";
import Image from "next/image";

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
        
      </div>
    </div>
  );
};

export default LoginPage;

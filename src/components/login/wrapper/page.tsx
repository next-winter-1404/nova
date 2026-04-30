import React, { ReactNode } from "react";
import WelcomeText from "../welcomeText";
import LoginInstructions from "../LoginInstructions";
import LoginWays from "../LoginWays";
import Image from "next/image";
import line from "../../../assets/images/line.svg";
interface IProp{
    content:ReactNode,
    ButtonSection:ReactNode,

}
const LoginWrapper = ({content,ButtonSection}:IProp) => {
  return (
    <div className="w-1/2  flex flex-col gap-9 " dir="rtl">
      <WelcomeText />
      <LoginInstructions />
      <LoginWays />
      <Image alt="line" src={line} className="w-full" />
      {content}
     {ButtonSection}
    </div>
  );
};

export default LoginWrapper;

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
    <>
      <WelcomeText />
      <LoginInstructions />
      <LoginWays />
      <Image alt="line" src={line} className="w-full" />
      {content}
     {ButtonSection}
    </>
  );
};

export default LoginWrapper;

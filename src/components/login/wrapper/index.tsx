import React, { ReactNode } from "react";
import WelcomeText from "../welcomeText";
import LoginInstructions from "../LoginInstructions";
import LoginWays from "../LoginWays";
import Image from "next/image";
import line from "../../../assets/images/line.svg";
interface IProp{
    content:ReactNode,
    ButtonSection:ReactNode,
    headerText?:string,
    description?:string,

}
const LoginWrapper = ({content,ButtonSection,headerText="خوش اومدی!",description}:IProp) => {
  return (
    <>
    <div className='flex flex-col gap-6 '>
    <div className="flex ">
      <h2 className='text-32-medium'>به خانواده دلتا،</h2>
      <h2 className='text-32-semibold'> {headerText}</h2>
    </div>
    <span className='text-16-medium text-white'>
      {description}
    </span>
  </div>
      <LoginInstructions />
      <LoginWays />
      <Image alt="line" src={line} className="w-full" />
      {content}
     {ButtonSection}
    </>
  );
};

export default LoginWrapper;

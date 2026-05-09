"use client"
import Image from "next/image";
import leftSmallArrow from "../../../assets/icons/smallLeftArrow.svg";
import { FC } from "react";
import { ILoginButtonProp } from "@/src/core/types/IButtonProps";
import { useFormStatus } from "react-dom";

const LoginButton: FC<ILoginButtonProp> = ({ buttonText, width ,type,loadingText}) => {
  const { pending } = useFormStatus();

  return (
    <button
    dir="rtl"
      className={` ${pending?"opacity-60":""} flex-center gap-4 selected-button rounded-2xl h-[43px]  cursor-pointer ${width}`}
      type={type}
      disabled={pending}
    >
      {pending?<span>{loadingText}</span>:<span>{buttonText}</span>}
      
      <Image src={leftSmallArrow} alt="arrow" />
    </button>
  );
};

export default LoginButton;

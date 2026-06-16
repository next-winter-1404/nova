"use client";
import Image from "next/image";
import leftSmallArrow from "../../../assets/icons/smallLeftArrow.svg";
import { FC } from "react";
import { ILoginButtonProp } from "@/src/core/types/IButtonProps";
import { useFormStatus } from "react-dom";

const LoginButton: FC<ILoginButtonProp> = ({
  buttonText,
  width,
  type,
  loadingText,
  height = "h-[43px]",
  radius = "rounded-2xl ",
  buttonStyle ="selected-button",
  noIcon=false
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      dir="rtl"
      className={` ${
        pending ? "opacity-60" : ""
      } flex-center gap-4  ${height} ${radius} cursor-pointer hover:opacity-70 ${width} ${buttonStyle}`}
      type={type}
      disabled={pending}
    >
      {pending ? <span>{loadingText}</span> : <span>{buttonText}</span>}

      <Image src={leftSmallArrow} alt="arrow" className={`${!noIcon?"":"hidden"}`} />
    </button>
  );
};

export default LoginButton;

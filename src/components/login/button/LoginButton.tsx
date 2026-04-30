import Image from "next/image";
import leftSmallArrow from "../../../assets/icons/smallLeftArrow.svg";
import { FC } from "react";
import { ILoginButtonProp } from "@/src/core/types/IButtonProps";

const LoginButton: FC<ILoginButtonProp> = ({ buttonText, width }) => {
  return (
    <button
      className={` flex-center gap-4 selected-button rounded-2xl h-[43px]  cursor-pointer ${width}`}
    >
      <span>{buttonText}</span>
      <Image src={leftSmallArrow} alt="arrow" />
    </button>
  );
};

export default LoginButton;

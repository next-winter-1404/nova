"use client"
import React, { FC, useState } from "react";
import { Modal } from "../modal";
import alertIcon from "@/src/assets/icons/alertSvg.svg";
import Image from "next/image";
import Button from "../button/page";
interface IAlertProp {
  alertText?: string;
  acceptButtonText?: string;
  isModalOpen?: boolean;
  setIsModalOpen?: (open: boolean) => void;
  onClickFunction?: () => void;
}
const AlertComponent: FC<IAlertProp> = ({ alertText, acceptButtonText,isModalOpen,setIsModalOpen,onClickFunction }) => {

  return (
    <div>
      <Modal
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      contentClassName="w-[540px] h-[338px]  bg-dark-900 text-white-pure rounded-xl"
        mainContent={
          <div className=" flex-col-center gap-8 bg-dark-900 h-full w-full">
            <Image alt="alert icon" src={alertIcon} />
            <div dir="rtl" className="text-center text-[18px]">{alertText}</div>
            <div className="flex gap-3">
              <Button
                buttonStyle={{
                  background: "#F79000",
                  width: 80,
                  height: 40,
                  borderRadius: 12,
                  cursor:"pointer"
                }}
                text={acceptButtonText}
                onClick={onClickFunction}
              />
              <Button
                buttonStyle={{
                  background: "transparent",
                  width: 80,
                  height: 40,
                  border: "1px solid var(--color-gray-300)",
                  borderRadius: 12,
                  cursor:"pointer"
                }}
                text={"انصراف"}
                onClick={() => {
                    onClickFunction?.(); 
                    setIsModalOpen?.(false);  
                  }}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default AlertComponent;

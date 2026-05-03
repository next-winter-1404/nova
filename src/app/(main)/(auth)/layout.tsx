import LoginImage from "@/src/components/login/LoginImage";
import React, { ReactNode } from "react";
interface IProp {
  children: ReactNode;
}
const registerLayout = ({ children }: IProp) => {
  return (
    <div className="flex-center w-full xl:gap-24 gap-10 p-8">
      <div className="w-1/2 hidden lg:block">
      <LoginImage />
      </div>
      {children}
    </div>
  );
};

export default registerLayout;

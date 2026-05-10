import LoginImage from "@/src/components/login/LoginImage";
import React, { ReactNode } from "react";
interface IProp {
  children: ReactNode;
}
const registerLayout = ({ children }: IProp) => {
  return (
   <div className="flex flex-col bg-dark-900">
     <div className="flex-center w-full xl:gap-24 gap-10 p-8 bg-dark-900 mt-15">
      <div className="w-1/2 hidden lg:block">
      <LoginImage />
      </div>
      {children}
    </div>
   </div>
  );
};

export default registerLayout;

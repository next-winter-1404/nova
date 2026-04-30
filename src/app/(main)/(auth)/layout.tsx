import LoginImage from "@/src/components/login/LoginImage";
import React, { ReactNode } from "react";
interface IProp {
  children: ReactNode;
}
const registerLayout = ({ children }: IProp) => {
  return (
    <div className="flex-center w-full gap-24 p-8 ">
      <LoginImage />
      {children}
    </div>
  );
};

export default registerLayout;

import FadeIn from "@/src/components/animations/FadeIn";
import LoginImage from "@/src/components/login/LoginImage";
import React, { ReactNode } from "react";
interface IProp {
  children: ReactNode;
}
const registerLayout = ({ children }: IProp) => {
  return (
    <FadeIn>
      <div className="flex flex-col bg-dark-900">
        <div className="flex-center w-full xl:gap-24 gap-10 p-8 bg-dark-900 mt-15">
          <div className="w-1/2 hidden lg:block">
            <LoginImage />
          </div>
          {children}
        </div>
      </div>
    </FadeIn>
  );
};

export default registerLayout;

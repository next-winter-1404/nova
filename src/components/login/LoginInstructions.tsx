"use client"

import { useState } from "react";

const LoginInstructions = () => {
  const [selectedBtn, setSelectedBtn] = useState("login");
  const handleLoginClick = () => {
    setSelectedBtn("login");
  };
  const handleSignInClick = () => {
    setSelectedBtn("signin");
  };
  return (
    <div className="w-full bg-unSelectedButton h-12 rounded-2xl  flex-between gap-8 p-2">
      <button
        name="loginBtn"
        onClick={handleLoginClick}
        className={`${
          selectedBtn == "login"
            ? "bg-primary-accent-green shadow-inner-custom text-selectedButtonText"
            : ""
        } transition-all w-1/2 rounded-xl h-full  cursor-pointer text-gray-300 `}
      >
        ورود به حساب کاربری
      </button>
      <button
        name="sinInBtn"
        onClick={handleSignInClick}
        className={`${
          selectedBtn == "signin"
            ? "bg-primary-accent-green shadow-inner-custom text-selectedButtonText"
            : ""
        } transition-all w-1/2 rounded-xl h-full  cursor-pointer text-gray-300 `}
      >
        ساخت حساب کاربری
      </button>
    </div>
  );
};

export default LoginInstructions;

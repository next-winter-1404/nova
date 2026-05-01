"use client";
import { useState } from "react";
import loginUser from "../../assets/icons/loginIcon.svg"
import signinUser from "../../assets/icons/signinIcon.svg"
import Image from "next/image";
import { useRouter } from 'next/navigation'
const LoginInstructions = () => {
  const router = useRouter()
  const [selectedBtn, setSelectedBtn] = useState("login");
  const handleLoginClick = () => {
    setSelectedBtn("login");
    router.push("/login")

  };
  const handleSignInClick = () => {
    setSelectedBtn("signin");
    router.push("/signup")
  };
  return (
    <div className="w-full bg-unSelectedButton h-12 rounded-2xl  flex-between gap-8 p-2">
      <button
        name="loginBtn"
        type="button"

        onClick={handleLoginClick}
        className={`${
          selectedBtn == "login" ? "selected-button" : ""
        } transition-all w-1/2 rounded-xl h-full  cursor-pointer text-gray-300  flex-center gap-3`}
      >
        <Image  src={loginUser} alt="loginUser" style={{color:"red"}}/>
        <span>ورود به حساب کاربری</span>
      </button>
      <button
        name="sinInBtn"
        type="button"
        onClick={handleSignInClick}
        className={`${
          selectedBtn == "signin" ? "selected-button" : ""
        } transition-all w-1/2 rounded-xl h-full  cursor-pointer text-gray-300 flex-center gap-3`}
      >
           <Image  src={signinUser} alt="signinUser"/>
        <span> ساخت حساب کاربری</span>
      </button>
    </div>
  );
};

export default LoginInstructions;

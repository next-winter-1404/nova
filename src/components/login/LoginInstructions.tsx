"use client";
import { usePathname, useRouter } from 'next/navigation'
import loginUser from "../../assets/icons/loginIcon.svg"
import signinUser from "../../assets/icons/signinIcon.svg"
import Image from "next/image";

const LoginInstructions = () => {
  const router = useRouter()
  const pathname = usePathname()
  
  const isLoginActive = pathname === '/login'
  const isSignupActive = pathname === '/signup'

  const handleLoginClick = () => {
    router.push("/login")
  };
  
  const handleSignInClick = () => {
    router.push("/signup")
  };
  
  return (
    <div className="w-full bg-unSelectedButton h-12 rounded-2xl flex-between gap-8 p-2">
      <button
        name="loginBtn"
        type="button"
        onClick={handleLoginClick}
        className={`${
          isLoginActive ? "selected-button" : ""
        } transition-all w-1/2 rounded-xl h-full cursor-pointer text-gray-300 flex-center gap-3`}
      >
        <Image src={loginUser} alt="loginUser"/>
        <span>ورود به حساب کاربری</span>
      </button>
      
      <button
        name="sinInBtn"
        type="button"
        onClick={handleSignInClick}
        className={`${
          isSignupActive ? "selected-button" : ""
        } transition-all w-1/2 rounded-xl h-full cursor-pointer text-gray-300 flex-center gap-3`}
      >
        <Image src={signinUser} alt="signinUser"/>
        <span>ساخت حساب کاربری</span>
      </button>
    </div>
  );
};

export default LoginInstructions;
import Image from "next/image";
import React from "react";
import LoginPic from "../../../../assets/images/loginPic.png";
const LoginPage = () => {
  return (
    <div className="flex-center w-full">
      
      <div className="w-1/2">
        
        <Image
          src={LoginPic}
          className="w-full rounded-[36px]"
          alt="loginPic"
        />
      </div>
      <div className="w-1/2 bg-amber-200"><h3>خوش برگشتی</h3>
      <h2>به خانواده دلتا ، خوش برگشتی !</h2>
      <span>
        با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون
        خبر بگیرید !
      </span></div>
    </div>
  );
};

export default LoginPage;

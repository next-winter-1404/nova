import React from "react";
import Image from "next/image";
import LoginPic from "../../assets/images/loginPic.png";
import cup from "../../assets/images/cup.svg";
import users from "../../assets/images/users.svg";

const LoginImage = () => {
  return (
    <div className="w-full relative  flex-center xl:h-[510px] md:h-[500px]">
      <Image src={LoginPic} className="w-full rounded-[36px] h-full" alt="loginPic" />
      <div className=" absolute bottom-4 h-[20%] w-[95.5%]  rounded-4xl bg-[rgba(54,54,54,0.78)] flex justify-between ">
        <div className="relative w-[30%]">
          <Image
            src={cup}
            className="w-43 h-44 absolute bottom-0 "
            alt="cupPic"
          />
        </div>
        <div className="lg:w-[70%] w-[50%]   flex items-center justify-end gap-4 p-5">
          <div className="flex flex-col xl:gap-3 text-white" dir="rtl">
            <h2 className="font-semibold text-lg">بیش از 5600+</h2>
            <span className="lg:text-32-semibold text-13-regular">مشتریانی لذت سفرشان را با ما تجربه کردند </span>
          </div>
          <Image src={users} alt="usersPic" className="w-30 h-12" />
        </div>
      </div>
    </div>
  );
};

export default LoginImage;

import React from 'react'
import Image from "next/image";
import LoginPic from "../../assets/images/loginPic.png";
import cup from "../../assets/images/cup.svg";
import users from "../../assets/images/users.svg";

const LoginImage = () => {
  return (
   
<div className="w-1/2 relative  flex-center">
<Image
  src={LoginPic}
  className="w-full rounded-[36px]"
  alt="loginPic"
/>
<div className=" absolute bottom-4 h-[20%] w-[95.5%]  rounded-[32px] bg-[rgba(54,54,54,0.78)] flex justify-between ">
  <div className="relative w-[30%]">
    <Image
      src={cup}
      className="w-[172px] h-[176px] absolute bottom-0 "
      alt="cupPic"
    />
  </div>
  <div className="w-[70%]  flex items-center justify-end gap-4 p-5">
    <div className="flex flex-col gap-3 text-white" dir="rtl">
      <h2 className="font-semibold text-lg">بیش از 5600+</h2>
      <span>مشتریانی لذت سفرشان را با ما تجربه کردند </span>
    </div>
    <Image src={users} alt="usersPic" className="w-[120px] h-[48px]" />
  </div>
</div>
</div>
  )
}

export default LoginImage

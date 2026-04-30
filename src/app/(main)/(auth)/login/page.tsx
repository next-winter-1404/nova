import Image from "next/image";
import React from "react";
import LoginPic from "../../../../assets/images/loginPic.png";
import cup from "../../../../assets/images/cup.svg";
const LoginPage = () => {
  return (
    <div className="flex-center w-full gap-24 p-8 ">
      <div className="w-1/2 relative  flex-center">
        <Image
          src={LoginPic}
          className="w-full rounded-[36px]"
          alt="loginPic"
        />
        <div className="absolute bottom-4 h-[20%] w-[95.5%] rounded-[32px] bg-[rgba(54,54,54,0.78)] flex justify-between ">
        <Image src={cup} className="w-[172px] h-[176px] "  alt="cupPic"/>

          <div>
           <div>
           <h2 dir="rtl">بیش از 5600+</h2>
            <span>مشتریانی لذت سفرشان را با ما تجربه کردند </span>
           </div>
           <div>aksa</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-amber-200 ">
        <h2>به خانواده دلتا ، خوش برگشتی !</h2>
        <span>
          با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه
          هاتون خبر بگیرید !
        </span>
      </div>
    </div>
  );
};

export default LoginPage;

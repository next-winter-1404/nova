import React, { FC } from "react";
// import Image from "next/image";
// import home from "@/src/assets/images/home.png";
// import home2 from "@/src/assets/images/home (2).png";
import { IHouse } from "@/src/core/types/IHouse";

const AboutHouseContainer: FC<IHouse> = ({ title, caption }) => {
  return (
    <div dir="rtl" className="text-white  flex flex-col gap-3 ">
      <h2 className="text-3xl">{title}</h2>
      <p className="text-gray-300">{caption}</p>
      {/* <div className="w-full flex-center">
    <Image src={home} alt="pic" className="max-w-[534px] max-h-[445px]"/>
    <Image src={home2} alt="pic" className="max-w-[534px] max-h-[445px]" />
    
    </div>
    <h2 className="text-3xl">بهترین سبک طراحی وبسایت در سال 2024 چیست ؟</h2>
    <p className="text-gray-300">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
      استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در
      ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن
      ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
      گرافیک است گرها و متون بلکه روزنامه و مجله ست...لورم ایپسوم متن
      ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی
      نامفهوم از صنعت.....
    </p> */}
    </div>
  );
};

export default AboutHouseContainer;

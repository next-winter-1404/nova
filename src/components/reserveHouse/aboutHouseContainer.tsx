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
    </div>
  );
};

export default AboutHouseContainer;

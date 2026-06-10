import React, { FC } from "react";
import { IHouse } from "@/src/core/types/IHouse";

const AboutHouseContainer: FC<IHouse> = ({ title, caption }) => {
  return (
    <div dir="rtl" className="text-white-pure  flex flex-col gap-3 ">
      <h2 className="text-3xl">{title}</h2>
      <p className="text-gray-300">{caption}</p>
    </div>
  );
};

export default AboutHouseContainer;

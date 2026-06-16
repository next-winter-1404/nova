import { IHouse } from "@/src/core/types/IHouse";
import React, { FC } from "react";

const HouseItemsComponent:FC<IHouse> = ({capacity,bathrooms,parking,rooms,yard_type}) => {
  const items = [
    { title: "ظرفیت", status: capacity },
    { title: "حمام", status: bathrooms },
    { title: "پارکینگ", status: parking },
    { title: "اتاق", status: rooms },
    { title: "نوع نما", status: yard_type },
 

  ];
  return (
    <div className="w-full lg:flex justify-end items-center gap-4 lg:flex-wrap grid grid-cols-3 md:grid-cols-4 ">
      {items.map((item) => (
        <div key={item.title} className="md:w-[127px] h-[94px] bg-dark-700 rounded-2xl p-2 flex-col flex-center gap-3 text-semibold-20">
          <span>{item.title}</span>
          <div className="w-full rounded-[10px] h-[37px] bg-blue-purple-500 flex-center">
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseItemsComponent;

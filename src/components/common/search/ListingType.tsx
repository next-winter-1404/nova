"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bookingIcon from "@/public/icons/booking.svg";
import houseBuildingIcon from "@/public/icons/house-building.svg";
import moneyCheckEdit from "@/public/icons/money-check-edit.svg";
import { useRouter, useSearchParams } from 'next/navigation';
import { IStatePicker } from "@/src/core/types/ITimePicker";


const types = [
  { labelName: "رهن و اجاره", iconSrc: moneyCheckEdit, current: false, paramValue: "houserent",url: "/houserent" },
  { labelName: "خرید و فروش", iconSrc: houseBuildingIcon, current: false, paramValue: "saleAndBuy", url: "/saleAndBuy" },
  { labelName: "رزرو ملک", iconSrc: bookingIcon, current: true, paramValue: "reserve-house" , url: "/reserve-house"},
];

const ListingType = ({onChange,value}:IStatePicker) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedLabel, setSelectedLabel] = useState<string | "">();

  const handleSelect = (url: string) => {
      setSelectedLabel(url);
      onChange?.(url);
  }

    useEffect(() =>{
      if (value) {
        setSelectedLabel(value);
      }
    },[value])
    console.log("type state value: ", value)

  return (
    <div className="relative flex items-center justify-end gap-3 whitespace-nowrap">
      {types.map((type) => {
        const isActive = type.url === selectedLabel;
        return (
          <div className="flex items-center gap-3" key={type.labelName}>
            
            <motion.div
              animate={{
                backgroundColor: isActive ? "#ffffff" : "#AAAAAA",
              }}
              transition={{ duration: 0.2 }}
              style={{ width: "2px", height: "16px" }}
            />

            <motion.div
              className="flex-center gap-2 cursor-pointer"
              onClick={() => handleSelect(type.url)}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.1 }}
            >
      
              <motion.span
                className="text-[16px]"
                animate={{
                  color: isActive ? "#ffffff" : "#8C8C8C",
                }}
                transition={{ duration: 0.2 }}
              >
                {type.labelName}
              </motion.span>

              <span>
                <Image src={type.iconSrc} alt="icon" width={16} height={16} />
              </span>
            </motion.div>
          </div>
        );
      })}

    </div>
  );
};

export default ListingType;
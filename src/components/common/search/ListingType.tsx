"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bookingIcon from "@/public/icons/booking.svg";
import houseBuildingIcon from "@/public/icons/house-building.svg";
import moneyCheckEdit from "@/public/icons/money-check-edit.svg";

const types = [
  { labelName: "رهن و اجاره", iconSrc: moneyCheckEdit, current: false },
  { labelName: "خرید و فروش", iconSrc: houseBuildingIcon, current: false },
  { labelName: "رزرو ملک", iconSrc: bookingIcon, current: true },
];

const ListingType = () => {
  const initialActive = types.find((t) => t.current)?.labelName || null;
  const [selectedLabel, setSelectedLabel] = useState<string | null>(initialActive);

  const handleSelect = (labelName: string) => {
    setSelectedLabel(labelName);
  };

  return (
    <div className="relative flex items-center justify-end gap-3">
      {types.map((listType) => {
        const isActive = listType.labelName === selectedLabel;
        return (
          <div className="flex items-center gap-3" key={listType.labelName}>
            {/* Animated vertical divider */}
            <motion.div
              animate={{
                backgroundColor: isActive ? "#ffffff" : "#AAAAAA",
              }}
              transition={{ duration: 0.2 }}
              style={{ width: "2px", height: "16px" }}
            />

            <motion.div
              className="flex-center gap-2 cursor-pointer"
              onClick={() => handleSelect(listType.labelName)}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.1 }}
            >
              {/* Animated text color */}
              <motion.span
                className="text-[16px]"
                animate={{
                  color: isActive ? "#ffffff" : "#8C8C8C",
                }}
                transition={{ duration: 0.2 }}
              >
                {listType.labelName}
              </motion.span>

              <span>
                <Image src={listType.iconSrc} alt="icon" width={16} height={16} />
              </span>
            </motion.div>
          </div>
        );
      })}

    </div>
  );
};

export default ListingType;
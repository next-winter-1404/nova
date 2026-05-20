import React from "react";
import { FaEnvelope } from "react-icons/fa";
const BuyerWallet = () => {
  return (
    <div className="border border-dashed  w-full p-3 border-gray-500 flex items-center gap-4 rounded-[18px]">
      <FaEnvelope className="w-[28px] h-[28px] text-white" />
      <div className="flex-col flex  " dir="rtl">
        <h2 className="text-[20px] text-white">کیف پول</h2>
        <span className="text-gray-500 text-[14px]">عدم موجودی</span>
      </div>
    </div>
  );
};

export default BuyerWallet;

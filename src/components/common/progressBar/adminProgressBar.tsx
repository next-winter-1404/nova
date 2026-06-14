"use client";
import { Flat } from "@alptugidin/react-circular-progress-bar";

import React, { FC } from "react";
interface IProp {
    bookingSuccessPercent?: number;
}
const ProgressBarAdmin: FC<IProp> = ({ bookingSuccessPercent }) => {
  return (
    <Flat
      progress={bookingSuccessPercent}
      showValue={false}
      text={`${bookingSuccessPercent}% تایید شده`}
      sx={{
        strokeColor: '#8CFF45', 
        bgStrokeColor: '#4E4E4E', 
        barWidth: 6,
        strokeLinecap: "round",
        textColor: '#fff',
        loadingTime: 1000,
        valueColor: '#FFFFFF',
      }}
    />
  );
};

export default ProgressBarAdmin;

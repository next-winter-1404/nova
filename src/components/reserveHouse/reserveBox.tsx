"use client";
import React, { useEffect, useState } from "react";
import InfoCardContainer from "./InfoCardContainer";
import Image from "next/image";
import DatePickerComponent from "../common/datePicker";
import DaysCounter from "./daysCounter";
import PassengerCounter from "./counter";
import Button from "../common/button/page";
import OldPriceComponent from "../common/productCard/OldPrice";
import LoginButton from "../login/button/LoginButton";
import dolor from "@/src/assets/icons/dollor.svg";
import building from "@/src/assets/icons/house-building.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

const ReserveBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  console.log("checkInDate",Number(checkInDate )- Number(checkOutDate) )
  const [days] = useState<number>(0);
  const [passengers] = useState<number>(1);
  const [debouncedCheckIn] = useDebounce(checkInDate, 500);
  const [debouncedCheckOut] = useDebounce(checkOutDate, 500);

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());

    if (debouncedCheckIn) {
      queryParams.set("checkInDate", debouncedCheckIn);
    } else {
      queryParams.delete("checkInDate");
    }

    if (debouncedCheckOut) {
      queryParams.set("checkOutDate", debouncedCheckOut);
    } else {
      queryParams.delete("checkOutDate");
    }

    

    router.replace(`?${queryParams.toString()}`, { scroll: false });
  }, [debouncedCheckIn, debouncedCheckOut]);
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    if (checkInDate) {
      queryParams.append("checkInDate", checkInDate);
    }
    if (checkOutDate) {
      queryParams.append("checkOutDate", checkOutDate);
    }
    if (days) {
      queryParams.append("days", days.toString());
    }
    if (passengers) {
      queryParams.append("passengers", passengers.toString());
    }

    router.push(`/processreserve/travelerinfo?${queryParams.toString()}`);
  };

  return (
    <InfoCardContainer
      icon={<Image alt="icon" src={building} className="w-5 h-5" />}
      labelText="رزرو خونه برای :"
    >
      <form
        onSubmit={handleSearchSubmit}
        className="relative flex flex-col w-full gap-6"
      >
        <DatePickerComponent
          paramKey="checkInDate"
          placeholder="تاریخ ورود را وارد کنید"
          value={checkInDate}
          onChange={setCheckInDate}
        />
        <DatePickerComponent
          paramKey="checkOutDate"
          placeholder="تاریخ خروج را وارد کنید"
          value={checkOutDate}
          onChange={setCheckOutDate}
        />
        <DaysCounter />
        <PassengerCounter />

        <div className="border-t-2 border-b-2 border-gray-550 w-[92%] flex flex-col items-center gap-6 pb-6">
          <div
            className="w-[178px] h-9 rounded-b-3xl bg-gray-550 flex-center gap-2 text-16-semibold text-white"
            dir="rtl"
          >
            <Image alt="icon" src={dolor} className="w-4 h-4" />
            <span>قیمت رزرو :</span>
          </div>
          <div className="flex justify-between w-full" dir="rtl">
            <span className="text-gray-300 text-16-bold">
              ★ {days} شب * {passengers} نفر
            </span>
            <span className="text-16-bold text-white">تومان</span>
          </div>
        </div>

        <div className="w-full px-2 flex flex-col justify-start gap-4">
          <div className="flex gap-4 w-full">
            <Button
              text={"15%"}
              buttonStyle={{ height: 25, width: 40, borderRadius: 8 }}
            />
            <OldPriceComponent oldPrice="25.000.000" />
          </div>
          <div className="text-primary-accent-green font-semibold text-[24px] flex gap-2">
            <i>تومان</i>
            <span>15.000.000</span>
          </div>
        </div>

        <LoginButton
          buttonText="همین حالا رزرو کن"
          loadingText="در حال رزرو"
          type="submit"
          width="w-full"
        />
      </form>
    </InfoCardContainer>
  );
};

export default ReserveBox;

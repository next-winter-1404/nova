"use client";
import React, { FC, useEffect, useState } from "react";
import InfoCardContainer from "./InfoCardContainer";
import Image from "next/image";
import DatePickerComponent from "../common/datePicker";
import DaysCounter from "./similarHouse/conters/daysCounter";
import PassengerCounter from "./similarHouse/conters/counter";
import Button from "../common/button/page";
import OldPriceComponent from "../common/productCard/OldPrice";
import LoginButton from "../login/button/LoginButton";
import dolor from "@/src/assets/icons/dollor.svg";
import building from "@/src/assets/icons/house-building.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { calculateDaysBetween } from "@/src/utils/hooks/countDays";
import { IHouse } from "@/src/core/types/IHouse";
import toast from "react-hot-toast";

const ReserveBox: FC<IHouse> = ({ price ,id}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [passengers, setPassengers] = useState<number>(1);
  const [debouncedCheckIn] = useDebounce(checkInDate, 500);
  const [debouncedCheckOut] = useDebounce(checkOutDate, 500);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async (): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/check");
      const data = await response.json();
      console.log("Auth check response:", data); 
      setIsAuthenticated(data.isAuthenticated);
      return data.isAuthenticated;
    } catch (error) {
      console.log("Error checking auth:", error);
      return false;
    } 
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const diff = calculateDaysBetween(checkInDate, checkOutDate);
      setDays(diff);
    } else {
      setDays(0);
    }
  }, [checkInDate, checkOutDate]);

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
if (id) {
  queryParams.set("houseId", id.toString());
}
    router.replace(`?${queryParams.toString()}`, { scroll: false });
  }, [debouncedCheckIn, debouncedCheckOut]);

  const handleSearchSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAuth = await checkAuth();
    
    if (!isAuth) {
      sessionStorage.setItem("redirectAfterLogin", window.location.pathname);
      toast.error("ابتدا وارد حساب کاربری شوید");
      router.push("/login");
      return;
    }
    const queryParams = new URLSearchParams();

    if (checkInDate) queryParams.append("checkInDate", checkInDate);
    if (checkOutDate) queryParams.append("checkOutDate", checkOutDate);
    if (days) queryParams.append("days", days.toString());
    if (passengers) queryParams.append("passengers", passengers.toString());
    if (id) queryParams.append("houseId", id.toString());

    router.push(`/processreserve/travelerinfo?${queryParams.toString()}`);
  };
  const priceNumber = Number(price) || 0;
  const totalPrice = days > 0 ? priceNumber * days : priceNumber;

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

        <DaysCounter days={days} />

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
            <span className="text-gray-300 text-16-bold">★ {days} شب</span>
            <div className="flex gap-2 text-16-bold text-white">
              <span>{totalPrice}</span>
              <span>تومان</span>
            </div>
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
            <span>{price}</span>
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

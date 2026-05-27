"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider, TimePicker } from "@iprg/zaman";
import { BsChevronDown } from "react-icons/bs";
import SimpleDropdown from "../dropDown";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePickerComponent from "../datePicker";
import { useRouter, useSearchParams } from 'next/navigation';
import ListingType from "./ListingType";

interface SearchWrapperProps {
  cityOptions: { value: string; label: string }[];
}

const SearchWrapper = ({ cityOptions }: SearchWrapperProps) => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const [quryParams,setQuryParams] = useState(searchParams.get("queries"))
  const [stateType, setStateType] = useState<string>();
  const [checkInDate, setCheckInDate] = useState<string>();
  const [checkOutDate, setCheckOutDate] = useState<string>();
  const [city, setCity] = useState<string>();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryParams = new URLSearchParams()

    if (checkInDate) {
      queryParams.append("checkingInDate", checkInDate);
    }
    if (checkOutDate) {
      queryParams.append("checkingOutDate", checkOutDate);
    }
    if (city) {
      queryParams.append("address", city);
    }
    
    router.push(`${stateType}?${queryParams.toString()}`);
    console.log("Navigate to: ", queryParams.toString())
  };

  return (
    <form
      className="flex flex-col gap-4 w-full h-30"
      onSubmit={handleSearchSubmit}
    >
      <ListingType value={stateType} onChange={setStateType} />
      <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-6 bg-dark-800 border-2 border-dark-650 shadow-000-16 inset-shadow-fff-8 rounded-4xl px-6 py-5">
        <button type="submit" className="serach-button">
          <span>جستوجو کنید</span>
          <FaSearch />
        </button>
        <div className="flex-1 w-full">
          <DatePickerComponent
            paramKey="checkingOutDate"
            placeholder="... تاریخ خروج را وارد کنید"
            value={checkOutDate}
            onChange={setCheckOutDate}
            labelText="تاریخ خروج"
          />
        </div>
        <div className="flex-1 w-full">
          <DatePickerComponent
            paramKey="checkingInDate"
            placeholder="... تاریخ ورود را وارد کنید"
            value={checkInDate}
            onChange={setCheckInDate}
            labelText="تاریخ ورورد"
          />
        </div>
        <div className="flex-2 w-full">
          <SimpleDropdown
            paramKey="address"
            placeholder="استان ، شهر ، اقامتگاه ..."
            options={cityOptions}
            city={city}
            setCity={setCity}
            labelText="انتخاب مقصد"
            tagBg="bg-dark-800"
            
          />
        </div>
      </div>
    </form>
  );
};

export default SearchWrapper;

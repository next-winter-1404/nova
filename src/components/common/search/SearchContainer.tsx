"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bookingIcon from "@/public/icons/booking.svg";
import houseBuildingIcon from "@/public/icons/house-building.svg";
import moneyCheckEdit from "@/public/icons/money-check-edit.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider, TimePicker } from "@iprg/zaman";
import { BsChevronDown } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa';
import Link from "next/link";

const types = [
  { labelName: "رهن و اجاره", iconSrc: moneyCheckEdit, current: false },
  { labelName: "خرید و فروش", iconSrc: houseBuildingIcon, current: false },
  { labelName: "رزرو ملک", iconSrc: bookingIcon, current: true },
];

import SearchWrapper from './SearchWrapper';
import ListingType from './ListingType';
import { useRouter, useSearchParams } from "next/navigation";

const SearchContainer = () => {
  const router = useRouter()
  const filterParams = useSearchParams();
  const stateTypeParams = useSearchParams()
  const [selectedLabel, setSelectedLabel] = useState<string | "">(stateTypeParams.get("stateType") || "" );
  const [city, setCity] = useState('nyc');
  // const [checkInDate, setCheckInDate] = useState(filterParams.get("checkIn"));
  const [checkInDate, setCheckInDate] = useState(new Date());
  // const [checkOutDate, setCheckOutDate] = useState(filterParams.get("checkOut"));
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if(checkInDate) params.set("checkIn",checkInDate);
    if(checkOutDate) params.set("checkOut",checkOutDate);
    console.log("check in & out : params:", params)
    router.push(`?${params.toString()}`)
  }
  
  const handleSelect = (labelName: string) => {
    setSelectedLabel(labelName);
    const params = new URLSearchParams(stateTypeParams.toString());
    params.set("stateType", selectedLabel)
    console.log("params:", params)
    router.push(`?${params.toString()}`)
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[86%] h-30'>
      <div className="relative flex items-center justify-end gap-3 whitespace-nowrap">
            {types.map((type) => {
              const isActive = type.labelName === selectedLabel;
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
                    onClick={() => handleSelect(type.labelName)}
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

       <div className='flex md:flex-row flex-col-reverse items-center justify-between gap-6 bg-dark-800 border-2 border-dark-650 shadow-000-16 inset-shadow-fff-8 rounded-4xl px-6 py-5'>
      
        <button type="submit" className='serach-button'>
        <span>جستوجو کنید</span>
        <FaSearch />
        </button>
        <div className='flex-1 w-full'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
              <span className="bg-dark-700 absolute -top-3.5 right-3.5 whitespace-nowrap">: تاریخ خروج</span>
              <BsChevronDown className="w-3 h-3"/>
              <i>تاریخ خروج</i> 
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
              
              <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Tab")}>
              <div className="RightSlot">
                <CalendarProvider>
                  <Calendar
                    defaultValue={checkOutDate}
                    onChange={(e) => {
                      setCheckOutDate(new Date(e.value))
                      console.log("setCheckOutDate",checkOutDate)
                    }}
                  />
                </CalendarProvider>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="DropdownMenuSeparator" />

            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        </div>
        <div className='flex-1 w-full'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton dropMenu relative p-5 w-full " aria-label="Customise options">
              <span className="bg-dark-700 absolute -top-3.5 right-3.5">: تاریخ ورود</span>
              <BsChevronDown className="w-3 h-3"/>
              <i>تاریخ ورود</i> 
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
              
              <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Tab")}>
              <div className="RightSlot">
                <CalendarProvider>
                  <Calendar
                    defaultValue={checkInDate}
                    onChange={(e) => {
                      setCheckInDate(new Date(e.value))
                      console.log("setCheckInDate",checkInDate)
                    }}
                  />
                </CalendarProvider>
                </div>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        </div>
        <div className='flex-2 w-full'>
          <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
              <span className="bg-dark-700 absolute -top-3.5 right-3.5">انتخاب شهر</span>
              <BsChevronDown className="w-3 h-3"/>
              <i>... استان ، شهر ، اقامتگاه </i> 
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
              
              <DropdownMenu.Item className="DropdownMenuItem p-1 hover:bg-dark-900" onSelect={() => console.log("New Tab")}>
                <div className="RightSlot text-white-pure text-[16px]">
                  <Link href="#">TODO: FETCH CITIES LIST</Link>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="DropdownMenuSeparator" />

            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        </div>
        

       </div>
    </form>
  )
}

export default SearchContainer;

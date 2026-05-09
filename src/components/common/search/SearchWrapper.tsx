"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider, TimePicker } from "@iprg/zaman";
import { BsChevronDown } from "react-icons/bs";
import SimpleDropdown from "../dropDown";

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Link from "next/link";

const op1 = [
  { label: "رهن و اجاره", value:"1" },
  { label: "خرید و فروش", value:"2" },
  { label: "رزرو ملک", value:"3" },
];


const SearchWrapper = () => {

  const [city, setCity] = useState('nyc');
  const [checkInDate, setCheckInDate] = useState('nyc');
  const [checkOutDate, setCheckOutDate] = useState('nyc');
  const [calendarValue, setCalendarValue] = useState(new Date())


  const cities = [
    { value: 'nyc', label: 'New York' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'chi', label: 'Chicago' },
  ];

  return (
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
                    defaultValue={calendarValue}
                    onChange={(e) => setCalendarValue(new Date(e.value))}
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
                    defaultValue={calendarValue}
                    onChange={(e) => setCalendarValue(new Date(e.value))}
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
  )
}

export default SearchWrapper

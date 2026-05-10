"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider, TimePicker } from "@iprg/zaman";
import { BsChevronDown } from "react-icons/bs";

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import Link from "next/link";


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
    <div className='container flex-2 flex-wrap bg-dark-800 border-2 border-dark-650 shadow-000-16 inset-shadow-fff-8 rounded-4xl px-6 py-5'>
      
      <div className='flex-center gap-6'>
        <div className='serach-button'>
        <span>جستوجو کنید</span>
        <FaSearch />
        </div>
        <div className='flex-1'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
              <span className="bg-dark-700 absolute -top-3.5 right-3.5">IMPLEMENT LABEL</span>
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
        <div className='flex-1'>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton dropMenu relative p-5 w-full " aria-label="Customise options">
              <span className="bg-dark-700 absolute -top-3.5 right-3.5">IMPLEMENT LABEL</span>
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
        <div className='flex-2'>
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

    </div>
  )
}

export default SearchWrapper

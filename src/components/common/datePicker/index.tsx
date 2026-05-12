"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider } from "@iprg/zaman";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import { ITimePicker } from "@/src/core/types/ITimePicker";

const DatePickerComponent = ({paramKey,placeholder,labelText,onChange,value}:ITimePicker) => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const initailDate = searchParams.get(paramKey)
  ? new Date(searchParams.get(paramKey) as string) : new Date()
  const [calendarValue, setCalendarValue] = useState<Date>(initailDate);
  
  useEffect(() =>{
    if (value) {
      setCalendarValue(new Date(value));
    }
  },[value])
  console.log("this is value: ", value)

  const handleChange = (e:any) => {
    const selectedDate = new Date(e.value);
    setCalendarValue(selectedDate);

    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey,selectedDate.toISOString())

    onChange?.(selectedDate.toISOString());
    console.log("selectedDate is: ", selectedDate)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="IconButton dropMenu p-5 w-full"
          aria-label="Customise options"
        >
          <BsChevronDown className="w-3 h-3" />
          <i>{placeholder}</i>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onSelect={() => console.log("New Tab")}
          >
            <div className="RightSlot">
              <CalendarProvider>
                <Calendar
                  defaultValue={calendarValue}
                  onChange={handleChange}
                />
              </CalendarProvider>
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DatePickerComponent;

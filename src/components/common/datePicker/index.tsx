"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider } from "@iprg/zaman";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const DatePickerComponent = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  console.log(calendarValue);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="IconButton dropMenu p-5 w-full"
          aria-label="Customise options"
        >
          <BsChevronDown className="w-3 h-3" />
          <i>انتخاب کنید ...</i>
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
                  onChange={(e) => setCalendarValue(new Date(e.value))}
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

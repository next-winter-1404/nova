'use client'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar, CalendarProvider, TimePicker } from "@iprg/zaman";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";


interface Option {
    value: string;
    label: string;
}

interface DropMenuProps {
    options: Option[];
    value?: string;
    onChange?: (value:string) => void 
    placeholder?: string;
    dropDownLabel?: string
}


const DropMenu = ({options, onChange, value, placeholder="... انتخاب کنید ", dropDownLabel} : DropMenuProps) => {
    const [calendarValue, setCalendarValue] = useState(new Date())
    return (
      <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton dropMenu p-5 w-full" aria-label="Customise options">
           <BsChevronDown className="w-3 h-3"/>
           <i>{placeholder}</i> 
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
          <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Window")}>
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
        
  )
}

export default DropMenu;

// "use client";
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import { Calendar, CalendarProvider } from "@iprg/zaman";
// import { useEffect, useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
// import { useSearchParams } from "next/navigation";
// import { ITimePicker } from "@/src/core/types/ITimePicker";

// const DatePickerComponent = ({paramKey,placeholder,labelText,onChange,value}:ITimePicker) => {
//   const searchParams = useSearchParams();
//   const initailDate = searchParams.get(paramKey)
//   ? new Date(searchParams.get(paramKey) as string) : new Date()
//   const [calendarValue, setCalendarValue] = useState<Date>(initailDate);

//   useEffect(() =>{
//     if (value) {
//       setCalendarValue(new Date(value));
//     }
//   },[value])

//   const handleChange = (e:any) => {
//     const selectedDate = new Date(e.value);
//     setCalendarValue(selectedDate);
//     console.log(e);
//     console.log(e.value);
//     const params = new URLSearchParams(searchParams.toString());
//     params.set(paramKey,selectedDate.toISOString())

//     onChange?.(selectedDate.toISOString());
//   }
//   console.log("calendarValue--->",calendarValue);
//   return (
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger asChild>
//         <button
//           className="IconButton dropMenu p-5 w-full"
//           aria-label="Customise options"
//         >
//           <BsChevronDown className="w-3 h-3" />
//           <i className="text-gray-300">{placeholder}</i>
//         </button>
//       </DropdownMenu.Trigger>

//       <DropdownMenu.Portal>
//         <DropdownMenu.Content
//           className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800"
//           sideOffset={5}
//         >
//           <DropdownMenu.Item
//             className="DropdownMenuItem"
//             onSelect={() => console.log("New Tab")}
//           >
//             <div className="RightSlot">
//               <CalendarProvider
//                 locale="fa"
//                 direction="rtl"
//               >
//                 <Calendar
//                   defaultValue={calendarValue}
//                   onChange={handleChange}
//                 />
//               </CalendarProvider>
//             </div>
//           </DropdownMenu.Item>

//           <DropdownMenu.Separator className="DropdownMenuSeparator" />
//         </DropdownMenu.Content>
//       </DropdownMenu.Portal>
//     </DropdownMenu.Root>
//   );
// };

// export default DatePickerComponent;

"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ITimePicker } from "@/src/core/types/ITimePicker";

const DatePickerComponent = ({
  paramKey,
  placeholder,
  onChange,
  value,
}: ITimePicker) => {
  const searchParams = useSearchParams();

  const [calendarValue, setCalendarValue] = useState<any>(null);

  useEffect(() => {
    if (value) {
      setCalendarValue(new Date(value));
    } else {
      setCalendarValue(null);
    }
  }, [value]);

  const handleChange = (date: any) => {
    if (!date) return;

    setCalendarValue(date);
    console.log(typeof value, value);

    const jsDate = date.toDate();
    const gregorianDate = jsDate.toISOString().split("T")[0];

    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, gregorianDate);

    onChange?.(gregorianDate);
  };

  return (
    <DatePicker
      value={calendarValue}
      onChange={handleChange}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
      containerClassName="w-full"
      render={(_, openCalendar) => (
        <button
          type="button"
          onClick={openCalendar}
          className="IconButton dropMenu p-5 w-full flex items-center justify-between"
          dir="rtl"
        >
          <i className="text-gray-300 not-italic">
            {calendarValue
              ? new Intl.DateTimeFormat("fa-IR").format(calendarValue)
              : placeholder}
          </i>

          <BsChevronDown className="w-3 h-3" />
        </button>
      )}
    />
  );
};

export default DatePickerComponent;

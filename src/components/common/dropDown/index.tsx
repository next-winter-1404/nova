"use client";
import React, { useState, FC, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";
import { IDropDownProps } from "@/src/core/types/TDropDown";

const SimpleDropdown: FC<IDropDownProps> = ({
  options,
  paramKey,
  placeholder,
  labelText,
  setCity,
  city,
  triggerClassName = "w-full",
  tagBg = "bg-dark-700",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedValue, setSelectedValue] = useState<string>(
    searchParams.get(paramKey) || "",
  );

  useEffect(() => {
    if (city) {
      setSelectedValue(city);
    }
  }, [city]);

  const handleCitySelect = (cityValue: string) => {
    console.log("selected city value:", cityValue);

    setSelectedValue(cityValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, cityValue);

    setCity?.(cityValue);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const showSelected = (): string => {
    const selected = options.find((op) => op.value === selectedValue);
    return selected ? selected.label : placeholder;
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className="border">
        <button
          className={`IconButton dropMenu p-5  relative  ${triggerClassName}`}
          aria-label="Customise options"
          dir="rtl"
        >
          <span>{showSelected()}</span>
          <span className={`absolute -top-3 p-0.5 px-2 right-3.5 ${tagBg}`}>
            {labelText}:
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded-xl z-100 bg-dark-800 text-white cursor-pointer">
          {options.map((op) => (
            <DropdownMenu.Item
              key={op.value}
              className="DropdownMenuItem"
              onSelect={() => handleCitySelect(op.value)}
            >
              {op.label}
              {selectedValue === op.value && (
                <span className="text-blue-500 text-xs mx-2">✓</span>
              )}
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SimpleDropdown;

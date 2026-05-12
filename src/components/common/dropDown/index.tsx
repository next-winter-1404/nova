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
  onChange,
  value

}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedValue, setSelectedValue] = useState<string>(
    searchParams.get(paramKey) || ""
  );

    useEffect(() =>{
      if (value) {
        setSelectedValue(value);
      }
    },[value])

  const handleCitySelect = (cityValue: string) => {
    setSelectedValue(cityValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, cityValue);
    onChange?.(selectedValue);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const showSelected = (): string => {
    const selected = options.find((op) => op.value === selectedValue);
    return selected ? selected.label : placeholder;
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className="border">
        <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
          <span>{showSelected()}</span>
          <span className="bg-dark-700 absolute -top-3.5 right-3.5">{labelText}</span>

        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800">
          {options.map((op) => (
            <DropdownMenu.Item
              key={op.value}
              className="DropdownMenuItem"
              onSelect={() => handleCitySelect(op.value)}
            >
              {op.label}
              {selectedValue === op.value && (
                <span className="text-blue-500 text-xs">✓</span>
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

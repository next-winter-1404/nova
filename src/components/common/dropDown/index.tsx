"use client";
import React, { useState, FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";
import { IDropDownProps } from "@/src/core/types/TDropDown";

const SimpleDropdown: FC<IDropDownProps> = ({
  options,
  paramKey,
  placeholder,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedValue, setSelectedValue] = useState<string>(
    searchParams.get(paramKey) || ""
  );

  const handleCitySelect = (cityValue: string) => {
    setSelectedValue(cityValue);

    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, cityValue);
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
          <span className="bg-dark-700 absolute -top-3.5 right-3.5">IMPLEMENT LABEL</span>

        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className=" bg-white w-full rounded-md shadow-lg border border-gray-200 py-1 mt-1 z-50">
          {options.map((op) => (
            <DropdownMenu.Item
              key={op.value}
              className="px-4 py-2 text-sm text-gray-700 border cursor-pointer outline-none flex justify-between items-center"
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

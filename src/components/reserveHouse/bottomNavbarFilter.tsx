'use client';

import React, { ChangeEvent, useEffect, useState } from "react";
import SimpleDropdown from "../common/dropDown";
import Input from "../common/input/Input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

const propertyTypes = [
  { value: "apartment", label: "اپارتمان" },
  { value: "villa", label: "ویلا" },
  { value: "house", label: "خانه" },
  { value: "land", label: "زمین" },
  { value: "commercial", label: "تجاری " },
];

const BottomNavbarFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [propertyType, setPropertyType] = useState(searchParams.get("propertyType") || "");

  const [debounceMinPrice] = useDebounce(minPrice, 500);
  const [debounceMaxPrice] = useDebounce(maxPrice, 500);
  const [debouncePropertyType] = useDebounce(propertyType, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (debounceMinPrice) {
      params.set("minPrice", debounceMinPrice);
    } else {
      params.delete("minPrice");
    }
    
    if (debounceMaxPrice) {
      params.set("maxPrice", debounceMaxPrice);
    } else {
      params.delete("maxPrice");
    }
    
    if (debouncePropertyType) {
      params.set("facility", debouncePropertyType);
    } else {
      params.delete("facility");
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  }, [debounceMinPrice, debounceMaxPrice, debouncePropertyType]);

  const handleMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  
  return (
    <div className="flex justify-evenly items-center gap-4 w-[90%]">
      <Input
        labelText=":حداکثر قیمت"
        tagBgStyle={{ background: "var(--color-dark-800)" }}
        InputHeight="h-[50]"
        placeHolder="تومان"
        textColor="text-[#AAAAAA]"
        textSize="indent-5"
        borderColor="border-[#DDDDDD]"
        labelTextSize="text-[#AAAAAA]"
        type="number"
        onChange={handleMaxPrice}
        value={maxPrice}
      />
      <Input
        labelText=":حداقل قیمت"
        tagBgStyle={{ background: "var(--color-dark-800)" }}
        InputHeight="h-[50]"
        placeHolder="تومان"
        textColor="text-[#AAAAAA]"
        textSize="indent-5"
        borderColor="border-[#DDDDDD]"
        labelTextSize="text-[#AAAAAA]"
        type="number"
        onChange={handleMinPrice}
        value={minPrice}
      />

      <SimpleDropdown
        options={propertyTypes}
        paramKey="propertyType"
        placeholder="نوع ملک"
        labelText="نوع ملک"
        triggerClassName="lg:w-[250px] lg:h-[50px] text-white"
        tagBg="bg-dark-800"
      />
    </div>
  );
};

export default BottomNavbarFilter;
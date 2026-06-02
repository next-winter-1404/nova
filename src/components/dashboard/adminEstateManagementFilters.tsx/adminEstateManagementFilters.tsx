"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Modal } from '../../common/modal'
import Button from '../../common/button/page'
import { FaFilter } from 'react-icons/fa'
import Input from '../../common/input/Input'
import SimpleDropdown from '../../common/dropDown'
import { useDebounce } from 'use-debounce'
import { useRouter, useSearchParams } from 'next/navigation'

const AdminEstateManagement = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
  
    const [sort] = useState(searchParams.get("sort") || "");
    const [address, setAddress] = useState(searchParams.get("address") || "");
    const [search, setSearch] = useState(searchParams.get("search") || "");
  
    const [debounceSort] = useDebounce(sort, 500);
    const [debounceAddress] = useDebounce(address, 500);
    const [debounceSearch] = useDebounce(search, 500);
  
    useEffect(() => {
      const params = new URLSearchParams(searchParams.toString());
  
      if (debounceSort) params.set("sort", debounceSort);
      else params.delete("sort");
  
      if (debounceAddress) params.set("address", debounceAddress);
      else params.delete("address");
  
      if (debounceSearch) params.set("search", debounceSearch);
      else params.delete("search");
  
      router.push(`?${params.toString()}`, { scroll: false });
    }, [debounceSort, debounceAddress, debounceSearch]);
  
    const handleAddress = (e: ChangeEvent<HTMLInputElement>) =>
      setAddress(e.target.value);
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
      setSearch(e.target.value);
  
    const Facilities = [
      { value: "last_updated", label: "اخرین اپدیت" },
      { value: "price", label: "قیمت" },
      { value: "area", label: "منطقه" },
    ];
    const propertyTypes = [
      { value: "apartment", label: "اپارتمان" },
      { value: "villa", label: "ویلا" },
      { value: "house", label: "خانه" },
      { value: "land", label: "زمین" },
      { value: "commercial", label: "تجاری " },
    ];
  return (
  <div className='flex gap-3 py-1'>
      <Input
    labelText="جستجو"
    InputHeight="h-[50px]"
    tagBgStyle={{ background: "var(--color-dark-600)", color: "white" }}
    borderColor="border-white border"
    textColor="text-white"
    placeHolder="نام ملک مورد نظر..."
    parentWidth=" w-full"
    value={search}
    onChange={handleSearch}
    dir="rtl"
  />
    <Modal
    contentClassName="bg-dark-900"
    modalBtn={
      <Button
        text={"فیلتر"}
        buttonStyle={{
          width: 200,
          height:50,
          background: "var(--color-primary-accent-green)",
          cursor: "pointer",
          color:"black"
        }}
        icon={<FaFilter />}
      />
    }
    mainContent={
      <div className="w-full  flex-col-center gap-8">
        <Input
          labelText="آدرس"
          InputHeight="h-[50px]"
          tagBgStyle={{
            background: "var(--color-dark-900)",
            color: "white",
          }}
          borderColor="border-white border"
          textColor="text-white"
          placeHolder="آدرس ملک مورد نظر را وارد کنید"
          parentWidth="w-full"
          value={address}
          onChange={handleAddress}
          dir="rtl"
        />
        <SimpleDropdown
          options={Facilities}
          paramKey="sort"
          placeholder="مرتب سازی"
          labelText="مرتب سازی بر اساس"
          tagBg="bg-dark-900"
          triggerClassName="h-[50px] w-full bg-dark-900  "
        />
        <SimpleDropdown
          options={propertyTypes}
          paramKey="propertyType"
          placeholder="نوع ملک"
          labelText="نوع ملک"
          triggerClassName=" text-white w-full h-[50px]"
          tagBg="bg-dark-900"
        />
        <div className="flex gap-5">
          <Input
            labelText=":حداکثر قیمت"
            tagBgStyle={{ background: "var(--color-dark-900)" }}
            InputHeight="h-[50]"
            placeHolder="تومان"
            textColor="text-[#AAAAAA]"
            textSize="indent-5"
            borderColor="border-[#DDDDDD]"
            labelTextSize="text-[#AAAAAA]"
            type="number"
          />
          <Input
            labelText=":حداقل قیمت"
            tagBgStyle={{ background: "var(--color-dark-900)" }}
            InputHeight="h-[50]"
            placeHolder="تومان"
            textColor="text-[#AAAAAA]"
            textSize="indent-5"
            borderColor="border-[#DDDDDD]"
            labelTextSize="text-[#AAAAAA]"
            type="number"
          />
        </div>
      </div>
    }
  />
  </div>
  )
}

export default AdminEstateManagement

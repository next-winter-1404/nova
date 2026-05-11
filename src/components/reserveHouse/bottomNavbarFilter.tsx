import React from 'react'
import SimpleDropdown from '../common/dropDown'
import Input from '../common/input/Input'
const Facilities = [
    {
      value: "last_updated",
      label: "اخرین اپدیت",
    },
    {
      value: "price",
      label: "قیمت",
    },
    {
      value: "area",
      label: "منظقه",
    },
  ];
const BottomNavbarFilter = () => {
  return (
    <div className="flex justify-evenly items-center  w-full">
    <SimpleDropdown
      options={Facilities}
      paramKey="facilities"
      placeholder="امکانات"
      labelText="امکانات"
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
    />
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
    />
  </div>
  )
}

export default BottomNavbarFilter

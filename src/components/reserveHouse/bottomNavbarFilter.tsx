import React from "react";
import SimpleDropdown from "../common/dropDown";
import Input from "../common/input/Input";
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
    label: "منطقه",
  },
];
const BottomNavbarFilter = () => {
  return (
    <div className="flex justify-evenly items-center  w-full">
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

      <SimpleDropdown
        options={Facilities}
        paramKey="facilities"
        placeholder="امکانات"
        labelText="امکانات"
        triggerClassName="lg:w-[250px] lg:h-[50px] text-white"
        tagBg="bg-dark-800"
      />
    </div>
  );
};

export default BottomNavbarFilter;

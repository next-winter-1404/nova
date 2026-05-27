"use client";
import Button from "@/src/components/common/button/page";
import Input from "@/src/components/common/input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import megaPhone from "@/src/assets/icons/megaphone.svg";
import Image from "next/image";
import SimpleDropdown from "../common/dropDown";
import { useDebounce } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { FaFilter } from "react-icons/fa";
import { Modal } from "../common/modal";
const TopReserveHouseSection = ({
  totalCount = 0,
}: {
  totalCount?: number;
}) => {
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
    <div
      className="mt-4 bg-dark-800 flex-between rounded-3xl gap-2  lg:gap-0 p-4 w-full"
      dir="rtl"
    >
      <div className="flex justify-between w-[91%] lg:w-[81%] items-center gap-2">
        <Input
          labelText="آدرس"
          InputHeight="h-[50px]"
          tagBgStyle={{ background: "var(--color-dark-800)", color: "white" }}
          borderColor="border-white border"
          textColor="text-white"
          placeHolder="آدرس ملک مورد نظر را وارد کنید"
          parentWidth="lg:w-[223px] hidden lg:block"
          value={address}
          onChange={handleAddress}
          dir="rtl"
        />

        <div className="hidden lg:block">
          <SimpleDropdown
            options={Facilities}
            paramKey="sort"
            placeholder="مرتب سازی"
            labelText="مرتب سازی بر اساس"
            tagBg="bg-dark-800"
            triggerClassName="h-[50px] lg:w-[200px]"
          />
        </div>
        <Input
          labelText="جستجو"
          InputHeight="h-[50px]"
          tagBgStyle={{ background: "var(--color-dark-800)", color: "white" }}
          borderColor="border-white border"
          textColor="text-white"
          placeHolder="نام ملک مورد نظر..."
          parentWidth="lg:w-[619px] w-full"
          value={search}
          onChange={handleSearch}
          dir="rtl"
        />
      </div>

      <div className="hidden lg:block">
        <Button
          text={`تعداد آگهی : ${totalCount}`}
          backgroundColor="transparent"
          buttonStyle={{ background: "transparent", border: "1px solid white" }}
          icon={<Image alt="megaphone" src={megaPhone} />}
        />
      </div>

      {/* responsive */}

      <div className="block lg:hidden">
        <Modal
          contentClassName="bg-dark-900 lg:hidden"
          modalBtn={
            <Button
              text={"فیلتر"}
              buttonStyle={{
                width: 100,
                background: "var(--color-blue-purple-500)",
                cursor: "pointer",
              }}
              icon={<FaFilter />}
            />
          }
          mainContent={
            <div className="w-full lg:hidden flex-col-center gap-8">
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
                triggerClassName="lg:w-[250px] lg:h-[50px] text-white w-full h-[50px]"
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
    </div>
  );
};

export default TopReserveHouseSection;

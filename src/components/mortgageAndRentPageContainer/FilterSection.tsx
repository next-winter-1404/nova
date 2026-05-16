"use client";
import Input from "../common/input/Input";
import Button from "../common/button/page";
import Image from "next/image";
import megaPhone from "@/src/assets/icons/megaphone.svg";
import SimpleDropdown from "../common/dropDown";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

const transactionTypes = [
  { value: "rental", label: "اجاره" },
  { value: "reservation", label: "رزرو" },
  { value: "mortgage", label: "رهن" },
  { value: "sell", label: "فروش" },
];

const propertyTypes = [
  { value: "apartment", label: "اپارتمان" },
  { value: "villa", label: "ویلا" },
  { value: "house", label: "خانه" },
  { value: "land", label: "زمین" },
  { value: "commercial", label: "تجاری " },
];

const Facilities = [
  { value: "last_updated", label: "اخرین اپدیت" },
  { value: "price", label: "قیمت" },
  { value: "area", label: "منطقه" },
];

interface FilterSectionProps {
  totalCount: string;
}

const FilterSection = ({ totalCount }: FilterSectionProps) => {
  const searchParams = useSearchParams();
    const router = useRouter();
  
    const [sort,setSort] = useState(searchParams.get("sort") || "");
    const [address, setAddress] = useState(searchParams.get("address") || "");
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [propertyType, setPropertyType] = useState(searchParams.get("propertyType") || "");
    const [transactionType, setTransactionType] = useState(searchParams.get("transactionType") || "");
    const [minMortgagePrice, setMinMortgagePrice] = useState(searchParams.get("minMortgagePrice") || "");
    const [maxMortgagePrice, setMaxMortgagePrice] = useState(searchParams.get("maxMortgagePrice") || "");
    const [minRentPrice, setMinRentPrice] = useState(searchParams.get("minRentPrice") || "");
    const [maxRentPrice, setMaxRentPrice] = useState(searchParams.get("maxRentPrice") || "");
    const [minArea, setMinArea] = useState(searchParams.get("minArea") || "");
    const [maxArea, setMaxArea] = useState(searchParams.get("maxArea") || "");

  
    const [debounceSort] = useDebounce(sort, 500);
    const [debounceAddress] = useDebounce(address, 500);
    const [debounceSearch] = useDebounce(search, 500);
    const [debounceMinArea] = useDebounce(minArea, 500);

  
    useEffect(() => {
      const params = new URLSearchParams(searchParams.toString());
  
      if (debounceSort) params.set("sort", debounceSort);
      else params.delete("sort");
  
      if (debounceAddress) params.set("address", debounceAddress);
      else params.delete("address");
  
      if (debounceSearch) params.set("search", debounceSearch);
      else params.delete("search");

      if (propertyType) params.set("propertyType", propertyType);
      else params.delete("propertyType");

      if (minMortgagePrice) params.set("minMortgagePrice", minMortgagePrice);
      else params.delete("minMortgagePrice");

      if (maxMortgagePrice) params.set("maxMortgagePrice", maxMortgagePrice);
      else params.delete("maxMortgagePrice");

      if (minRentPrice) params.set("minRentPrice", minRentPrice);
      else params.delete("minRentPrice");

      if (maxRentPrice) params.set("maxRentPrice", maxRentPrice);
      else params.delete("maxRentPrice");

      if (debounceMinArea) params.set("minArea", debounceMinArea);
      else params.delete("minArea");

      if (maxArea) params.set("maxArea", maxArea);
      else params.delete("maxArea");


  
      router.push(`?${params.toString()}`, { scroll: false });
    }, [debounceSort, debounceAddress, debounceSearch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
      setSearch(e.target.value);
  const handleMinMortgagePrice = (e: ChangeEvent<HTMLInputElement>) =>
      setMinMortgagePrice(e.target.value);
  const handleMaxMortgagePrice = (e: ChangeEvent<HTMLInputElement>) =>
      setMaxMortgagePrice(e.target.value);
  const handleMinRentPrice = (e: ChangeEvent<HTMLInputElement>) =>
        setMinRentPrice(e.target.value);
  const handleMaxRentPrice = (e: ChangeEvent<HTMLInputElement>) =>
        setMaxRentPrice(e.target.value);
  const handleMinArea = (e: ChangeEvent<HTMLInputElement>) =>
        setMinArea(e.target.value);
  const handleMaxArea = (e: ChangeEvent<HTMLInputElement>) =>
        setMaxArea(e.target.value);

  return (
    <div className=" w-full flex flex-col items-center gap-15">
      <div className="w-full py-5 bg-unSelectedButton flex-center gap-4 rounded-[24px]">
        <Button
          text={`تعداد اگهی : ${totalCount}`}
          backgroundColor="transparent"
          buttonStyle={{
            background: "transparent",
            border: "1px solid white",
          }}
          icon={<Image alt="megaphone" src={megaPhone} />}
        />
        <div className="flex-1">
          <Input
            labelText=": جستوجو"
            InputHeight="h-[50px]"
            tagBgStyle={{
              background: "var(--color-dark-800)",
              color: "white",
            }}
            borderColor="border-white border"
            textColor="text-white"
            placeHolder="... نام هتل مورد نظر"
            value={address}
            onChange={handleSearch}
          />
        </div>
        <div className="flex-1">
          <SimpleDropdown
            options={transactionTypes}
            labelText=" نوع معامله"
            placeholder="رهن و اجاره"
            paramKey="transactionType"
            tagBg="bg-unSelectedButton"
            city={transactionType}
            setCity={setTransactionType}
          />
        </div>
        <div className="flex-1">
          <SimpleDropdown
            options={propertyTypes}
            labelText="نوع ملک"
            placeholder="آپارتمان"
            paramKey="propertyType"
            tagBg="bg-unSelectedButton"
            city={propertyType}
            setCity={setPropertyType}
          />
        </div>
        <div className="flex-1">
          <SimpleDropdown
            options={Facilities}
            labelText="مرتب سازی براساس"
            placeholder="جدیدترین"
            paramKey="sort"
            tagBg="bg-unSelectedButton"
            city={sort}
            setCity={setSort}
          />
        </div>
        <div className="flex-1">
          <SimpleDropdown
            options={Facilities}
            labelText="محل مورد نظر"
            placeholder="استان ، شهر ..."
            paramKey="address"
            tagBg="bg-unSelectedButton"
            city={address}
            setCity={setAddress}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-end items-end gap-6 ">
        <div className="w-full flex-center justify-end gap-4 max-w-[700px]">
          <div className="flex-center gap-4">
            <div className="flex-1">
              <Input
                labelText="حداکثر متراژ"
                InputHeight="h-[50px]"
                tagBgStyle={{
                  background: "var(--color-dark-900)",
                  color: "white",
                }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="متر"
                parentWidth="w-[126px]"
                value={maxArea}
                onChange={handleMaxArea}
                
              />
            </div>
            <div className="flex-1">
              <Input
                labelText="حداقل متراژ"
                InputHeight="h-[50px]"
                tagBgStyle={{
                  background: "var(--color-dark-900)",
                  color: "white",
                }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="متر"
                parentWidth="w-[126px]"
                value={minArea}
                onChange={handleMinArea}
              />
            </div>
            <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
          </div>

          <div className="flex-center gap-4">
            <div className="flex-1">
              <Input
                labelText="حداکثر اجاره"
                InputHeight="h-[50px]"
                tagBgStyle={{
                  background: "var(--color-dark-900)",
                  color: "white",
                }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                value={maxRentPrice}
                onChange={handleMaxRentPrice}
              />
            </div>
            <div className="flex-1">
              <Input
                labelText="حداقل اجاره"
                InputHeight="h-[50px]"
                tagBgStyle={{
                  background: "var(--color-dark-900)",
                  color: "white",
                }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                value={minRentPrice}
                onChange={handleMinRentPrice}
              />
            </div>
            <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
          </div>
          <div className="flex-center gap-4">
            <div className="flex-1">
              <Input
                labelText="حداکثر رهن"
                InputHeight="h-[50px]"
                tagBgStyle={{
                  background: "var(--color-dark-900)",
                  color: "white",
                }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                value={maxMortgagePrice}
                onChange={handleMaxMortgagePrice}
                
              />
            </div>
            <div className="flex-1">
              <Input
                labelText="حداقل رهن"
                InputHeight="h-[50px]"
                tagBgStyle={{
                  background: "var(--color-dark-900)",
                  color: "white",
                }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                value={minMortgagePrice}
                onChange={handleMinMortgagePrice}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 mx-auto bg-dark-620"></div>
      </div>
    </div>
  );
};

export default FilterSection;

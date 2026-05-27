"use client";
import Input from "../common/input/Input";
import Button from "../common/button/page";
import Image from "next/image";
import megaPhone from "@/src/assets/icons/megaphone.svg";
import SimpleDropdown from "../common/dropDown";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { FaFilter } from "react-icons/fa6";
import { Modal } from "../common/modal";

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

  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [address, setAddress] = useState(searchParams.get("address") || "");
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType") || "",
  );
  const [transactionType, setTransactionType] = useState(
    searchParams.get("transactionType") || "",
  );
  const [minMortgage, setMinMortgage] = useState(
    searchParams.get("minMortgage") || "",
  );
  const [maxMortgage, setMaxMortgage] = useState(
    searchParams.get("maxMortgage") || "",
  );
  const [minRent, setMinRent] = useState(searchParams.get("minRent") || "");
  const [maxRent, setMaxRent] = useState(searchParams.get("maxRent") || "");
  const [minArea, setMinArea] = useState(searchParams.get("minArea") || "");
  const [maxArea, setMaxArea] = useState(searchParams.get("maxArea") || "");

  const [debounceSort] = useDebounce(sort, 500);
  const [debouncetransactionType] = useDebounce(transactionType, 500);
  const [debounceAddress] = useDebounce(address, 500);
  const [debounceSearch] = useDebounce(search, 500);
  const [debounceminRent] = useDebounce(minRent, 500);
  const [debouncemaxRent] = useDebounce(maxRent, 500);
  const [debounceMinArea] = useDebounce(minArea, 500);
  const [debouncemaxArea] = useDebounce(maxArea, 500);
  const [debounceminMortgage] = useDebounce(minMortgage, 500);
  const [debouncemaxMortgage] = useDebounce(maxMortgage, 500);

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

    if (debouncetransactionType) params.set("transactionType", transactionType);
    else params.delete("transactionType");

    if (debounceminMortgage) params.set("minMortgage", minMortgage);
    else params.delete("minMortgage");
    console.log("debounceminMortgage", minMortgage);

    if (debouncemaxMortgage) params.set("maxMortgage", maxMortgage);
    else params.delete("maxMortgage");
    console.log("maxMortgage", maxMortgage);

    if (debounceminRent) params.set("minRent", minRent);
    else params.delete("minRent");
    console.log("minRent", minRent);

    if (debouncemaxRent) params.set("maxRent", maxRent);
    else params.delete("maxRent");
    console.log("maxRent", maxRent);

    if (debounceMinArea) params.set("minArea", debounceMinArea);
    else params.delete("minArea");

    if (debouncemaxArea) params.set("maxArea", maxArea);
    else params.delete("maxArea");

    router.push(`?${params.toString()}`, { scroll: false });
  }, [
    debounceSort,
    debounceAddress,
    debounceSearch,
    propertyType,
    debouncetransactionType,
    debounceminMortgage,
    debouncemaxMortgage,
    debounceminRent,
    debouncemaxRent,
    debounceMinArea,
    debouncemaxArea,
  ]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const handleAdress = (e: ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);

  const handleMinMortgage = (e: ChangeEvent<HTMLInputElement>) =>
    setMinMortgage(e.target.value);

  const handleMaxMortgage = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxMortgage(e.target.value);

  const handleMinRent = (e: ChangeEvent<HTMLInputElement>) =>
    setMinRent(e.target.value);

  const handleMaxRent = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxRent(e.target.value);

  const handleMinArea = (e: ChangeEvent<HTMLInputElement>) =>
    setMinArea(e.target.value);

  const handleMaxArea = (e: ChangeEvent<HTMLInputElement>) =>
    setMaxArea(e.target.value);

  return (
    <div className=" w-full flex flex-col items-center gap-15">
      <div className="w-full py-5 px-3 bg-unSelectedButton flex-center gap-4 rounded-[24px]">
        <div className="hidden sm:flex flex-1">
          <Button
            text={`تعداد اگهی : ${totalCount}`}
            backgroundColor="transparent"
            buttonStyle={{
              background: "transparent",
              border: "1px solid white",
            }}
            icon={<Image alt="megaphone" src={megaPhone} />}
          />
        </div>
        <div className="relative block sm:hidden">
          <Modal
            modalBtn={
              <div className=" text-white-pure p-4 border border-white-pure rounded-xl cursor-pointer">
                <FaFilter />
              </div>
            }
            mainContent={
              <div className="w-full flex-col-center gap-6.5 py-4">
                <div className="w-full">
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
                <div className="w-full">
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
                <div className="w-full">
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
                <div className="w-full flex-center justify-end gap-6">
                  <div>
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
                      value={maxRent}
                      onChange={handleMaxRent}
                    />
                  </div>
                  <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
                  <div >
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
                      value={minRent}
                      onChange={handleMinRent}
                    />
                  </div>
                </div>
                <div className="w-full flex-center justify-end gap-6">
                  <div>
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
                      value={maxRent}
                      onChange={handleMaxRent}
                    />
                  </div>
                  <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
                  <div>
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
                      value={minRent}
                      onChange={handleMinRent}
                    />
                  </div>
                </div>
                <div className="w-full flex-center justify-end gap-6 ">
                  <div>
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
                  <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
                  <div>
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
                </div>
              </div>
            }
            contentClassName="bg-dark-900"
          />
        </div>

        <div className="sm:flex-1">
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
            value={search}
            onChange={handleSearch}
            dir="rtl"

          />
        </div>
        <div className="hidden sm:flex flex-1">
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
        <div className="hidden sm:flex flex-1">
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
        <div className="hidden sm:flex flex-1">
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
        <div className="sm:flex-1">
          <Input
            labelText="محل مورد نظر"
            InputHeight="h-[50px]"
            tagBgStyle={{
              background: "var(--color-dark-800)",
              color: "white",
            }}
            borderColor="border-white border"
            textColor="text-white"
            placeHolder="استان ، شهر ..."
            value={address}
            onChange={handleAdress}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-end items-end gap-6 ">
        <div className="w-full flex-center justify-end gap-4 max-w-[700px]">
          <div className="hidden sm:flex-center gap-4 ">
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

          <div className="hidden sm:flex-center gap-4">
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
                value={maxRent}
                onChange={handleMaxRent}
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
                value={minRent}
                onChange={handleMinRent}
              />
            </div>
            <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
          </div>
          <div className="hidden sm:flex-center gap-4">
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
                value={maxMortgage}
                onChange={handleMaxMortgage}
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
                value={minMortgage}
                onChange={handleMinMortgage}
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

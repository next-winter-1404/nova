"use client";
import Button from "@/src/components/common/button/page";
import Input from "@/src/components/common/input/Input";
import { ChangeEvent, useEffect, useState } from "react";
import megaPhone from "@/src/assets/icons/megaphone.svg";
import Image from "next/image";
import SimpleDropdown from "../common/dropDown";
import { useDebounce } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";

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

  return (
    <div
      className="mt-4 bg-dark-800 flex-between rounded-3xl p-4 w-full"
      dir="rtl"
    >
      <div className="flex justify-between w-[81%] items-center gap-2">
        <Input
          labelText="آدرس"
          InputHeight="h-[50px]"
          tagBgStyle={{ background: "var(--color-dark-800)", color: "white" }}
          borderColor="border-white border"
          textColor="text-white"
          placeHolder="آدرس ملک مورد نظر را وارد کنید"
          parentWidth="lg:w-[223px]"
          value={address}
          onChange={handleAddress}
          dir="rtl"

        />

        <SimpleDropdown
          options={Facilities}
          paramKey="sort"
          placeholder="مرتب سازی"
          labelText="مرتب سازی بر اساس"
          tagBg="bg-dark-800"
          triggerClassName="h-[50px] lg:w-[200px]"
        
        />

        <Input
          labelText="جستجو"
          InputHeight="h-[50px]"
          tagBgStyle={{ background: "var(--color-dark-800)", color: "white" }}
          borderColor="border-white border"
          textColor="text-white"
          placeHolder="نام ملک مورد نظر..."
          parentWidth="lg:w-[619px]"
          value={search}
          onChange={handleSearch}
          dir="rtl"

        />
      </div>

      <Button
        text={`تعداد آگهی : ${totalCount}`}
        backgroundColor="transparent"
        buttonStyle={{ background: "transparent", border: "1px solid white" }}
        icon={<Image alt="megaphone" src={megaPhone} />}
      />
    </div>
  );
};

export default TopReserveHouseSection;

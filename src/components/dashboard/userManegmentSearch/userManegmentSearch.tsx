"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import Input from "../../common/input/Input";

const UserManegmentSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debounceSearch] = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debounceSearch) params.set("search", debounceSearch);
    else params.delete("search");

    router.push(`?${params.toString()}`, { scroll: false });
  }, [debounceSearch]);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  return (
    <Input
      labelText="جستجو"
      InputHeight="h-[50px]"
      tagBgStyle={{ background: "var(--color-dark-600)", color: "white" }}
      borderColor="border-white border"
      textColor="text-white"
      placeHolder="نام کاربر مورد نظر..."
      parentWidth=" w-full"
      value={search}
      onChange={handleSearch}
      dir="rtl"
    />
  );
};

export default UserManegmentSearch;

"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Input from "../../common/input/Input";

const SearchLocation = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        console.log(e.target.value);
        const params = new URLSearchParams(searchParams);

        if (e.target.value) {
        params.set("area_name", e.target.value);
        } else {
        params.delete("area_name");
        }

        params.set("page", "1");

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <Input
            labelText="جستجو"
            InputHeight="md:h-[50px] h-[35px] text-white border border-gray-300"
            placeHolder="نام موقعیت..."
            defaultValue={searchParams.get("area_name") || ""}
            onChange={handleSearch}
            dir="rtl"
            tagBgStyle={{ background: "var(--color-dark-600)", color: "white" }}
        />
    );
};

export default SearchLocation;
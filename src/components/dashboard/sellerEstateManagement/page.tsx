"use client";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import Input from "@/src/components/common/input/Input";
import Image from "next/image";
import React, { FC, useState } from "react";
import Add from "@/src/assets/icons/Add.svg";
import Link from "next/link";
import { IHouse } from "@/src/core/types/IHouse";
import useSearch from "@/src/utils/hooks/searchHook";
import EstateItems from "../estateItems/EstateItems";
import { SellerDeleteHouses } from "@/src/utils/sevices/api/seller/houses/deleteHouse/deleteHouse";
import { FaStar } from "react-icons/fa";
import { formatPrice } from "@/src/utils/hooks/formatPrice";

interface IProps {
  items: string[];
  house: IHouse[];
  role?: string;
}
const SellerEstateManagement: FC<IProps> = ({ items, house, role }) => {
  const [search, setSearch] = useState("");

  const result = useSearch(house, search, (house, query) =>
    house.filter((item) =>
      item.title?.toLowerCase().includes(query.toLowerCase()),
    ),
  );
  return (
    <div>
      <DashboardContentContainer
        title="لیست  املاک من"
        twTopContent="w-1/2"
        topSectionContent={
          <div className="flex gap-4 w-full">
            <Input
              parentWidth=" w-[200px] md:w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeHolder="جستجو..."
              dir="rtl"
              InputHeight="md:h-[50px]"
              borderColor="border border-white-pure placeholder-gray-300"
              tagBgStyle={{
                background: "var(--color-dark-600)",
                color: "white-pure",
              }}
              labelText="جستجو"
            />
          </div>
        }
      >
        <div className="flex flex-col gap-5 w-full">
          <ItemNavbar colsNumber={6} items={items} />

          <div className="flex flex-col gap-3 w-full">
            {result?.length > 0 ? (
              result.map((item) => (
                <div
                  key={item.id}
                  className="
            grid
            grid-cols-6
            items-center

            w-full
            bg-dark-800
            rounded-xl

            px-4 md:px-6
            py-4

            text-white-pure
            text-[11px] md:text-[15px]

            transition-all
            duration-300
            ease-out
            transform-gpu

            hover:-translate-y-1
            hover:scale-[1.01]
            hover:bg-dark-700
            hover:shadow-xl
            hover:shadow-black/30

            border
            border-transparent
            hover:border-white/10
          "
                >
                  {/* TITLE */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="hidden md:block w-[80px] h-[60px] rounded-xl bg-gray-600 shrink-0" />

                    <p className="truncate">
                      {item?.title || "عنوانی وجود ندارد"}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div
                    className="flex justify-center gap-1 whitespace-nowrap"
                    dir="rtl"
                  >
                    <span>{formatPrice(Number(item?.price)) || "--"}</span>
                    <span>تومان</span>
                  </div>

                  {/* ADDRESS */}
                  <p className="text-center truncate px-2">
                    {item?.address || "--"}
                  </p>

                  {/* RATE */}
                  <div className="flex justify-center gap-1">
                    {item?.rate ? (
                      Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                          key={index}
                          fill={index < Number(item.rate) ? "#FFD700" : "none"}
                        />
                      ))
                    ) : (
                      <span className="text-primary-accent-green">جدید</span>
                    )}
                  </div>

                  {/* CAPACITY */}
                  <p className="text-center">{item?.capacity || "--"}</p>

                  {/* ACTIONS */}
                  <div className="flex justify-center">
                    <EstateItems
                      houseId={Number(item.id)}
                      role={role}
                      deleteFunction={SellerDeleteHouses}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center py-16 text-gray-300 text-xl md:text-3xl">
                ملکی وجود ندارد
              </div>
            )}
          </div>

          <div className="flex justify-start w-full mt-4">
            <Link href="/dashboard/seller/estate-management/processcreate">
              <button className="w-[146px] h-10 rounded-xl bg-primary-accent-green text-black flex items-center justify-center gap-2 hover:opacity-90 transition">
                افزودن ملک
                <Image src={Add} alt="Add" />
              </button>
            </Link>
          </div>
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default SellerEstateManagement;

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
  role? : string;
}
const SellerEstateManagement: FC<IProps> = ({ items, house, role }) => {
    const [search, setSearch] = useState("");
    
    const result = useSearch(house, search, (house, query) =>
        house.filter((item) =>
            item.title?.toLowerCase().includes(query.toLowerCase())
        )
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
                    borderColor="border border-white placeholder-gray-300"
                    tagBgStyle={{ background: "var(--color-dark-600)", color: "white" }}
                    labelText="جستجو"
                />
            </div>
            }
        >
            <div className="flex flex-col gap-9 items-end">
                <div className="flex flex-col gap-5 w-full">
                    <ItemNavbar colsNumber={5} items={items} />
                    <div className="flex text-white mt-5 items-center">
                        {result?.length > 0 ? (
                            <div className="w-full flex flex-col gap-5">
                            <>
                                {result?.map((item) => (
                                <div
                                    className="flex justify-between w-full items-center"
                                    key={item.id}
                                >
                                    <div className="grid grid-cols-5 w-full  items-center">
                                    <div className="flex gap-4 items-center w-[300px] ">
                                        <div className="w-[100px] h-[72px] rounded-xl bg-gray-600"></div>
                                        <div className="whitespace-nowrap">
                                        {item?.title || "عنوانی وجود ندارد"}
                                        </div>
                                    </div>
                                    <div className="flex-center gap-1 " dir="rtl">
                                        <span>{formatPrice(Number(item?.price)) || "--"}</span>
                                        <span>تومان</span>
                                    </div>
                                    <div className="ml-[105px] text-center">
                                        {item?.address || "--"}
                                    </div>

                                    <div className=" text-center flex gap-1 mr-[25px]">
                                        {item?.rate ? (   
                                            <>
                                                {Array.from({length: 5}).map((_, index) => (
                                                    <FaStar 
                                                        key={index}
                                                        fill = {index < Number(item?.rate) ? "#FFD700" : "none"}
                                                    />
                                                ))}
                                            </>
                                        ) : (
                                            <span className="text-primary-accent-green">
                                                جدید
                                            </span>
                                            )}
                                    </div>
                                    <div className=" mr-[5px]">
                                        {item?.capacity || "--"}
                                    </div>
                                    </div>

                                    <EstateItems houseId={Number(item.id)} role={role} deleteFunction={SellerDeleteHouses}/>
                                </div>
                                ))}
                            </>
                            </div>
                        ) : (
                            <div className="text-4xl text-gray-300">رزوری وجود ندارد</div>
                        )}
                    </div>

                </div>
            <div className="flex justify-start w-full">
                <Link href={"/dashboard/seller/estate-management/processcreate"}>
                <button className="w-[146px] rounded-[12px] h-10 bg-primary-accent-green text-black text-[16px] flex items-center justify-center gap-2">
                    افرودن ملک
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

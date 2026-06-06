"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import CardContainer from "@/src/components/common/card/page";
import imagePlaceHolder from "@/src/assets/images/imagePlaceHolder (2).png";

import { IHouse } from "@/src/core/types/IHouse";
import { getComparison } from "@/src/utils/sevices/api/comparison/getComparison";
import { Breadcrumb } from "@/src/components/common/breadCrumbs";

type CompareFieldKey =
  | "price"
  | "rooms"
  | "bathrooms"
  | "parking"
  | "rate"
  | "capacity"
  | "categories"
  | "yard_type"
  | "transaction_type";

const compareFields: {
  label: string;
  key: CompareFieldKey;
}[] = [
  { label: "قیمت", key: "price" },
  { label: "اتاق", key: "rooms" },
  { label: "حمام", key: "bathrooms" },
  { label: "پارکینگ", key: "parking" },
  { label: "امتیاز", key: "rate" },
  { label: "نوع حیاط", key: "yard_type" },
  { label: "ظرفیت", key: "capacity" },
  { label: "نوع ملک", key: "categories" },
  { label: "نوع معامله", key: "transaction_type" },
];

const transactionMap: Record<string, string> = {
  rental: "اجاره",
  mortgage: "رهن",
  reservation: "رزرو",
  direct_purchase: "خرید مستقیم",
};

const categoryMap: Record<string, string> = {
  apartment: "آپارتمان",
  villa: "ویلا",
  house: "خانه",
  land : "زمین",
  commercial : "تجاری"
};

const yardTypeMap: Record<string, string> = {
  garden: "حیاط",
  terrace: "تراس",
  null: "بدون حیاط",
};

export default function Compare() {
  const searchParams = useSearchParams();
  const ids = searchParams.get("ids");
  const [houses, setHouses] = useState<IHouse[]>([]);
  const items = [
    { label: "مقایسه املاک"},
  ];
  useEffect(() => {
    if (!ids) return;

    const fetchData = async () => {
      try {
        const data = await getComparison({
          ids,
        });

        setHouses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [ids]);

  const getValue = (
    house: IHouse,
    key: CompareFieldKey
  ) => {
    const value = house[key];

    if (key === "transaction_type") {
      return (
        transactionMap[String(value)] ??
        value ??
        "--"
      );
    }

    if (key === "yard_type") {
      return (
        yardTypeMap[String(value)] ??
        value ??
        "--"
      );
    }

    if (key === "categories") {
      if (!Array.isArray(value)) return "--";
      return value
        .map(
          (item) =>
            categoryMap[item] ?? item
        )
        .join(" ، ");
    }
    return value ?? "--";
  };

  return (
    <div  className="container mx-auto py-10 mb-15">
      <div className="mt-25" dir="rtl">
        <Breadcrumb items={items}/>
        <p className="text-gray-400 mt-5">
          مشخصات و امکانات {houses.length} ملک را کنار هم بررسی کنید .
        </p>
      </div>
      <div
        className="grid gap-6 mt-10"
        style={{
          gridTemplateColumns: `repeat(${houses.length}, 1fr)`,
        }}
      >
        {houses.map((house) => (
          <div
            key={house.id}
            className=" border-gray-300 rounded-2xl p-4"
          >
            <div className="flex flex-col items-center gap-6">
              <CardContainer
                curveColor="#393939"
                cavity="round"
                labelContent={
                  <div className="w-[67px] h-[30px]" />
                }
                labelSize="md"
                mainContent={
                  <div className="w-[274px] h-[156px] bg-dark-600 rounded-2xl">
                    <Image
                      src={imagePlaceHolder}
                      alt="property"
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                }
                labelBackground="bg-dark-700"
                mainExtraStyle="bg-dark-700 p-6"
                labelExtraStyle={{
                  height: "45px",
                }}
                width="w-[330px]"
              />

              <span className="text-[19px] text-white-pure">
                {house.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-6" dir="rtl">
        {compareFields.map((field) => (
          <div
            key={field.key}
            className="rounded-2xl border border-gray-300 p-6"
          >
            <h3 className="mb-4 text-lg text-primary-accent-green font-bold">
              {field.label} :
            </h3>
            
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${houses.length}, 1fr)`,
              }}
            >
              {houses.map((house) => (
                <div
                key={`${field.key}-${house.id}`}
                className="rounded-xl bg-dark-700 p-4"
              >
                <div className="text-sm text-gray-400 mb-2">
                  {house.title}
                </div>
              
                <div className="text-center text-primary-accent-green font-semibold">
                  {getValue(house, field.key)}
                </div>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
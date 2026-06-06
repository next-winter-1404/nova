'use client'

import CardContainer from "@/src/components/common/card/page"
import ProductCard from "@/src/components/common/productCard/ProductCard"
import { IHouse } from "@/src/core/types/IHouse"
import { useCompareStore } from "@/src/stores/compare-store"
import { getComparison } from "@/src/utils/sevices/api/comparison/getComparison"
import Image from "next/image"
import imagePlaceHolder from "@/src/assets/images/imagePlaceHolder (2).png"
import { useEffect, useState } from "react"

const Compare = () => {
    const compareIds = useCompareStore(
        (state) => state.compareIds
    )

    const [houses, setHouses] = useState<IHouse[]>([])

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
            {label: "نوع حیاط", key : "yard_type"},
            { label: "ظرفیت", key: "capacity" },
            { label: "نوع ملک", key: "categories" },
            {label: "نوع معامله", key : "transaction_type"},
        ];

    useEffect(() => {
        if (compareIds.length < 2) return;
        const fetchData = async () => {
            const data = await getComparison({
                ids : compareIds.join(",")
            })
            setHouses(data)
        };
        fetchData();
    }, [compareIds])

    return (
        <>
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-8">
            مقایسه املاک
            </h1>
        
            <div className="grid grid-cols-2 gap-6">
                {houses.map((house) => (
                    <div
                        key={house.id}
                        className="border border-gray-300 rounded-2xl p-4"
                        >
                        <div className='items-center flex flex-col gap-6'>
                            <CardContainer
                                curveColor='#393939'
                                cavity="round"
                                labelContent={<div className="w-[67px] h-[30px] "></div>}
                                labelSize="md"
                                mainContent={<div className='w-[274px] h-[156px] bg-dark-600 rounded-2xl'>{house.photos || <Image src={imagePlaceHolder} alt='imagePlaceHolder' className='w-full h-full rounded-2xl'/>}</div>                    
                                }                            
                                labelBackground="bg-dark-700 "
                                mainExtraStyle="bg-dark-700 p-6" 
                                
                                labelExtraStyle={{height:'45px'}}
                                width='w-[370px]'
                            />
                            <div className='h-[30px] items-center flex'>
                                <span className='text-[19px] text-white-pure'> {house.title} </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        <div className="mt-10 flex flex-col gap-4">
        {compareFields.map((field) => (
          <div
            key={field.key}
            className="border rounded-xl p-4"
          >
            <h3 className="font-bold mb-4">
              {field.label}
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
                  className="text-center"
                >
                  {house[field.key] ?? "--"}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </>
        );

}

export default Compare
"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import RowProductCard from "../../common/productCard/RowProductCard";
import { IHouse } from "@/src/core/types/IHouse";

interface IProp {
  sellerHouses: IHouse[];
}

const SellerHouse: FC<IProp> = ({ sellerHouses }) => {
  const router = useRouter();

  const handleSelectHouse = (houseId: number) => {
    router.push(`?houseId=${houseId}`, { scroll: false });
  };

  return (
    <div>
      {sellerHouses.length > 0 ? (
        sellerHouses.map((house) => (
          <div
            key={house.id}
            className="hover:bg-dark-600 p-5 rounded-xl cursor-pointer"
            onClick={() => handleSelectHouse(Number(house.id))}
          >
            <RowProductCard
              address={house.address}
              price={house.price}
              discounted_price={house.discounted_price}
              title={house.title}
              parking={house.parking}
              bathrooms={house.bathrooms}
              rooms={house.rooms}
              rate={house.rate}
              href=""
            />
          </div>
        ))
      ) : (
        <div className="text-3xl text-gray-300 w-full text-center">
          شما ملکی ندارید :)
        </div>
      )}
    </div>
  );
};

export default SellerHouse;
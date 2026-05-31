"use client";
import React, { use, useState } from "react";
import { TbCreditCard, TbDots, TbDotsVertical } from "react-icons/tb";
import { Modal } from "../../common/modal";
import { IBooking } from "@/src/core/types/IBooking";
import { useQuery } from "@tanstack/react-query";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { IHouse } from "@/src/core/types/IHouse";
import ProductCard from "../../common/productCard/ProductCard";
import Button from "../../common/button/page";
import ItemNavbar from "../../common/dashboardItemNavbar/ItemNavbar";
import DropMenu from "../../common/dropMenu/DropMenu";
import { FiAlertCircle } from "react-icons/fi";
interface IReservationItemProps {
  item: IBooking;
}
const ReservationItem = ({ item }: IReservationItemProps) => {
  const [selected, setSelected] = useState<number | null | string | undefined>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: houseDetail } = useQuery<IHouse | null>({
    queryKey: ["houseDetail", selected],
    queryFn: () => getHousesDetail(Number(selected)),
    enabled: selected !== null,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });
  const getTagsArray = (tags: any): string[] => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === "string") return [tags];
    return [];
  };
  const navbarItem = ["نام", "کد ملی", "جنسیت", "تاریخ تولد"];
  const tagsArray = getTagsArray(houseDetail?.tags);
  const handleOpenModal = () => {
    setSelected(item?.houseId || null);
    setIsModalOpen(true);
  };
  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => handleOpenModal(),
    },

    {
      label: "پرداخت",
      icon: <TbCreditCard className="mt-px text-white" />,
    },
  ];

  return (
    <>
      <DropMenu
        trigger={
          <div>
            <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
            <TbDotsVertical className="w-5 h-5 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
          </div>
        }
        items={menuItems}
        side="bottom"
        align="end"
      />
      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        modalBtn={<div></div>}
        contentClassName=" bg-dark-900"
        width="w-[55%]"
        mainContent={
          <div className="flex justify-between">
            <div className=" text-white flex flex-col justify-between ">
              <div className="flex-col flex gap-5 ">
                <p>{houseDetail?.caption || "توضیحاتی وجود ندارد"}</p>
                <div className="flex gap-4" dir="rtl">
                  <span className="text-gray-300">برچسب ها : </span>
                  <div className="flex gap-2 flex-wrap">
                    {tagsArray.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-accent-green/20 text-primary-accent-green rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Modal
                  modalBtn={
                    <Button
                      text={"لیست مسافرها"}
                      buttonStyle={{
                        background: "var(--color-primary-accent-green)",
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                  }
                  contentClassName="bg-dark-800"
                  mainContent={
                    <div>
                      {item.traveler_details?.map((traveler) => (
                        <div
                          className="flex flex-col gap-5"
                          dir="rtl"
                          key={`${traveler.firstName} - ${traveler.nationalId}`}
                        >
                          <ItemNavbar
                            colsNumber={4}
                            items={navbarItem}
                            twClassName="whitespace-nowrap"
                          />
                          <div className="grid grid-cols-4 gap-4 text-white">
                            <span>
                              {`${traveler.firstName} ${traveler.lastName}` ||
                                "نام کاربر"}
                            </span>
                            <span>{traveler.nationalId || "----"}</span>
                            <span className="text-center">
                              {traveler.gender || "--"}
                            </span>
                            <span>{traveler.birthDate || "----"}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  }
                />
                <Button
                  text={"رزرو ها"}
                  buttonStyle={{
                    background: "var(--color-primary-accent-green)",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <ProductCard
              address={houseDetail?.address}
              bathrooms={houseDetail?.bathrooms}
              capacity={houseDetail?.capacity}
              parking={houseDetail?.parking}
              photos={houseDetail?.photos}
              rate={houseDetail?.rate}
              price={houseDetail?.price}
              title={houseDetail?.title}
              discounted_price={houseDetail?.discounted_price}
            />
          </div>
        }
      />
    </>
  );
};

export default ReservationItem;

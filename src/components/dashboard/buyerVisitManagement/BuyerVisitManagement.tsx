"use client";
import { FC, useState } from "react";
import { Modal } from "../../common/modal";
import { useQuery } from "@tanstack/react-query";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { IHouse } from "@/src/core/types/IHouse";
import {
  TbHome,
  TbMapPin,
  TbUsers,
  TbDoor,
  TbBath,
  TbCar,
  TbCash,
  TbStar,
  TbPercentage,
  TbPhoto,
  TbEye,
} from "react-icons/tb";
import Button from "../../common/button/page";
import { useRouter } from "next/navigation";
interface IProp {
  houseId: number;
}
const BuyerVisitManagement: FC<IProp> = ({ houseId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  //   api calling
  const { data: houseDetail, isLoading } = useQuery<IHouse | null>({
    queryKey: ["housesDetail", houseId],
    queryFn: () => getHousesDetail(Number(houseId)),
    enabled: !!houseId,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });

  const houseInfo = [
    {
      label: "عنوان",
      value: houseDetail?.title,
      icon: <TbHome className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "آدرس",
      value: houseDetail?.address,
      icon: <TbMapPin className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "ظرفیت",
      value: houseDetail?.capacity,
      icon: <TbUsers className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "اتاق‌ها",
      value: houseDetail?.rooms,
      icon: <TbDoor className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "حمام",
      value: houseDetail?.bathrooms,
      icon: <TbBath className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "پارکینگ",
      value: houseDetail?.parking ? "دارد" : "ندارد",
      icon: <TbCar className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "قیمت",
      value: houseDetail?.price
        ? `${houseDetail.price.toLocaleString()} تومان`
        : "--",
      icon: <TbCash className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "امتیاز",
      value: houseDetail?.rate,
      icon: <TbStar className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "تخفیف",
      value: houseDetail?.discounted_price
        ? `${houseDetail.discounted_price.toLocaleString()} تومان`
        : "--",
      icon: <TbPercentage className="w-4 h-4 text-gray-300" />,
    },
    {
      label: "تعداد عکس‌ها",
      value: houseDetail?.photos?.length || 0,
      icon: <TbPhoto className="w-4 h-4 text-gray-300" />,
    },
  ];
  return (
    <div className=" ml-5">
      <TbEye onClick={() => setIsModalOpen(true)} className="w-5 h-5 cursor-pointer text-gray-300"/>
      {/* house details */}
      <Modal
        contentClassName=" bg-dark-900"
        mainContent={
          <div className="flex flex-col gap-5">
            {isLoading ? (
              <div className="w-full text-gray-300 text-3xl text-center">
                در حال بارگزاری....
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 text-white-pure" dir="rtl">
                {houseInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark-800 p-3 rounded-xl flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-gray-300">
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </div>

                    <span className="text-white-pure font-medium">
                      {item.value ?? "--"}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <Button
              buttonStyle={{
                width: "100%",
                background: "var(--color-primary-accent-green)",
                color: "black",
                cursor:"pointer"
              }}
              text={"مشاهده صفحه ملک"}
              onClick={() => {
                router.push(`/mortgageandhouserent/${houseId}`);
              }}
            />
          </div>
        }
        onOpenChange={setIsModalOpen}
        open={isModalOpen}
      />
    </div>
  );
};

export default BuyerVisitManagement;

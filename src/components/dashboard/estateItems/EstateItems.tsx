"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { FiAlertCircle } from "react-icons/fi";
import { Modal } from "../../common/modal";
import { useQuery } from "@tanstack/react-query";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { IHouse } from "@/src/core/types/IHouse";
import ProductCard from "../../common/productCard/ProductCard";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AlertComponent from "../../common/alert/alert";
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
} from "react-icons/tb";
interface IProp {
  houseId: number;
  role?: string;
  deleteFunction?: any;
}
const EstateItems: FC<IProp> = ({ houseId, role, deleteFunction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const router = useRouter();

  //   api calling
  const { data: houseDetail, isLoading } = useQuery<IHouse | null>({
    queryKey: ["housesDetail", houseId],
    queryFn: () => getHousesDetail(Number(houseId)),
    enabled: !!houseId,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });

  const handleDeleteHouse = async () => {
    try {
      await deleteFunction(houseId);
      toast.success("ملک با موفقیت حذف شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف ملک ");
      console.error(error);
    }
  };

  // drop down items with their functions
  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => setIsModalOpen(true),
    },

    {
      label: "ویرایش",
      icon: <TbEdit className="mt-px text-white" />,
      onClick: () =>
        router.push(`/dashboard/${role}/estate-management/edit/${houseId}`),
    },
    {
      label: "حذف",
      icon: <TbTrash className="mt-px text-white" />,
      onClick: () => setIsAlertModalOpen(true),
    },
  ];
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
    <div>
      <DropMenu
        trigger={
          <div>
            <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
            <TbDotsVertical className="w-4 h-4 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
          </div>
        }
        items={menuItems}
        side="right"
        align="end"
      />
      {/* house details */}
      <Modal
        contentClassName=" bg-dark-900"
        mainContent={
          <div>
            {isLoading ? (
              <div className="w-full text-gray-300 text-3xl text-center">
                در حال بارگزاری....
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 text-white" dir="rtl">
                {houseInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-dark-800 p-3 rounded-xl flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2 text-gray-300">
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </div>

                    <span className="text-white font-medium">
                      {item.value ?? "--"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        }
        onOpenChange={setIsModalOpen}
        open={isModalOpen}
      />

      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از انتخاب خود مطمعن هستید؟"
        isModalOpen={isAlertModalOpen}
        setIsModalOpen={setIsAlertModalOpen}
        onClickFunction={handleDeleteHouse}
      />
    </div>
  );
};

export default EstateItems;

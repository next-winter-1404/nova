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
import { deleteHouses } from "@/src/utils/sevices/api/admin/houses/deleteHouses/deleteHouses";
interface IProp {
  houseId: number;
  role?: string;
}
const EstateItems: FC<IProp> = ({ houseId,role }) => {
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
      await deleteHouses(houseId);
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
      onClick: () => router.push(`/dashboard/${role}/estate-management/edit/${houseId}`),
    },
    {
      label: "حذف",
      icon: <TbTrash className="mt-px text-white" />,
      onClick: () => setIsAlertModalOpen(true),
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
              <div>
                <ProductCard
                  address={houseDetail?.address}
                  bathrooms={houseDetail?.bathrooms}
                  buttonText="قیمت"
                  discounted_price={houseDetail?.discounted_price}
                  href={`/reserve-house/${houseId}`}
                  parking={houseDetail?.parking}
                  price={houseDetail?.price}
                  rate={houseDetail?.rate}
                  rooms={houseDetail?.rooms}
                  photos={houseDetail?.photos}
                  title={houseDetail?.title}
                />
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

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
interface IProp {
  houseId: number;
}
const EstateItems: FC<IProp> = ({ houseId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState<number>();
  const router = useRouter();
  //   api callings

  const { data: houseDetail, isLoading } = useQuery<IHouse | null>({
    queryKey: ["housesDetail", selectedHouse],
    queryFn: () => getHousesDetail(Number(selectedHouse)),
    enabled: !!selectedHouse,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });

  //   edit and delete reservation function
//   const updatePayment = async () => {
//     try {
//       //   await editPayment(paymentId!, updateValue);
//       toast.success(" با موفقیت ویرایش شد ");
//       setIsAlertModalOpen(false);
//       router.refresh();
//     } catch (error) {
//       toast.error("خطا در ویرایش  ");
//       console.error(error);
//     }
//   };

//   const handleDeletePayment = async () => {
//     try {
//       // await deletePayment(paymentId);
//       toast.success("پرداخت با موفقیت حذف شد ");
//       router.refresh();
//     } catch (error) {
//       toast.error("خطا در حذف پرداخت ");
//       console.error(error);
//     }
//   };
  const handleDetail = () => {
    setSelectedHouse(houseId);
    setIsModalOpen(true);
  };
  // drop down items with their functions
  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => handleDetail(),
    },

    {
      label: "ویرایش",
      icon: <TbEdit className="mt-px text-white" />,
      onClick: () => handleDetail(),
    },
    {
      label: "حذف",
      icon: <TbTrash className="mt-px text-white" />,
    //   onClick: () => handleDeletePayment(),
    },
  ];

  const navbarItem = ["تاریخ تولد", " جنسیت", "کدملی", " نام"];

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
      {/* booking information modal (house,user,dates) */}
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
                  capacity={houseDetail?.capacity}
                  caption={houseDetail?.caption}
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

      {/* travelers detail modal */}

      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از انتخاب خود مطمعن هستید؟"
        isModalOpen={isAlertModalOpen}
        setIsModalOpen={setIsAlertModalOpen}
        // onClickFunction={updatePayment}
      />
    </div>
  );
};

export default EstateItems;

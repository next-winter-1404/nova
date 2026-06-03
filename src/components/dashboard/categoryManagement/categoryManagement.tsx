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
import Input from "../../common/input/Input";
import { adminDeleteCategory } from "@/src/utils/sevices/api/category/deleteCategory";
interface IProp {

  categoryName?: string;
  categoryId?: number;
  
}
const CategoryItems: FC<IProp> = ({ categoryName,categoryId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const router = useRouter();

 


  const handleDeleteHouse = async () => {
    try {
      await adminDeleteCategory(Number(categoryId));
      toast.success("دسته بندی با موفقیت حذف شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف دسته بندی ");
      console.error(error);
    }
  };

  // drop down items with their functions
  const menuItems = [
  

    {
      label: "ویرایش",
      icon: <TbEdit className="mt-px text-white" />,
      onClick: () =>setIsEditModalOpen(true) ,
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
      <Modal
        contentClassName=" bg-dark-900"
        mainContent={
        <Input InputHeight="h-[50px] text-white" defaultValue={categoryName}/>
        }
        onOpenChange={setIsEditModalOpen}
        open={isEditModalOpen}
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

export default CategoryItems;

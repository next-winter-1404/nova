"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import AlertComponent from "../../common/alert/alert";
import toast from "react-hot-toast";
import { adminDeleteSocial } from "@/src/utils/sevices/api/socialMedia/deleteSocial";
interface IProp {
    mediaId: number;
}
const SocialMediaItemsManagement: FC<IProp> = ({ mediaId}) => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const router = useRouter();

  //   api calling
  const handleDeleteSocial = async () => {
    try {
      await adminDeleteSocial(mediaId);
      toast.success("مقاله با موفقیت حذف شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف مقاله ");
      console.error(error);
    }
  };

  // drop down items with their functions
  const menuItems = [
    {
      label: "ویرایش",
      icon: <TbEdit className="mt-px text-white" />,
      onClick: () => router.push(`/dashboard/admin/social-media/edit/${mediaId}`),
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
    
      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از انتخاب خود مطمعن هستید؟"
        isModalOpen={isAlertModalOpen}
        setIsModalOpen={setIsAlertModalOpen}
        onClickFunction={handleDeleteSocial}
      />
    </div>
  );
};

export default SocialMediaItemsManagement;

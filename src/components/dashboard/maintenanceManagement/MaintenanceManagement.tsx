"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbCheck, TbDots, TbDotsVertical } from "react-icons/tb";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import AlertComponent from "../../common/alert/alert";
import toast from "react-hot-toast";
import { Modal } from "../../common/modal";
import { editMaintenance } from "@/src/utils/sevices/api/maintenanceRequests/editMaintenance";
import { deleteMaintenance } from "@/src/utils/sevices/api/maintenanceRequests/deleteMaintenance";
interface IProp {
  MaintenanceId: number;
  description?: string;
}
const MaintenanceManagement: FC<IProp> = ({ MaintenanceId, description }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isDetailModal, setIsDetailModal] = useState(false);

  const router = useRouter();

  //   api calling
  const handleCancelVisit = async () => {
    try {
      await deleteMaintenance(MaintenanceId);
      toast.success(" درخواست با موفقیت حذف شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف درخواست ");
      console.error(error);
    }
  };
  const handelAcceptVisit = async () => {
    try {
      await editMaintenance(MaintenanceId, { status: "completed" });
      toast.success(" درخواست با موفقیت تایید شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در تایید  درخواست  ");
      console.error(error);
    }
  };

  const menuItems = [
    {
      label: "جزییات",
      icon: <TbEdit className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsDetailModal(true),
    },
    {
      label: "تایید",
      icon: <TbCheck className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsAcceptModalOpen(true),
    },
    {
      label: "حذف",
      icon: <TbTrash className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsCancelModalOpen(true),
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
        contentClassName="bg-dark-900 text-white"
        modalTitle="متن کامل درخواست"
        mainContent={
          <div
            className="border border-gray-300 rounded-xl min-h-[300px] p-2"
            dir="rtl"
          >
            {description}
          </div>
        }
        onOpenChange={setIsDetailModal}
        open={isDetailModal}
      />

      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از لغو کردن این دخواست مطمعن هستید؟"
        isModalOpen={isCancelModalOpen}
        setIsModalOpen={setIsCancelModalOpen}
        onClickFunction={handleCancelVisit}
      />
      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از تایید این درخواست مطمعن هستید؟"
        isModalOpen={isAcceptModalOpen}
        setIsModalOpen={setIsAcceptModalOpen}
        onClickFunction={handelAcceptVisit}
      />
    </div>
  );
};

export default MaintenanceManagement;

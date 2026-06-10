"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import AlertComponent from "../../common/alert/alert";
import toast from "react-hot-toast";
import { adminDeleteLocation } from "@/src/utils/sevices/api/locations/deleteLocation/deleteLocation";
import { Modal } from "../../common/modal";
interface IProp {
    locationId: number;
    areaName : string;
    lat : string;
    lng : string
}

const LocationItemsManagement : FC<IProp> = ({locationId, areaName, lat, lng}) => {
    const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
    const [isDetailModal, setIsDetailModal] = useState(false);
    const router = useRouter();
  //   api calling
    const handleDeleteLocation = async () => {
        try {
        await adminDeleteLocation(locationId);
        toast.success("موقعیت با موفقیت حذف شد ");
        router.refresh();
        } catch (error) {
        toast.error("خطا در حذف موقعیت ");
        console.error(error);
        }
    };

  // drop down items with their functions
    const menuItems = [
        {
            label: "جزییات",
            icon: <TbEdit className="w-4 h-4 text-white" />,
            onClick: () => setIsDetailModal(true),
        },
        {
            label: "ویرایش",
            icon: <TbEdit className="mt-px text-white" />,
            onClick: () => router.push(`/dashboard/admin/locations/edit/${locationId}`),
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
            contentClassName="bg-dark-900 text-white"
            modalTitle=" موقعیت مکانی"
            mainContent={
                <div
                className="border flex flex-col gap-3.5 border-gray-300 rounded-xl min-h-[300px] p-2"
                dir="rtl"
                >
                    {areaName}

                    <div>
                        نقشه
                    </div>
                </div>
            }
            onOpenChange={setIsDetailModal}
            open={isDetailModal}
        />
        
        <AlertComponent
            acceptButtonText="بله"
            alertText="ایا از انتخاب خود مطمعن هستید؟"
            isModalOpen={isAlertModalOpen}
            setIsModalOpen={setIsAlertModalOpen}
            onClickFunction={handleDeleteLocation}
        />
        </div>
    );
}

export default LocationItemsManagement
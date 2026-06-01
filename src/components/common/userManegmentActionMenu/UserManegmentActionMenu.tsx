"use client";
import { useState } from "react";
import { GoBell } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import DropMenu from "../dropMenu/DropMenu";
import { Modal } from "../modal";
import Input from "../input/Input";
import EditFormModal from "./EditFormModal";
import { TbDots, TbDotsVertical } from "react-icons/tb";

interface UserId {
  id: number;
}

const UserManegmentActionMenu = ({ id }: UserId) => {
  const [selectedUser, setSelectedUser] = useState<IAdminUserEdit | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState<IAdminUserEdit>({
    email: "",
    password: "",
    fullName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailVerified: "",
    profilePicture: "",
  });

  const openEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleDelete = () => {};
  const handleRole = () => {};
  const droMItems = [
    {
      label: " ویرایش",
      icon: <MdEdit className="w-4 h-4 text-white" />,
      onClick: () => openEditModal(),
    },
    {
      label: " حذف",
      icon: <TiDeleteOutline className="w-4 h-4 text-white" />,
      onClick: () => handleDelete(),
    },
    {
      label: "نقش",
      icon: <FaUserPlus className="w-4 h-4 text-white" />,
      onClick: () => handleRole(),
    },
    {
      label: "اعلان",
      icon: <GoBell className="w-4 h-4 text-white" />,
      onClick: () => handleRole(),
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
        items={droMItems}
        align="end"
        side="right"
      />
      <EditFormModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        formData={formData}
        setFormData={setFormData}
        userId={id}
      />
    </>
  );
};

export default UserManegmentActionMenu;

// {
//       label: "جزییات",
//       icon: <FiAlertCircle className="w-4 h-4 text-white" />,
//       onClick: () => handleOpenModal(),
//     },

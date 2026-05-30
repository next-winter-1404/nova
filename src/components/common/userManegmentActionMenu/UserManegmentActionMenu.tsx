"use client";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import DropMenu from "../dropMenu/DropMenu";
import { Modal } from "../modal";

const UserManegmentActionMenu = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleRole = () => {};
  const droMItems = [
    {
      label: " ویرایش",
      icon: <MdEdit className="w-4 h-4 text-white" />,
      onClick: () => handleEdit(),
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
  ];

  return (
    <>
      <DropMenu
        trigger={
          <div className=" flex-center text-white-pure">
            <CiMenuKebab />
          </div>
        }
        items={droMItems}
        align="end"
        side="right"
      />
      <Modal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        modalBtn={<div></div>}
        contentClassName=" bg-dark-900"
        width="w-[55%]"
        mainContent={<div className="flex justify-between">fdsfdsfdsf</div>}
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

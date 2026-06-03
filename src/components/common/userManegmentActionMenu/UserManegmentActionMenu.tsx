"use client";
import { useState } from "react";
import { GoBell } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import DropMenu from "../dropMenu/DropMenu";
import { Modal } from "../modal";
import Input from "../input/Input";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { IAdminAllUsers } from "@/src/core/types/IAdminGetAllUser";
import Image from "next/image";
import { PiImageBrokenDuotone } from "react-icons/pi";
import LoginButton from "../../login/button/LoginButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser } from "@/src/utils/sevices/api/admin/users/editUser/editUser";
import toast from "react-hot-toast";
import AlertComponent from "../alert/alert";
import { deleteUser } from "@/src/utils/sevices/api/admin/users/deleteUser/deleteUser";
import { givingAdminRole } from "@/src/utils/sevices/api/admin/users/role/givingAdminRole";
import { CgDanger } from "react-icons/cg";
import InfoCardContainer from "../../reserveHouse/InfoCardContainer";
import { LuCircleUser } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { sendNotifications } from "@/src/utils/helper/sendNotifications";

interface IProp {
  user: IAdminAllUsers;
}

const UserManegmentActionMenu = ({ user }: IProp) => {
  const [formData, setFormData] = useState<IAdminUserEdit>({
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isRoleAlertOpen, setIsRoleAlertOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] =useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // Handle inputs Chanege
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const router = useRouter();

  const queryclient = useQueryClient();

   // Handle Notification
  const handleSendNotification = async () => {
    await sendNotifications({
      room: "users",
      notification: {
        userId: user.id,
        title,
        message,
        type: "info",
        data: {},
      },
    });
  };

  // ============================== Edit user ============================== //
  // fetching user edit api
  const updateUserInformationMutation = useMutation({
    mutationFn: (data: IAdminUserEdit) => editUser(user.id, data),

    onSuccess: () => {
      console.log("user Id IS:");
      toast.success("تغییرات اعمال شد");
      queryclient.invalidateQueries({
        queryKey: ["users"],
      });

      setIsEditModalOpen(false);
    },

    onError: () => {
      toast.error("تغییرات اعمال نشد !");
      setIsEditModalOpen(false);
    },
  });

  // Edit user Function
  const handleEdit = async (e: React.FormEvent<HTMLElement>) => {
    console.log("user Id IS:", user.id);
    e.preventDefault();
    updateUserInformationMutation.mutate(formData);
  };

  const openEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  // ============================== Delete user ============================== //

  const openِDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  // fetching user delete api
  const deleteUsreMutation = useMutation({
    mutationFn: (id: number) => deleteUser(id),

    onSuccess: () => {
      toast.success("کاربر با موفقیت حذف شد");
      (queryclient.invalidateQueries({
        queryKey: ["users"],
      }),
        setIsDeleteModalOpen(false));
    },

    onError: (error) => {
      console.log("DELETE ERROR", error);

      toast.error("حذف کاربر ناموفق بود");
    },
  });

  const handleDeleteUser = () => {
    console.log("Deleting user:", user.id);
    deleteUsreMutation.mutate(user.id);
  };

  // ============================== Giveng Role ============================== //
  const givingRoleMutation = useMutation({
    mutationFn: (id: number) => givingAdminRole(id),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["users"],
      });
      (toast.success("ارتقای نقش با موفقیت صورت گرفت"),
        setIsRoleAlertOpen(false));
      console.log("user role noe: ", user.role);
    },
    onError: (error) => {
      console.log("Giving Role ERROR", error);

      toast.error("ارتقای نقش کاربر ناموفق بود");
    },
  });
  const handleRole = () => {
    givingRoleMutation.mutate(user.id);
  };
  const openGivingRoleAlert = () => {
    setIsRoleAlertOpen(!isRoleAlertOpen);
  };
  // ============================== User Detail ============================== //
  const openDetailModal = () => {
    router.push(`/dashboard/admin/users-management/${user.id}`);
  };

  const droMItems = [
    {
      label: "جزییات",
      icon: <CgDanger className="w-4 h-4 text-white" />,
      onClick: () => openDetailModal(),
    },
    {
      label: " ویرایش",
      icon: <MdEdit className="w-4 h-4 text-white" />,
      onClick: () => openEditModal(),
    },
    {
      label: " حذف",
      icon: <TiDeleteOutline className="w-4 h-4 text-white" />,
      onClick: () => openِDeleteModal(),
    },
    {
      label: "نقش",
      icon: <FaUserPlus className="w-4 h-4 text-white" />,
      onClick: () => openGivingRoleAlert(),
    },
    {
      label: "اعلان",
      icon: <GoBell className="w-4 h-4 text-white" />,
      onClick: () => setIsNotificationModalOpen(!isNotificationModalOpen),
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
      {/*  ============================== Edit Modal ============================== */}
      <Modal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        modalBtn={<div></div>}
        contentClassName=" bg-dark-900"
        width="w-[55%]"
        mainContent={
          <div className="flex-center padding-section">
            <form
              onSubmit={handleEdit}
              className="w-full flex-col-center gap-6"
            >
              <div className="w-full flex-col-center gap-5">
                <div className="w-full flex-center text-center justify-end  text-white-pure">
                  <span className="flex-center w-15 h-15 rounded-full border border-gray-300">
                    {user.profilePicture ? (
                      <Image src={user.profilePicture} alt="profile image" />
                    ) : (
                      <span>
                        <PiImageBrokenDuotone />
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-5 mt-4">
                {/* <div className="w-full flex-center text-white-pure text-right">
                  <label className="w-full flex-center justify-end gap-3">
                    <span> ایمیل تایید شده</span>
                    <input type="checkbox" defaultValue={user.emailVerified}/>
                  </label>
                </div> */}
                <div className="w-full flex flex-col text-right text-white-pure">
                  <Input
                    htmlFor="fullName"
                    name="fullName"
                    labelText="نام و نام خانوادگی"
                    type="text"
                    InputHeight="h-[50px] text-white-pure"
                    value={formData?.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-5">
                <div className="w-full flex flex-col justify-end text-white-pure">
                  <Input
                    htmlFor="lastName"
                    name="lastName"
                    labelText="نام خانوادگی"
                    type="text"
                    InputHeight="h-[50px] text-white-pure"
                    value={formData?.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col text-right text-white-pure">
                  <Input
                    htmlFor="firstName"
                    name="firstName"
                    labelText="نام "
                    type="text"
                    InputHeight="h-[50px] text-white-pure"
                    value={formData?.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center gap-5">
                <div className="w-full flex flex-col text-right text-white-pure">
                  <Input
                    htmlFor="phoneNumber"
                    name="phoneNumber"
                    labelText="شماره تلفن"
                    type="text"
                    InputHeight="h-[50px] text-white-pure"
                    value={formData?.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full flex flex-col justify-end text-white-pure">
                  <Input
                    htmlFor="email"
                    name="email"
                    labelText="ایمیل"
                    type="email"
                    InputHeight="h-[50px] text-white-pure"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <LoginButton
                width="w-full mt-6"
                buttonText="اعمال تغییرات"
                type="submit"
                loadingText="اعمال تغییرات..."
                noIcon
              />
            </form>
          </div>
        }
      />
      {/*  ========================================================================= */}
      
      {/* delete comment alert */}
      <AlertComponent
        acceptButtonText="حذف"
        alertText="ایا از حذف این کاربر مطمعن هستید؟"
        isModalOpen={isDeleteModalOpen}
        onClickFunction={handleDeleteUser}
        setIsModalOpen={setIsDeleteModalOpen}
      />

      {/* giving role alert */}
      <AlertComponent
        acceptButtonText="تایید"
        alertText="آیا میخواهید کاربر را به نقش ادمین ارتقا دهید؟"
        isModalOpen={isRoleAlertOpen}
        onClickFunction={handleRole}
        setIsModalOpen={setIsRoleAlertOpen}
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

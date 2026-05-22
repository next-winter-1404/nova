import ToolTip from "@/src/components/common/tooltip";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { TbHome } from "react-icons/tb";
import { HiOutlineBars3 } from "react-icons/hi2";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { FC, ReactNode } from "react";

import {
  TbHomeFilled,
  TbBellFilled,
  TbUserFilled,
  TbCirclePlusFilled,
  TbHeartFilled,
  TbReceiptDollar,
  TbKeyFilled,
} from "react-icons/tb";
import { FaCommentDots } from "react-icons/fa";
import DashboardMenuItem from "@/src/components/dashboard/menu/menuItems";
import LogoutButton from "@/src/components/common/logoutButton/logOutButton";
import BuyerWallet from "@/src/components/dashboard/wallet/buyerWallet";
import SellerNewComments from "@/src/components/dashboard/newComments/newComments";
import Image from "next/image";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import userPlaceholder from "@/src/assets/images/userPlaceHolder.jpg";
interface IProp {
  children: ReactNode;
}
const DashboardLayout: FC<IProp> = async ({ children }) => {
  const role = await getServerSideCookie("userRole");
  const userId = await getServerSideCookie("userId");
  const res = await getUsersDetail(Number(userId));
  const userDetail = res?.user;
  const commonItems = [
    {
      label: "داشبورد",
      href: `/dashboard/${role}`,
      icon: <TbHomeFilled className="w-6 h-6" />,
    },
    {
      label: "اطلاعات کاربری",
      href: `/dashboard/${role}/profile`,
      icon: <TbUserFilled className="w-6 h-6" />,
    },
    {
      label: "مدیریت رزرو‌ها",
      href: `/dashboard/${role}/reserve-management`,
      icon: <TbCirclePlusFilled className="w-6 h-6" />,
    },
    {
      label: "علاقه‌مندی‌ها",
      href: `/dashboard/${role}/favorites`,
      icon: <TbHeartFilled className="w-6 h-6" />,
    },
    {
      label: "مدیریت مالی",
      href: `/dashboard/${role}/financial-management`,
      icon: <TbReceiptDollar className="w-6 h-6" />,
    },
    {
      label: "اعلان‌ها",
      href: `/dashboard/${role}/notification`,
      icon: <TbBellFilled className="w-6 h-6" />,
    },
  ];
  const sellerItems = [
    {
      label: "مدیریت املاک",
      href: `/dashboard/${role}/estate-management`,
      icon: <TbKeyFilled className="w-6 h-6" />,
    },
    {
      label: "مدیریت نظرات",
      href: `/dashboard/${role}/comments-management`,
      icon: <FaCommentDots className="w-5 h-5" />,
    },
  ];

  const menuItems =
    role === "seller" ? [...commonItems, ...sellerItems] : commonItems;
  return (
    <>
      <div className="flex  w-full pt-5 px-5 h-full gap-5 " dir="rtl">
        <aside className="w-[300px] p-5  h-[95vh] bg-dark-700 rounded-xl flex-col ">
          <div className="w-full justify-between items-center flex  text-white">
            <h1 className="text-[32px] font-extrabold ">دلتا</h1>
            <LogoutButton />
          </div>
          <div className="w-full flex-col flex justify-between  h-[90%]">
            <div className="w-full text-white mt-10">
              <DashboardMenuItem items={menuItems} />
            </div>
            {role == "buyer" ? <BuyerWallet /> : <SellerNewComments />}
          </div>
        </aside>

        <div className="flex flex-col w-full xl:w-[1113px] 2xl:w-[2000px]">
          <div className="flex justify-between p-5 items-center  h-[66px] bg-dark-700 rounded-xl">
            <div className="font-extrabold text-white text-[20px]">
              <HiOutlineBars3 className="md:hidden" />
              <h2 className="hidden md:block">داشبورد</h2>
            </div>

            <div className="flex gap-4 items-center">
              <ToolTip
                tooltipText="صفحه اصلی"
                twClassname="z-100 bg-gray-550 "
                mainContent={
                  <Link href={"/"}>
                    <TbHome className="w-6 h-6 text-white cursor-pointer hidden md:block" />
                  </Link>
                }
              />
              <div className="w-px h-8 bg-[#9C9C9C] hidden md:block" />
              <ToolTip
                mainContent={
                  <div className=" relative hidden md:block">
                    <HiOutlineBell className="w-6 h-6 text-white cursor-pointer" />
                    <div className="w-[7px] h-[7px] rounded-xl bg-red-500 absolute top-0.5 right-1" />
                  </div>
                }
                tooltipText="اعلان ها"
                twClassname="z-100 bg-gray-550"
              />

              <div className="flex gap-2  w-[150px] justify-start items-center cursor-pointer">
                <div className="border border-[#D9D9D9] rounded-lg">
                  <Image
                    alt="prof"
                    src={userDetail?.profilePicture || userPlaceholder}
                    width={37}
                    height={37}
                    className="rounded-lg "
                  />
                </div>
                <div className="fle flex-col" dir="rtl">
                  <h2 className="text-[14px] text-white">{userDetail?.fullName}</h2>
                  <span className="text-[12px] text-gray-500">{role}</span>
                </div>
              </div>
              <FiChevronDown className="text-gray-500 " strokeWidth={2} />
            </div>
          </div>
          <div className="mt-5 ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

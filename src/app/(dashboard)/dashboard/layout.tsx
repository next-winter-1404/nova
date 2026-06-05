import ToolTip from "@/src/components/common/tooltip";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { FC, ReactNode } from "react";
import {
  TbHome,
  TbHomeFilled,
  TbBellFilled,
  TbUserFilled,
  TbCirclePlusFilled,
  TbHeartFilled,
  TbReceiptDollar,
  TbKeyFilled,
  TbLogout,
  TbUsers,
  TbCategoryFilled,
  TbCalendarEvent
} from "react-icons/tb";
import { FaCommentDots } from "react-icons/fa";
import Image from "next/image";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import userPlaceholder from "@/src/assets/images/userPlaceHolder.jpg";
import DropMenu from "@/src/components/common/dropMenu/DropMenu";
import ProfileInfo from "@/src/components/dashboard/profileInfo/ProfileInfo";
import AsideMenu from "@/src/components/dashboard/menu/asideMenu/AsideMenu";
import MenuController from "@/src/components/dashboard/menu/menuController/menuController";
import { PiReadCvLogoFill } from "react-icons/pi";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
interface IProp {
  children: ReactNode;
}
export const revalidate = 10;

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
  const buyerItems =[
    {
      label: "علاقه‌مندی‌ها",
      href: `/dashboard/${role}/favorites`,
      icon: <TbHeartFilled className="w-6 h-6" />,
    },
    {
      label: "قرار های ملاقات من",
      href: `/dashboard/${role}/user-visitAppointments`,
      icon: <TbCalendarEvent  className="w-6 h-6" />,
    },
  ]
  const sellerItems = [
    {
      label: "علاقه‌مندی‌ها",
      href: `/dashboard/${role}/favorites`,
      icon: <TbHeartFilled className="w-6 h-6" />,
    },
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
    {
      label: "مدیریت قرار ها",
      href: `/dashboard/${role}/appointment-management`,
      icon: <TbCalendarEvent className="w-5 h-5" />,
    },
  ];
  const adminItems = [
    {
      label: "مدیریت کاربران",
      href: `/dashboard/${role}/users-management`,
      icon: <TbUsers className="w-6 h-6" />,
    },
    {
      label: "مدیریت املاک",
      href: `/dashboard/${role}/estate-management`,
      icon: <TbKeyFilled className="w-5 h-5" />,
    },
    {
      label: "مدیریت نظرات",
      href: `/dashboard/${role}/comments-management`,
      icon: <FaCommentDots className="w-5 h-5" />,
    },
    {
      label: "مدیریت وبلاگ ها",
      href: `/dashboard/${role}/blog-management`,
      icon: <PiReadCvLogoFill className="w-5 h-5" />,
    },
    {
      label: "مدیریت دسته بندی ها",
      href: `/dashboard/${role}/category-management`,
      icon: <TbCategoryFilled className="w-5 h-5" />,
    },
  ];

  let menuItems = [...commonItems];

  if (role === "seller") {
    menuItems = [...menuItems, ...sellerItems];
  } else if (role === "admin") {
    menuItems = [...menuItems, ...adminItems];
  
  } else if (role === "buyer") {
    menuItems = [...menuItems, ...buyerItems];
  }

  const profileItems = [
    {
      label: (
        <ProfileInfo
          name={`${userDetail?.firstName} ${userDetail?.lastName}`}
          phone={userDetail?.phoneNumber}
          profilePicture={userDetail?.profilePicture}
        />
      ),
    },
    {
      label: "موجودی قابل برداشت",
      icon: <TbCirclePlusFilled className="w-4 h-4 text-white" />,
    },

    {
      label: "خروج",
      icon: <TbLogout className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <>
      <div className="flex w-full pt-5 px-5 h-full gap-5 font-vazir" dir="rtl">
        <div className="hidden lg:block">
          <AsideMenu role={role} menuItems={menuItems} isOpen={true} />
        </div>

        <div className="flex flex-col w-full xl:w-[1113px] 2xl:w-[1400px]">
          <div className="flex justify-between p-5 items-center h-[66px] bg-dark-700 rounded-xl">
            <div className="font-extrabold text-white text-[20px] flex items-center gap-2">
              <MenuController role={role} menuItems={menuItems} />
              <h2 className="hidden lg:block">داشبورد</h2>
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
                  <Link
                    href={`/dashboard/${role}/notification`}
                    className=" relative hidden md:block"
                  >
                    <HiOutlineBell className="w-6 h-6 text-white cursor-pointer" />
                    <div className="w-[7px] h-[7px] rounded-xl bg-red-500 absolute top-0.5 right-1" />
                  </Link>
                }
                tooltipText="اعلان ها"
                twClassname="z-100 bg-gray-550"
              />

              <div className="flex gap-2 w-[150px] justify-start items-center cursor-pointer">
                <div className="border border-[#D9D9D9] rounded-lg">
                 
                  <ImageFallback
                  fallbackSrc={userPlaceholder}
                    alt="prof"
                    src={userDetail?.profilePicture || userPlaceholder}
                    width={37}
                    height={37}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col" dir="rtl">
                  <h2 className="text-[14px] text-white">{`${userDetail?.firstName} ${userDetail?.lastName}`}</h2>
                  <span className="text-[12px] text-gray-500">{role}</span>
                </div>
              </div>
              <DropMenu
                trigger={
                  <FiChevronDown
                    className="text-gray-500 cursor-pointer"
                    strokeWidth={2}
                  />
                }
                items={profileItems}
                side="bottom"
                align="end"
              />
            </div>
          </div>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

"use client";

import { useEffect } from "react";
import DashboardMenuItem from "@/src/components/dashboard/menu/menuItems/menuItems";
import LogoutButton from "@/src/components/common/logoutButton/logOutButton";
import BuyerWallet from "@/src/components/dashboard/wallet/buyerWallet";
import SellerNewComments from "@/src/components/dashboard/newComments/newComments";
import { HiOutlineX } from "react-icons/hi";

interface IAsideMenuProps {
  role: string | undefined;
  menuItems: any[];
  isOpen: boolean;
  onClose?: () => void;
}

const AsideMenu = ({ role, menuItems, isOpen, onClose }: IAsideMenuProps) => {
  useEffect(() => {
    if (isOpen && onClose) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
           z-50 w-[280px]   bg-dark-700 p-5 flex-col flex gap-4 justify-between 
          transition-transform duration-300 ease-in-out
          ${
            isOpen
              ? "translate-x-0 fixed top-0 right-0 h-screen"
              : "h-[95vh] flex translate-x-full"
          }
          lg:relative lg:translate-x-0 rounded-xl lg:z-auto 
        `}
      >
        <div>
          {onClose && (
            <button
              className="absolute top-4 left-4 text-white lg:hidden"
              onClick={onClose}
            >
              <HiOutlineX className="w-6 h-6" />
            </button>
          )}

          <div className="w-full justify-between items-center flex text-white mt-8 lg:mt-0">
            <h1 className="text-[32px] font-extrabold">دلتا</h1>
            <LogoutButton />
          </div>

          <div className="w-full text-white mt-10">
            <DashboardMenuItem items={menuItems} />
          </div>
        </div>

        <div className="mt-auto pt-5 ">
          {role === "buyer" ? (
            <BuyerWallet />
          ) : role === "seller" ? (
            <SellerNewComments />
          ) : null}
        </div>
      </aside>
    </>
  );
};

export default AsideMenu;

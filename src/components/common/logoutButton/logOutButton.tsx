"use client";

import { TbLogout } from "react-icons/tb";
import { logout } from "../../dashboard/logout/logout";
import AlertComponent from "../alert/alert";
import { useState } from "react";

const LogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <form>
      <button
        type="button"  
        className="cursor-pointer bg-transparent border-0 p-0"
        onClick={() => setIsModalOpen(true)} 
      >
        <TbLogout className="w-6 h-6 text-white-pure" />
      </button>
      <AlertComponent
        acceptButtonText="خروج"
        alertText="آیا از خروج از حساب کاربری خود اطمینان دارید؟"
        isModalOpen={isModalOpen}
        onClickFunction={logout}
        setIsModalOpen={setIsModalOpen}
      />
    </form>
  );
};

export default LogoutButton;
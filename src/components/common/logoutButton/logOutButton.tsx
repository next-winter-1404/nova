"use client";

import { TbLogout } from "react-icons/tb";
import { logout } from "../../dashboard/logout/logout";

const LogoutButton = () => {
  return (
    <form action={logout}>
      <button type="submit" className="cursor-pointer bg-transparent border-0 p-0">
        <TbLogout className="w-6 h-6" />
      </button>
    </form>
  );
};

export default LogoutButton;
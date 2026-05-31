"use client";

import { HiOutlineBars3 } from "react-icons/hi2";

interface IMenuButtonProps {
  onClick: () => void;
}

const MenuButton = ({ onClick }: IMenuButtonProps) => {
  return (
    <button onClick={onClick} className="lg:hidden">
      <HiOutlineBars3 className="w-6 h-6 text-white" />
    </button>
  );
};

export default MenuButton;
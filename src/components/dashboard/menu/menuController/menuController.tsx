"use client";

import { useState } from "react";
import MenuButton from "../menuButton/menuButton";
import AsideMenu from "../asideMenu/AsideMenu";

interface IMenuControllerProps {
  role: string | undefined;
  menuItems: any[];
}

const MenuController = ({ role, menuItems }: IMenuControllerProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setIsMenuOpen(true)} />
      {isMenuOpen && (
        <AsideMenu
          role={role}
          menuItems={menuItems}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default MenuController;
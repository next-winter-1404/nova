"use client"
import { useMenu } from "./MenuContext";

interface MenuButtonProps {
    children: React.ReactNode;
}

const MenuButton = ({children} : MenuButtonProps) => {
  const {isOpen,buttonRef,toggle} = useMenu()
  return (
    <div
     className="cursor-pointer"
     ref={buttonRef}
     onClick={toggle}
     aria-expanded={isOpen}
     aria-haspopup="menu"
     >
       {children} 
    </div>
  )
}

export default MenuButton;

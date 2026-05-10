'use client'

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface UseMenuProps {
    children: React.ReactNode;
}

interface MenuContextType {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    buttonRef: React.RefObject<HTMLDivElement | null>;
    menuRef: React.RefObject<HTMLDivElement | null >;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error('useMenu must be used within <MenuProvider>');
  return context;
};

export const MenuProvider = ({children} : UseMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const buttonRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggle = () => setIsOpen(prev => !prev);
    const close = () => setIsOpen(false);

    useEffect(() => {
        if(!isOpen) return;

        const handleClickOutSide = (e : MouseEvent) => {
            if(buttonRef.current?.contains(e.target as Node)) return;
            if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
                close()
            }
        }
        document.addEventListener("mousedown", handleClickOutSide);

        return document.removeEventListener("mousedown", handleClickOutSide);
    }, [isOpen]);

    return (
        <MenuContext.Provider value={{isOpen,toggle,close,buttonRef,menuRef}}>
            {children}
        </MenuContext.Provider>
    )
}
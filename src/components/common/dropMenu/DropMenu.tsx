"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FC, ReactNode } from "react";

export interface IMenuItem {
  label?: string | ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

interface IDropMenuProps {
  trigger: ReactNode;
  items: IMenuItem[];
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  contentClassName?: string;
  itemClassName?: string;
}

const DropMenu: FC<IDropMenuProps> = ({
  trigger,
  items,
  side = "bottom",
  align = "end",
  sideOffset = 5,
  alignOffset = 0,
  contentClassName = "",
  itemClassName = "",
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`bg-dark-800 rounded-xl p-2  shadow-lg z-50 font-vazir ${contentClassName}`}
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          {items.map((item, index) => (
            <div key={index}>
              {item.divider && index !== 0 && (
                <DropdownMenu.Separator className="h-px bg-gray-600 my-1" />
              )}
              <DropdownMenu.Item
              dir="rtl"
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all outline-none
                  ${
                    item.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-dark-600"
                  }
                  ${itemClassName}
                `}
                onClick={item.onClick}
                disabled={item.disabled}
              >
                {item.icon && <span className="w-5 h-5 text-white-pure">{item.icon}</span>}
                <div className="text-white-pure text-sm">{item.label}</div>
              </DropdownMenu.Item>
            </div>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropMenu;

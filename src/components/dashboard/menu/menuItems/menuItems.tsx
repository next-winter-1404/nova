"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
interface IItems{
    label?:string,
    href:string,
    icon?:ReactNode
}
interface IProps {
    items: IItems[];
  }
const DashboardMenuItem = ({ items }:IProps) => {
  const pathname = usePathname();
  return (
    <>
      {items.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={index}
            href={item.href}
            className={`text-[18px] hover:bg-[rgba(217,217,217,0.33)] rounded-lg p-2 cursor-pointer flex gap-3 items-center ${
              isActive
                ? "bg-primary-accent-green text-dark-900 hover:bg-primary-accent-green"
                : ""
            }`}
          >
            <div className={isActive ? "text-dark-900" : "text-white"}>
              {item.icon}
            </div>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
};
export default DashboardMenuItem;

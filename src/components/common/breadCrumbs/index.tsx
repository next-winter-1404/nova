"use client";
import Link from "next/link";
import { RiArrowDropLeftLine } from "react-icons/ri";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumb = ({
  items,
  twClassname,
}: {
  items: BreadcrumbItem[];
  twClassname?: string;
}) => {
  return (
    <nav
      dir="rtl"
      aria-label="Breadcrumb"
      className={`flex items-center justify-end w-fit  bg-dark-900 text-sm px-2   text-gray-300 ${twClassname}`}
    >
      <Link
        href="/"
        className="hover:scale-110 duration-200 "
        aria-label="Home"
      >
        <span>خانه</span>
      </Link>
      {items.map((item) => (
        <div key={`${item.label} ${item.href}`} className="flex items-center">
          <RiArrowDropLeftLine size={25} className="text-gray " />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:scale-105 duration-200 hover:text-primary-"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary-accent-green">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

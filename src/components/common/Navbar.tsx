"use client";
import Image from "next/image";
import Link from "next/link";

// import LoginButton from '@/src/components/auth/LoginButton'
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

import {
  Menu,
  MenuWrapper,
  MenuItems,
  MenuItem,
  MenuButton,
} from "@/src/components/common/menu";
import NavbarTab from "./navbar/NavbarTab";
import Divider from "./Divider";
import NavLoginButton from "../auth/NavLoginButton";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
const navigation = [
  { labelName: "تماس با ما", href: "/contactus", current: false },
  { labelName: "مقالات ما", href: "/blogs", current: false },
  { labelName: "درباره دلتا", href: "#aboutus", current: false },
];

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visibleShadow, setVisibleShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setVisibleShadow(true);
      else setVisibleShadow(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`whitespace-nowrap md:w-[96%] md:fixed w-[90%] inset-x-0 mx-auto glass shadow-3xl inset-shadow-fff-16 rounded-2xl   z-50   ${
        visibleShadow ? "top-1" : "top-6"
      }`}
    >
      <nav>
        <div>
          <div>
            <span>
              <Link href="/login">
                <NavLoginButton>
                  <span>
                    <p>ورود / ثبت نام</p>
                    <Image
                      src="/icons/user1.svg"
                      alt="user"
                      width={16}
                      height={16}
                    />
                  </span>
                </NavLoginButton>
              </Link>
            </span>
          </div>

          {/* Desktop version: visible on medium screens and up */}
          <div className="test text-amber-50 flex items-center">
            <div className="flex gap-3 items-center text-amber-50">
              {navigation.map((item) => {
                return (
                  <NavbarTab
                    key={item.labelName}
                    label={item.labelName}
                    href={item.href}
                  />
                );
              })}
              <NavbarTab
                label="رهن و اجاره"
                href="/mortgageandhouserent"
                icon={<BsChevronDown className="w-3 h-3" />}
              />
              <NavbarTab
                label="رزرو سریع"
                href="/reserve-house"
                icon={<BsChevronDown className="w-3 h-3" />}
              />

              <Divider color="#4A4A4A" width="3" height="20" />
              <Link
                href="/"
                className="w-22 h-8 rounded-xl bg-[#4A4A4A]"
              ></Link>
            </div>
          </div>

          {/* Mobile menu button*/}
          <span className="lg:hidden block" aria-hidden="true">
            <Menu>
              <MenuButton>
                <FiMenu className="text-white w-5 h-5" />
              </MenuButton>

              <MenuWrapper>
                <MenuItems>
                  {navigation.map((item) => (
                    <MenuItem key={item.labelName} {...item} />
                  ))}
                </MenuItems>
              </MenuWrapper>
            </Menu>
          </span>
        </div>
      </nav>
      <motion.div
        className="w-full px-2.5"
        style={{ scaleX: scrollYProgress, originX: 0.01 }}
      >
        <div className="h-[4px] bg-primary-accent-green w-full rounded-xl" />
      </motion.div>
    </header>
  );
};

export default Navbar;

// <span>
//               <div className="flex gap-3 items-center">
//                   <span className='be-seller-btn'>
//                     <Link href="#">
//                       <p >! فروشنده شو</p>
//                     </Link>
//                     </span>
//                   <span><Link href="/contactus">تماس با ما</Link></span>
//                   <span><Link href="/blogs">مقالات ما</Link></span>
//                   <span><Link href="/aboutus">درباره دلتا</Link></span>
//                   <span><Link href="/rentanddeposit">رهن و اجاره</Link></span>
//                   <span><Link href="/quickreserve">رزرو سریع</Link></span>
//               </div>
//               <div className="flex gap-3 items-center">
//                 <span>|</span>
//                 <span className='w-22 h-8 rounded-xl bg-[#4A4A4A]'></span>
//               </div>
//           </span>

"use client";
import Image from "next/image";
import Link from "next/link";

// import LoginButton from '@/src/components/auth/LoginButton'
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import megaphoneIcon from "@/public/icons/megaphone.svg"

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

const navigation = [
  { labelName: "تماس با ما", href: "/contactus", current: false },
  { labelName: "مقالات ما", href: "/blogs", current: false },
  { labelName: "درباره دلتا", href: "/aboutus", current: false },
];

const Navbar = () => {
  return (
    <header className="whitespace-nowrap">
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
              <span className="w-[134px] h-9 flex-center gap-2 bg-blue-purple-500 px-4 py-2 rounded-xl text-white-pure shadow-blue-transparent-20 inset-shadow-fff-4">
                <Link href="#">
                  <p>! فروشنده شو</p>
                </Link>
                <Image src={megaphoneIcon} alt="megaphone icon" />
              </span>
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

import Image from "next/image"
import Link from "next/link"

import LoginButton from '../auth/LoginButton'
import { FiMenu } from 'react-icons/fi';

import MenuButton from './menu/MenuButton';
import Menu from "./menu/Menu";
import MenuItems from "./menu/MenuItems";
import MenuItem from "./menu/MenuItem";
import MenuWrapper from "./menu/MenuWrapper";

const navigation = [
  { labelName: 'Dashboard', href: '#', current: true },
  { labelName: 'درباره دلتا', href: '/aboutus', current: false },
  { labelName: 'مقالات ما', href: '/blogs', current: false },
  { labelName: 'تماس با ما', href: '/contactus', current: false },
]

const Navbar = () => {
  return (
    <header className='whitespace-nowrap'>
      <nav>
        <div>
          <div>
            <span>
              <Link href="/login">
                <LoginButton>
                  <span>
                    <p>ورود / ثبت نام</p>
                    <Image src='/icons/user1.svg' alt='user' width={16} height={16}/>
                  </span>
                </LoginButton>
              </Link>
           </span>
          </div>
          <span aria-hidden="true">
            <Menu>
              <MenuButton>
                <FiMenu className="text-white w-5 h-5"/>
              </MenuButton>
              {/* <MenuWrapper>
                <MenuItems>
                  {navigation.map((item) => {
                  return (
                    <MenuItem
                    key={item.labelName} 
                    labelName={item.labelName} 
                    href={item.href}
                    current={item.current}
                    />
                  )
                })}
                </MenuItems>
              </MenuWrapper> */}
            </Menu>
          </span>
        </div>
      </nav>
    </header> 
  )
}

export default Navbar


  {/* Desktop version: visible on medium screens and up */}
        // <div className="hidden md:block text-amber-50">
        //   <span>
        //       <div className="flex gap-3 items-center">
        //           <span className='be-seller-btn'>
        //             <Link href="#">
        //               <p >! فروشنده شو</p>
        //             </Link>
        //             </span>
        //           <span><Link href="/contactus">تماس با ما</Link></span>
        //           <span><Link href="/blogs">مقالات ما</Link></span>
        //           <span><Link href="/aboutus">درباره دلتا</Link></span>
        //           <span><Link href="/rentanddeposit">رهن و اجاره</Link></span>
        //           <span><Link href="/quickreserve">رزرو سریع</Link></span>
        //       </div>
        //       <div className="flex gap-3 items-center">
        //         <span>|</span>
        //         <span className='w-22 h-8 rounded-xl bg-[#4A4A4A]'></span>
        //       </div>
        //   </span>
        // </div>
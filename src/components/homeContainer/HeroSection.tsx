import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsChevronLeft } from "react-icons/bs";
import Container from "../common/Container";

import HeroBackground from "../../assets/images/HeroSectionBackground.jpg"
import building from "../../assets/images/building.png"
import DeltaTextGradient from "../../assets/images/Delta.png"
import FramShape from "../../assets/images/Frame.png"
import Divider from "@/src/components/common/Divider";
import SearchContainer from "../common/search/SearchContainer";
import AvatarGroup from "../common/AvatarGroup";
import Button from "../common/button/page";


const HeroSection = () => {

  return (
    <div style={{ background: `url(${HeroBackground.src})`, backgroundRepeat:"no-repeat", backgroundSize:"100%" }} className="relative h-screen w-full bg-cover bg-center flex-center">
     <div className="w-[90%] absolute z-5 ">
        <Container>
          <div className="md:w-full w-[98.5%] flex lg:flex-row flex-col-reverse items-end lg:items-center justify-between gap-4 relative sm:top-15 -top-8">
            <div className="relative lg:top-2.5 flex flex-col md:max-w-87.5 max-w-62">
              <span className="absolute sm:-right-6 -right-3 sm:top-0.5 top-0.5 text-white-pure sm:text-[20px] text-[12px]">
                ✦                    
              </span>
              <div className="flex-col-center sm:gap-7 gap-4">
                <span>
                  <p className="text-white text-right">
                     رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد
نظرتون مثل آب خوردن فقط در دلت                       
                  </p>
                  <span className="hidden md:block relative -top-2.5 right-4">
                    <Divider color="#fff" width="121" height="2"/>
                  </span>
                </span>
                <span className="flex items-center justify-end gap-6">
                  <span className="flex-center p-8-16 text-16-medium whitespace-nowrap gap-2 rounded-xl  text-black  bg-white ">
                    <BsChevronLeft className="w-2 h-2"/>
                    <Link href="#">رهن و اجاره ملک</Link>
                  </span>
                  <span className="flex-center p-8-16 text-16-medium whitespace-nowrap gap-2 rounded-xl  text-white-pure  bg-black ">
                    <BsChevronLeft className="w-2 h-2"/>
                    <Link href="#">آسون رزرو کن</Link>
                  </span>
                </span>
                <span className="sm:flex-center flex justify-end items-center sm:gap-7 gap-4 whitespace-nowrap">
                  <span className="flex-col-center text-right">
                    <p className="text-20-medium">5600+</p>
                    <p className="text-white-pure">ملک برای رزرو و رهن اجازه</p>
                  </span>
                  <span><Divider height="32" color="#FFFFFF" width="2"/></span>
                  <span className="flex-col-center text-right">
                    <p className="text-20-medium">8500+</p>                            <p className="text-16-medium text-white-pure">منطقه برای رزرو ،  ویلا و کلبه ها</p>
                  </span>
                </span>

              </div>
            </div>
            <div className="relative max-w-[309px] text-right flex flex-col justify-end items-end gap-1">
              <AvatarGroup/>
              <span>
                <p className="sm:text-[26px] text-[20px] text-white">بیش از 7000+</p>
                <p className="text-16-medium text-white-pure leading-9">رضایت مشتریانی که به دلتا اعتماد کرده اند</p>
              </span>
            </div>
          </div>
        </Container>
        <div className="w-full absolute sm:-bottom-[40px] z-3">
        <div className="flex justify-center relative top-12">
            <SearchContainer />
        </div>
     </div>
     </div>


     <div className="absolute top-18 z-1 w-[90%]"><Image src={DeltaTextGradient} alt="pic"/></div>
     <div className="flex sm:justify-center justify-end z-1">
      <Image src={building} alt="pic" width={440}/>
     </div>
     <div className="absolute bottom-0 z-2 h-80 w-full bg-gradient-to-t from-[#232323] to-[#23232300]"></div>
    
    </div>

  );
}

export default HeroSection
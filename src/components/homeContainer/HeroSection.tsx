import Image from "next/image";
import Link from "next/link";

import { BsChevronLeft } from "react-icons/bs";
import Container from "../common/Container";
import building from "../../assets/images/building.png";
import DeltaTextGradient from "../../assets/images/Delta.png";
import Divider from "@/src/components/common/Divider";
import SearchContainer from "../common/search/SearchContainer";
import AvatarGroup from "../common/AvatarGroup";
import FadeIn from "../animations/FadeIn";
import GoInfiniteLeft from "../animations/GoInfiniteLeft";
import SideRays from "../animations/SideRays/SideRays";
import CountUp from "../animations/CountUp/CountUp";
import ShinyText from "../animations/ShinyText/ShinyText";

const HeroSection = () => {
  return (
    <>
      <div className="relative font-vazir min-h-screen w-full bg-cover bg-center flex-center hero-bg">
        <SideRays className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
        <div className="relative font-vazir min-h-screen bg-cover bg-center flex-center w-full bg-gradient-to-t from-dark-900 to-[#23232300]">
          <div className="w-[90%] absolute z-5 ">
            <Container>
              <div className="md:w-full flex lg:flex-row flex-col-reverse items-end lg:items-center justify-between gap-4 relative sm:top-15 -top-8">
               
                  <div className="relative lg:top-2.5 hidden lg:flex flex-col md:max-w-87.5 max-w-62">
                    <span className=" absolute sm:-right-6 -right-3 sm:top-0.5 top-0.5 text-white-pure sm:text-[20px] text-[12px]">
                      ✦
                    </span>
                    <div className="flex-col-center sm:gap-7 gap-4">
                      <span>
                        <p className="text-white text-right">
                          <ShinyText
                            text=" رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون مثل آب خوردن فقط در دلت"
                            speed={1.5}
                            delay={0}
                            color="var(--color-white-pure)"
                            shineColor="var(--color-gray-300)"
                            spread={120}
                            direction="right"
                            yoyo={true}
                            pauseOnHover={false}
                            disabled={false}
                          />
                        </p>
                        <span className="hidden md:block relative -top-2.5 right-4">
                          <Divider color="#fff" width="121" height="2" />
                        </span>
                      </span>

                    
                        <span className="hidden md:flex items-center justify-end gap-6">
                          <span className="flex-center p-8-16 text-16-medium whitespace-nowrap gap-2 rounded-xl  text-black  bg-white ">
                            <GoInfiniteLeft distance={5} duration={1}>
                              <BsChevronLeft className="w-2 h-2" />
                            </GoInfiniteLeft>
                            <Link href="#">رهن و اجاره ملک</Link>
                          </span>
                          <span className="flex-center p-8-16 text-16-medium whitespace-nowrap gap-2 rounded-xl  text-white  bg-black ">
                            <GoInfiniteLeft distance={5} duration={1}>
                              <BsChevronLeft className="w-2 h-2" />
                            </GoInfiniteLeft>
                            <Link href="#">آسون رزرو کن</Link>
                          </span>
                        </span>
                      

                      <span className="sm:flex-center flex justify-end items-center sm:gap-7 gap-4 whitespace-nowrap">
                        <span className="flex-col-center text-right">
                          <p className="text-20-medium">
                            <CountUp to={5600} from={5560} />+
                          </p>
                          <p className="text-white-pure">
                            <ShinyText
                              text="ملک برای رزرو و رهن اجازه"
                              speed={0.8}
                              delay={0}
                              color="var(--color-white-pure)"
                              shineColor="var(--color-gray-300)"
                              spread={120}
                              direction="right"
                              yoyo={true}
                              pauseOnHover={false}
                              disabled={false}
                            />
                          </p>
                        </span>
                        <span>
                          <Divider height="32" color="#FFFFFF" width="2" />
                        </span>
                        <span className="flex-col-center text-right">
                          <p className="text-20-medium">
                            <CountUp to={8500} from={8460} />+
                          </p>{" "}
                          <p className="text-16-medium text-white-pure">
                            <ShinyText
                              text="   منطقه برای رزرو ، ویلا و کلبه ها"
                              speed={0.8}
                              delay={0}
                              color="var(--color-white-pure)"
                              shineColor="var(--color-gray-300)"
                              spread={120}
                              direction="right"
                              yoyo={true}
                              pauseOnHover={false}
                              disabled={false}
                            />
                          </p>
                        </span>
                      </span>
                    </div>
                  </div>
               
                  <div className="relative max-w-[309px] text-right hidden lg:flex flex-col justify-end items-end gap-2">
                    <AvatarGroup />
                    <span>
                      <p className="sm:text-[26px] text-[20px] text-white-pure">
                        بیش از{" "}
                        <span>
                          <CountUp to={7000} from={6860} />
                        </span>{" "}
                        +
                      </p>
                      <p className="text-16-medium text-white-pure leading-9">
                        <ShinyText
                          text=" رضایت مشتریانی که به دلتا اعتماد کرده اند"
                          speed={0.8}
                          delay={0}
                          color="var(--color-white-pure)"
                          shineColor="var(--color-gray-300)"
                          spread={120}
                          direction="right"
                          yoyo={true}
                          pauseOnHover={false}
                          disabled={false}
                        />
                      </p>
                    </span>
                  </div>
          
              </div>
            </Container>
            <div className="w-full absolute sm:-bottom-[40px] z-3">
              <div className="flex justify-center relative top-14">
                <SearchContainer />
              </div>
            </div>
          </div>

          <div className="absolute top-18 sm:left-[7%] left-5 mx-auto z-1 w-[90%]">
            
              <Image src={DeltaTextGradient} alt="pic" />
            
          </div>

          <div className="flex sm:justify-center justify-end z-1">
          
              <Image
                src={building}
                alt="pic"
                className="w-2/3 md:w-1/2 lg:w-[540px] ml-20 mt-30"
              />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

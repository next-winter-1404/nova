import React from "react";
import Triangle from "../../common/triangle/page";
import CardContainer from "../../common/card/page";
import imageSupport from "@/src/assets/images/imageSupport.svg"
import imagePrize from "@/src/assets/images/imagePrize.svg"
import imageHeart from "@/src/assets/images/imageHeart.svg"
import imageActive from "@/src/assets/images/imageActive.svg"
import timetwentyfour from "@/src/assets/icons/timetwentyfour.svg"
import trophyprise from "@/src/assets/icons/trophyprise.svg"
import emojehearts from "@/src/assets/icons/emojehearts.svg"
import househeart from "@/src/assets/icons/househeart.svg"
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="aboutus" className="flex flex-col w-full items-center md:gap-6 gap-4 h-[1200px] md:h-[800px] bg-dark-900 rounded-br-[64px] rounded-bl-[64px] text-white-pure">
      <Triangle text="درباره ما" />
      <span className=" md:text-[32px] text-[28px]">!دلتا رو بیشتر بشناس </span>
      <h2 className="md:text-[16px] md:mr-0 mr-3 text-[12px] text-right">
        .تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد
      </h2>
      <div className="flex md:flex-row flex-col w-11/12 items-center justify-between gap-4 md:h-[550px]">
        <div className="flex flex-col w-[350px] md:w-[475px] h-[490px] justify-between">
          <CardContainer
            mainExtraStyle="bg-dark-900 border-14 border-dark-700 h-[185px]"
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-[15px]"></div>}
            labelBackground="bg-dark-900 border-14 border-b-1 border-dark-700"
            mainContent={
              <div className=" relative flex justify-between w-full h-full">
                <div className="md:w-[131px] w-[147px] border-dark-900 border-9 -top-4 absolute right-0"></div>
                <Image src={imageSupport} alt="imageSupport" style={{ width:"100px", paddingBottom:"30px"}}/>
                <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center"><Image src={timetwentyfour} alt="timetwentyfour"/></div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">7 / 24  ساعت شبانه روز</span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">تیم پشتیبانی در تمام طول روز همراه شما هستن</h2>
                </div>
              </div>
            }            
            />
          <CardContainer
            mainExtraStyle="bg-dark-600 border-14 border-dark-700 h-[185px]"
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-[15px]"></div>}
            labelBackground="bg-dark-600 border-14 border-b-1 border-dark-700"
            mainContent={
              <div className=" relative flex justify-between w-full h-full">
                <div className="md:w-[131px] w-[147px] border-dark-600 border-9 -top-4 absolute right-0"></div>
                <Image src={imageHeart} alt="imageHeart" style={{ width:"120px", paddingBottom:"40px"}}/>
                <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center"><Image src={emojehearts} alt="emojehearts"/></div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">+ 15.000 نظرات کاربران
                  </span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">رضایت مسافرانی که از پلتفرم دلتا استفاده کردن</h2>
                </div>
              </div>
            }            
            />           
        </div>
        <div className="hidden md:block flex w-[475px] h-[490px] items-center justify-center">
        <CardContainer
            mainExtraStyle="bg-blue-purple-500 border-14 border-dark-700 h-[435px]"
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-[15px]"></div>}
            labelBackground="bg-blue-purple-500 border-14 border-b-1 border-dark-700"
            mainContent={
              <div className="relative flex w-full h-full" dir="rtl">
                <div className="w-[131px] border-blue-purple-500 border-9 -top-4 absolute right-0"></div>
                <h2 className="text-[20px] ml-5 mr-5 leading-10 ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو د...</h2>
              </div>
            }            
            />
        </div>
        <div className="flex flex-col w-[350px] md:w-[475px] h-[490px] justify-between">       
          <CardContainer
            mainExtraStyle="bg-dark-600 border-14 border-dark-700 h-[185px]"
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-[15px]"></div>}
            labelBackground="bg-dark-600 border-14 border-b-1 border-dark-700"
            mainContent={
              <div className=" relative flex justify-between w-full h-full">
                <div className="md:w-[131px] w-[147px] border-dark-600 border-9 -top-4 absolute right-0"></div>
                <Image src={imageActive} alt="imageActive" style={{ width:"130px", paddingBottom:"40px"}}/>
                <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center"><Image src={househeart} alt="househeart"/></div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">+ 12000 خونه فعال
                  </span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">خانه هایی که نظافت و امنیت شان تامین شده !</h2>
                </div>
              </div>
            }            
            />
            <CardContainer
            mainExtraStyle="bg-dark-900 border-14 border-dark-700 h-[185px]"
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-[15px]"></div>}
            labelBackground="bg-dark-900 border-14 border-b-1 border-dark-700"
            mainContent={
              <div className=" relative flex justify-between w-full h-full">
                <div className="md:w-[131px] w-[147px] border-dark-900 border-9 -top-4 absolute right-0"></div>
                <Image src={imagePrize} alt="imagePrize" style={{ width:"100px", paddingBottom:"30px"}}/>
                <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center"><Image src={trophyprise} alt="trophyprise"/></div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">+ 10 سال سابقه درخشان</span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">در مهمان نوازی به شما مسافران عزیز</h2>
                </div>
              </div>
            }            
            />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

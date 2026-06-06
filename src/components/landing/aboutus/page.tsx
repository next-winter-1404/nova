import React from "react";
import Triangle from "../../common/triangle/page";
import CardContainer from "../../common/card/page";
import imageSupport from "@/src/assets/images/imageSupport.svg";
import imagePrize from "@/src/assets/images/imagePrize.svg";
import imageHeart from "@/src/assets/images/imageHeart.svg";
import imageActive from "@/src/assets/images/imageActive.svg";
import timetwentyfour from "@/src/assets/icons/timetwentyfour.svg";
import trophyprise from "@/src/assets/icons/trophyprise.svg";
import emojehearts from "@/src/assets/icons/emojehearts.svg";
import househeart from "@/src/assets/icons/househeart.svg";
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
        <div className="flex flex-col w-[350px] md:w-[475px] h-[490px] justify-between relative">
          <svg
            width="445"
            height="225"
            viewBox="0 0 445 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute m-auto inset-0"
          >
            <path
              d="M279.881 30C285.543 30 291.023 28 295.352 24.3501C295.352 24.3501 317.526 5.6499 317.526 5.6499C321.854 2 327.334 0 332.996 0C332.996 0 421 0 421 0C434.255 0 445 10.75 445 24C445 24 445 201 445 201C445 214.25 434.255 225 421 225C421 225 24 225 24 225C10.7452 225 0 214.25 0 201C0 201 0 54 0 54C0 40.75 10.7452 30 24 30C24 30 279.881 30 279.881 30Z"
              fill="#393939"
            />
          </svg>
          <svg
            width="421"
            height="198"
            viewBox="0 0 421 198"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute m-auto inset-0"
          >
            <path
              d="M277.294 26C283.112 26 288.733 23.8901 293.109 20.0498C293.109 20.0498 309.211 5.9502 309.211 5.9502C313.587 2.10986 319.207 0 325.026 0C325.026 0 397 0 397 0C410.255 0 421 10.75 421 24C421 24 421 174 421 174C421 187.25 410.255 198 397 198C397 198 24 198 24 198C10.7452 198 0 187.25 0 174C0 174 0 50 0 50C0 36.75 10.7452 26 24 26C24 26 277.294 26 277.294 26Z"
              fill="#232323"
            />
          </svg>
          <div className=" relative flex justify-between w-full h-full">
           <div className="w-[169px] h-[173px] bg-amber-700 absolute top-10 ">
             <Image
              src={imageSupport}
              alt="imageSupport"
              style={{ width: "100px", paddingBottom: "30px" }}
              className=""
            />
           </div>
            {/* <div className="flex mr-5 flex-col gap-0 md:gap-1 bg-amber-800" dir="rtl">
              <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center">
                <Image src={timetwentyfour} alt="timetwentyfour" />
              </div>
              <span className="md:text-[24px] text-[20px] text-white-pure">
                7 / 24 ساعت شبانه روز
              </span>
              <h2 className="md:text-[20px] text-[16px] text-gray-300">
                تیم پشتیبانی در تمام طول روز همراه شما هستن
              </h2>
            </div> */}
          </div>
          {/* <CardContainer
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
            />            */}
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
                <h2 className="text-[20px] ml-5 mr-5 leading-10 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو د...
                </h2>
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
                <Image
                  src={imageActive}
                  alt="imageActive"
                  style={{ width: "130px", paddingBottom: "40px" }}
                />
                <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center">
                    <Image src={househeart} alt="househeart" />
                  </div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">
                    + 12000 خونه فعال
                  </span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">
                    خانه هایی که نظافت و امنیت شان تامین شده !
                  </h2>
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
                <Image
                  src={imagePrize}
                  alt="imagePrize"
                  style={{ width: "100px", paddingBottom: "30px" }}
                />
                <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center">
                    <Image src={trophyprise} alt="trophyprise" />
                  </div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">
                    + 10 سال سابقه درخشان
                  </span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">
                    در مهمان نوازی به شما مسافران عزیز
                  </h2>
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

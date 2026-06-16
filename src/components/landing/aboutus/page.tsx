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
import productManagement from "@/public/icons/3d-icon-product-management_23-2150459932.svg";
import Image from "next/image";
import BlureLightCircle from "@/src/components/common/BlureLightCircle";
import ScrollFloat from "../../animations/ScrollFloat/ScrollFloat";
import GlareHover from "../../animations/GlareHover/GlareHover";
import SpotlightCard from "../../animations/SpotlightCard/SpotlightCard";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col w-full items-center md:gap-6 gap-4 h-[1200px] md:h-[800px] bg-dark-900 rounded-br-[64px] rounded-bl-[64px] text-white-pure"
    >
      <BlureLightCircle position="right-5" />
      <Triangle text="درباره ما" />
      <span className=" md:text-[32px] text-[28px]">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          !دلتا رو بیشتر بشناس
        </ScrollFloat>
      </span>
      <h2 className="md:text-[16px] md:mr-0 mr-3 text-[12px] text-right">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.1}
        >
          .تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد
          تا بتواند در تمام لحظات کنار شما باشد
        </ScrollFloat>
      </h2>
      <div className="flex md:flex-row flex-col w-11/12 items-center justify-between gap-4 md:h-[550px]">
        {/*==================== left section ======================================== */}
        <div className="flex flex-col gap-5 w-[350px] md:w-[475px] h-[490px] relative">
          <div className=" relative flex-center">
            <GlareHover
              glareColor="var(--color-gray-300)"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <svg
                viewBox="0 0 445 225"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto text-dark-700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M279.881 30C285.543 30 291.023 28 295.352 24.3501C295.352 24.3501 317.526 5.6499 317.526 5.6499C321.854 2 327.334 0 332.996 0C332.996 0 421 0 421 0C434.255 0 445 10.75 445 24C445 24 445 201 445 201C445 214.25 434.255 225 421 225C421 225 24 225 24 225C10.7452 225 0 214.25 0 201C0 201 0 54 0 54C0 40.75 10.7452 30 24 30C24 30 279.881 30 279.881 30Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="421"
                height="198"
                viewBox="0 0 421 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[95%] h-auto absolute m-auto inset-0 text-dark-900"
              >
                <path
                  d="M277.294 26C283.112 26 288.733 23.8901 293.109 20.0498C293.109 20.0498 309.211 5.9502 309.211 5.9502C313.587 2.10986 319.207 0 325.026 0C325.026 0 397 0 397 0C410.255 0 421 10.75 421 24C421 24 421 174 421 174C421 187.25 410.255 198 397 198C397 198 24 198 24 198C10.7452 198 0 187.25 0 174C0 174 0 50 0 50C0 36.75 10.7452 26 24 26C24 26 277.294 26 277.294 26Z"
                  fill="currentColor"
                />
              </svg>
              <div className=" absolute flex-center justify-around">
                <div>
                  <Image
                    src={imageSupport}
                    alt="imageSupport"
                    className="w-[100px] h-[100px] ml-2 -mt-3"
                  />
                </div>
                <div className="flex mr-5 flex-col gap-0 md:gap-1 " dir="rtl">
                  <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center">
                    <Image src={timetwentyfour} alt="timetwentyfour" />
                  </div>
                  <span className="md:text-[24px] text-[20px] text-white-pure">
                    7 / 24 ساعت شبانه روز
                  </span>
                  <h2 className="md:text-[20px] text-[16px] text-gray-300">
                    تیم پشتیبانی در تمام طول روز همراه شما هستن
                  </h2>
                </div>
              </div>
            </GlareHover>
          </div>

          <div className="relative flex-center">
            <GlareHover
              glareColor="var(--color-gray-300)"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
            <svg
              viewBox="0 0 445 225"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto text-dark-700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M279.881 30C285.543 30 291.023 28 295.352 24.3501C295.352 24.3501 317.526 5.6499 317.526 5.6499C321.854 2 327.334 0 332.996 0C332.996 0 421 0 421 0C434.255 0 445 10.75 445 24C445 24 445 201 445 201C445 214.25 434.255 225 421 225C421 225 24 225 24 225C10.7452 225 0 214.25 0 201C0 201 0 54 0 54C0 40.75 10.7452 30 24 30C24 30 279.881 30 279.881 30Z"
                fill="currentColor"
              />
            </svg>
            <svg
              viewBox="0 0 421 198"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 m-auto w-[94%] h-auto text-dark-900"
            >
              <path
                d="M277.294 26C283.112 26 288.733 23.8901 293.109 20.0498C293.109 20.0498 309.211 5.9502 309.211 5.9502C313.587 2.10986 319.207 0 325.026 0C325.026 0 397 0 397 0C410.255 0 421 10.75 421 24C421 24 421 174 421 174C421 187.25 410.255 198 397 198C397 198 24 198 24 198C10.7452 198 0 187.25 0 174C0 174 0 50 0 50C0 36.75 10.7452 26 24 26C24 26 277.294 26 277.294 26Z"
                fill="currentColor"
              />
            </svg>
            <div className="max-w-[440px] h-[198px] absolute flex-center justify-between overflow-hidden">
              <Image
                src={imageHeart}
                alt="imageHeart"
                className="sm:w-[170px] sm:h-[130px] sm:-ml-8 sm:-mt-11 w-[80px] h-[100px] ml-3 -mt-9"
              />

              <div className="flex mr-5 flex-col gap-0 md:gap-1" dir="rtl">
                <div className="md:w-[56px] w-[40px] h-[40px] md:h-[56px] rounded-2xl bg-white-pure flex items-center justify-center">
                  <Image src={emojehearts} alt="emojehearts" />
                </div>
                <span className="md:text-[24px] text-[20px] text-white-pure">
                  + 15.000 نظرات کاربران
                </span>
                <h2 className="md:text-[20px] text-[16px] text-gray-300">
                  رضایت مسافرانی که از پلتفرم دلتا استفاده کردن
                </h2>
              </div>
            </div>
            </GlareHover>
          </div>
        </div>
        {/*==================== center section ======================================== */}
        <div className="hidden md:block flex w-[475px] h-[490px] items-center justify-center">
          <div className="flex-center relative">
            <GlareHover
              glareColor="var(--color-gray-300)"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
            <svg
              width="446"
              height="470"
              viewBox="0 0 446 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-dark-700"
            >
              <path
                d="M280.324 31C286.111 31 291.702 28.9102 296.07 25.1099C296.07 25.1099 318.185 5.89014 318.185 5.89014C322.552 2.08984 328.144 0 333.931 0C333.931 0 422 0 422 0C435.255 0 446 10.75 446 24C446 24 446 446 446 446C446 459.25 435.255 470 422 470C422 470 24 470 24 470C10.745 470 0 459.25 0 446C0 446 0 55 0 55C0 41.75 10.745 31 24 31C24 31 280.324 31 280.324 31Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="422"
              height="446"
              viewBox="0 0 422 446"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 m-auto text-blue-purple-500"
            >
              <path
                d="M277.751 29.4199C283.704 29.4199 289.444 27.21 293.857 23.21C293.857 23.21 312.643 6.20996 312.643 6.20996C317.056 2.20996 322.796 0 328.749 0C328.749 0 398 0 398 0C411.255 0 422 10.75 422 24C422 24 422 422 422 422C422 435.25 411.255 446 398 446C398 446 24 446 24 446C10.745 446 0 435.25 0 422C0 422 0 53.4199 0 53.4199C0 40.1602 10.745 29.4199 24 29.4199C24 29.4199 277.751 29.4199 277.751 29.4199Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="max-w-[389px] text-center text-[20px] absolute top-15 m-auto inset-0 leading-10 ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ ...
            </h2>
             </GlareHover>
          </div>
        </div>
        {/*==================== right section ======================================== */}
        <div className="flex flex-col gap-5 w-[350px] md:w-[475px] h-[490px] relative">
          <div className="relative flex-center">
            <GlareHover
              glareColor="var(--color-gray-300)"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
            <svg
              viewBox="0 0 445 225"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto text-dark-700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M279.881 30C285.543 30 291.023 28 295.352 24.3501C295.352 24.3501 317.526 5.6499 317.526 5.6499C321.854 2 327.334 0 332.996 0C332.996 0 421 0 421 0C434.255 0 445 10.75 445 24C445 24 445 201 445 201C445 214.25 434.255 225 421 225C421 225 24 225 24 225C10.7452 225 0 214.25 0 201C0 201 0 54 0 54C0 40.75 10.7452 30 24 30C24 30 279.881 30 279.881 30Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="421"
              height="198"
              viewBox="0 0 421 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[95%] h-auto absolute m-auto inset-0 text-dark-900"
            >
              <path
                d="M277.294 26C283.112 26 288.733 23.8901 293.109 20.0498C293.109 20.0498 309.211 5.9502 309.211 5.9502C313.587 2.10986 319.207 0 325.026 0C325.026 0 397 0 397 0C410.255 0 421 10.75 421 24C421 24 421 174 421 174C421 187.25 410.255 198 397 198C397 198 24 198 24 198C10.7452 198 0 187.25 0 174C0 174 0 50 0 50C0 36.75 10.7452 26 24 26C24 26 277.294 26 277.294 26Z"
                fill="currentColor"
              />
            </svg>
            <div className="max-w-[421px] absolute flex-center justify-around">
              <Image
                src={productManagement}
                alt="imageActive"
                className="sm:w-[130px] sm:h-[130px] sm:-ml-4 sm:-mt-10 w-[100px] h-[100px] ml-2 -mt-3"
              />
              <div className="flex mr-5 flex-col gap-0 md:gap-1 " dir="rtl">
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
            </GlareHover>
          </div>
          <div className="relative flex-center">
            <GlareHover
              glareColor="var(--color-gray-300)"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
            <svg
              viewBox="0 0 445 225"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto text-dark-700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M279.881 30C285.543 30 291.023 28 295.352 24.3501C295.352 24.3501 317.526 5.6499 317.526 5.6499C321.854 2 327.334 0 332.996 0C332.996 0 421 0 421 0C434.255 0 445 10.75 445 24C445 24 445 201 445 201C445 214.25 434.255 225 421 225C421 225 24 225 24 225C10.7452 225 0 214.25 0 201C0 201 0 54 0 54C0 40.75 10.7452 30 24 30C24 30 279.881 30 279.881 30Z"
                fill="currentColor"
              />
            </svg>
            <svg
              width="421"
              height="198"
              viewBox="0 0 421 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[95%] h-auto absolute m-auto inset-0 text-dark-900"
            >
              <path
                d="M277.294 26C283.112 26 288.733 23.8901 293.109 20.0498C293.109 20.0498 309.211 5.9502 309.211 5.9502C313.587 2.10986 319.207 0 325.026 0C325.026 0 397 0 397 0C410.255 0 421 10.75 421 24C421 24 421 174 421 174C421 187.25 410.255 198 397 198C397 198 24 198 24 198C10.7452 198 0 187.25 0 174C0 174 0 50 0 50C0 36.75 10.7452 26 24 26C24 26 277.294 26 277.294 26Z"
                fill="currentColor"
              />
            </svg>
            <div className="w-full absolute flex-center justify-around">
              <Image
                src={imagePrize}
                alt="imagePrize"
                className="sm:w-[130px] sm:h-[130px] sm:-ml-0.5 sm:-mt-10 w-[100px] h-[100px] ml-2 -mt-3"
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
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

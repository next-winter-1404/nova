import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import Button from "@/src/components/common/button/page";
import HouseMainInformation from "@/src/components/common/houseMainInformation";
import ToolTip from "@/src/components/common/tooltip";
import share from "@/src/assets/icons/share-square.svg";
import Image from "next/image";
import test from "@/src/assets/images/HeroSectionBackground.jpg";
import { ITab } from "@/src/core/types/ITab";
import building from "@/src/assets/icons/house-building.svg";
import InfoCardContainer from "@/src/components/common/infoCardContainer";
import DaysCounter from "@/src/components/reserveHouse/daysCounter";
import dolor from "@/src/assets/icons/dollor.svg";
import LoginButton from "@/src/components/login/button/LoginButton";
import DatePickerComponent from "@/src/components/common/datePicker";
import PassengerCounter from "@/src/components/reserveHouse/counter";
import OldPriceComponent from "@/src/components/common/productCard/OldPrice";
import SelectedTab from "@/src/components/common/propertyTab";
import {
  FaRegCommentDots,
  FaRegSave,
  FaRegFileAlt,
  FaStar,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

import AboutHouseContainer from "@/src/components/reserveHouse/aboutHouseContainer";
import HouseItemsComponent from "@/src/components/reserveHouse/houseItemsComponent";
import Input from "@/src/components/common/input/Input";
import line from "@/src/assets/images/divideLine.svg";
import StarRatingContainer from "@/src/components/reserveHouse/starRatingcontainer";
import CommentSection from "@/src/components/reserveHouse/commentSection";
import SimilarHouses from "@/src/components/reserveHouse/SimilarHouses";
const SingleReserveHousePage = () => {
  const cities = [
    { value: "nyc", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" },
  ];
  const items: BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رزرو هتل",
    },
    {
      href: "/reserve-house",

      label: `رزرو هتل ${"رشت"}`,
    },
    {
      label: `رزرو هتل ${"همایون فر"}`,
    },
  ];
  const tabs: ITab[] = [
    {
      value: "comment",
      label: "نظرات کاربران",
      icon: <FaRegCommentDots className="w-4 h-4" />,
    },
    {
      value: "facilities",
      label: " امکانات اقامتگاه",
      icon: <FaRegSave className="w-4 h-4" />,
    },

    {
      value: "about",
      label: "درباره ملک",
      icon: <FaRegFileAlt className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex-center bg-dark-900">
      <div className="flex items-end flex-col gap-6 w-4/5 lg:w-[1375px] mt-17 ">
        <Breadcrumb items={items} twClassname="lg:mt-14 mt-6" />
        <div className="flex  flex-col gap-8 md:gap-4 lg:flex-row-reverse lg:items-end justify-between  w-full mt-4 p-4">
          <HouseMainInformation
            houseTitle="هتل همایون فر کیش ایران"
            houseAddress="  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ"
          />
          <div className="flex items-center gap-4 justify-between " dir="rtl">
            <Button
              text={`${5} ستاره `}
              icon={<FaStar className="text-white h-4 w-4" />}
              buttonStyle={{
                background: "var(--color-blue-purple-500)",
                width: 92,
                height: 32,
                borderRadius: 10,
              }}
            />
            <div className="w-1 h-4 border-white border-1 bg-white hidden lg:block " />
            <div className="flex gap-4">
              <ToolTip
                mainContent={
                  <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-primary-accent-green">
                    <FiCopy className="w-4 h-4 text-gray-300 hover:text-black" />
                  </div>
                }
                tooltipText="کپی کردن"
              />
              <ToolTip
                mainContent={
                  <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-primary-accent-green">
                    <Image className="w-4 h-4" alt="icon" src={share} />
                  </div>
                }
                tooltipText="اشتراک گذاری"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-15 lg:gap-5 lg:flex-row lg:p-2 lg:justify-between lg:items-start p-4 flex-col-reverse  items-end w-full">
          <div className="flex gap-3 md:flex md:flex-wrap md:justify-between lg:grid lg:grid-cols-2 lg:w-[228px]">
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
          </div>
          <Image
            alt="icon"
            src={test}
            className="md:w-full  lg:max-w-[1100px] lg:h-[420px] rounded-[40px]"
          />
        </div>
        <section className="flex flex-row-reverse justify-between  w-full items-start">
          <section className=" w-[1000px] flex flex-col gap-8">
            <SelectedTab options={tabs} twClassname="w-full" />
            {/* <AboutHouseContainer/> */}
            {/* <HouseItemsComponent/> */}
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex justify-end gap-10">
                <StarRatingContainer />

                <Input
                  labelText="نام و نام خانوادگی"
                  InputHeight="h-[50px]"
                  borderColor="border-white"
                  labelTextSize="text-white"
                  tagBgStyle={{ background: "var(--color-dark-900)" }}
                  textColor="text-white"
                  parentWidth="w-[35%]"
                />
                <Input
                  labelText="ایمیل شما"
                  InputHeight="h-[50px]"
                  borderColor="border-white"
                  labelTextSize="text-white"
                  tagBgStyle={{ background: "var(--color-dark-900)" }}
                  textColor="text-white"
                  parentWidth="w-[35%]"
                />
              </div>
              <div className="flex-center gap-8 w-full">
                <LoginButton
                  buttonText="ارسال"
                  loadingText="در حال ارسال پیام"
                  type="submit"
                  width="w-[111px] "
                  height="h-9"
                  radius="rounded-[10px]"
                />
                <Input
                  labelText="پیام شما"
                  InputHeight="h-[50px]"
                  borderColor="border-white"
                  labelTextSize="text-white"
                  tagBgStyle={{ background: "var(--color-dark-900)" }}
                  textColor="text-white"
                  parentWidth="w-full"
                />
              </div>
              <Image alt="icon" src={line} />
              <CommentSection />
            </div>
          </section>

          <InfoCardContainer
            icon={<Image alt="icon" src={building} className="w-5 h-5" />}
            labelText="رزرو خونه برای :"
          >
            <div className="relative flex flex-col w-full gap-6">
              <DatePickerComponent />
              <DatePickerComponent />
              <DaysCounter />
            </div>
            <PassengerCounter />
            <div className="border-t-2 border-b-2 border-gray-550  w-[92%] flex flex-col items-center gap-6 pb-6">
              <div
                className="w-[178px] h-9 rounded-b-3xl bg-gray-550 flex-center gap-2 text-16-semibold text-white"
                dir="rtl"
              >
                <Image alt="icon" src={dolor} className="w-4 h-4" />
                <span>قیمت رزرو :</span>
              </div>
              <div className="flex justify-between w-full" dir="rtl">
                <span className="text-gray-300 text-16-bold">
                  ★ 5 شب * 17000{" "}
                </span>
                <span className="text-16-bold text-white"> 18.000.000 ت</span>
              </div>
              <div className="flex justify-between w-full" dir="rtl">
                <span className="text-gray-300 text-16-bold">
                  ★ 5 شب * 17000{" "}
                </span>
                <span className="text-16-bold text-white"> 18.000.000 ت</span>
              </div>
              <div className="flex justify-between w-full" dir="rtl">
                <span className="text-gray-300 text-16-bold">
                  ★ 5 شب * 17000{" "}
                </span>
                <span className="text-16-bold text-white"> 18.000.000 ت</span>
              </div>
            </div>
            <div className="w-full px-2 flex flex-col justify-start gap-4">
              <div className="flex gap-4 w-full">
                <Button
                  text={"15%"}
                  buttonStyle={{ height: 25, width: 40, borderRadius: 8 }}
                />
                <OldPriceComponent oldPrice="25.000.000" />
              </div>

              <div className="text-primary-accent-green font-semibold text-[24px] flex gap-2">
                <i>تومان</i>
                <span>15.000.000</span>
              </div>
            </div>
            <LoginButton
              buttonText="همین حالا رزرو کن"
              loadingText="در حال رزرو"
              type="submit"
              width="w-full"
            />
          </InfoCardContainer>
        </section>
        <SimilarHouses/>
      </div>
    </div>
  );
};

export default SingleReserveHousePage;

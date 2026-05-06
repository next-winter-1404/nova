import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import Button from "@/src/components/common/button/page";
import HouseMainInformation from "@/src/components/common/houseMainInformation";
import ToolTip from "@/src/components/common/tooltip";
import { FaStar } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import share from "@/src/assets/icons/share-square.svg";
import Image from "next/image";
import test from "@/src/assets/images/HeroSectionBackground.jpg"
const SingleReserveHousePage = () => {
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
  return (
    <div className="flex-center">
      <div className="flex items-end flex-col gap-6 w-4/5 lg:w-[1375px] mt-17 ">
        <Breadcrumb items={items} twClassname="mt-14" />
        <div className="flex flex-row-reverse lg:items-end justify-between  w-full ">
          <HouseMainInformation
            houseTitle="هتل همایون فر کیش ایران"
            houseAddress="  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ"
          />
          <div className="flex items-center gap-4 " dir="rtl">
            <Button
              text={"5 ستاره"}
              icon={<FaStar className="text-white h-4 w-4" />}
              buttonStyle={{
                background: "var(--color-blue-purple-500)",
                width: 92,
                height: 32,
                borderRadius: 10,
              }}
            />
            <div className="w-1 h-4 border-white border-1 bg-white " />
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
       
          <div className="flex gap-15 lg:flex-row flex-col-reverse border ">
          <div className="flex  md:flex-wrap justify-between gap-y-3 lg:w-[228px]">
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
          <div className="w-24 h-24 bg-dark-700 rounded-4xl "></div>
       
          </div>
          <Image alt="dk" src={test} className=" w-[500px] lg:w-[1000px] lg:h-[420px] rounded-[40px]"/>
          </div>
      </div>
    </div>
  );
};

export default SingleReserveHousePage;

import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import Button from "@/src/components/common/button/page";
import HouseMainInformation from "@/src/components/common/houseMainInformation";
import ToolTip from "@/src/components/common/tooltip";
import { FaStar } from "react-icons/fa";
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
      <div className="flex items-end flex-col gap-6 w-4/5 max-lg:w-[1375px] mt-18 border">
        <Breadcrumb items={items} twClassname="mt-14" />
        <HouseMainInformation
          houseTitle="هتل همایون فر کیش ایران"
          houseAddress="  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ"
        />
        <div className="flex items-center gap-4" dir="rtl">
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
          <ToolTip mainContent={<span className="w-4 h-4">icon</span>} />
          <ToolTip mainContent={<span>icon</span>} />
        </div>
      </div>
    </div>
  );
};

export default SingleReserveHousePage;

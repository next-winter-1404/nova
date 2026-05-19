import ToolTip from "@/src/components/common/tooltip";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { TbHome } from "react-icons/tb";
import { HiOutlineBars3 } from "react-icons/hi2";
const DashboardLayout = () => {
  return (
    <div className="flex justify-between  w-full pt-5 px-5 h-full gap-5" dir="rtl">
      <aside className="w-[270px] border h-[95vh]">rjigt</aside>

      <div className="flex justify-between p-5 items-center w-full h-[66px] bg-dark-700 rounded-xl">
      <div className="font-extrabold text-white text-[20px]">
          <HiOutlineBars3 className="md:hidden" />
          <h2 className="hidden md:block">داشبورد</h2>
        </div>

        <div className="flex gap-4 items-center">
        <ToolTip
            tooltipText="صفحه اصلی"
            twClassname="z-100 bg-gray-550 "
            mainContent={
              <Link href={"/"}>
                <TbHome className="w-6 h-6 text-white cursor-pointer hidden md:block" />
              </Link>
            }
          />
          <div className="w-px h-8 bg-[#9C9C9C] hidden md:block" />
          <ToolTip
            mainContent={
              <div className=" relative hidden md:block">
                <HiOutlineBell className="w-6 h-6 text-white cursor-pointer" />
                <div className="w-[7px] h-[7px] rounded-xl bg-red-500 absolute top-0.5 right-1" />
              </div>
            }
            tooltipText="اعلان ها"
            twClassname="z-100 bg-gray-550"
          />

         
          <div className="flex gap-2  w-[150px] justify-start items-center cursor-pointer">

            <div className="w-[37px] h-[37px] bg-[#D9D9D9] rounded-lg"></div>
            <div className="fle flex-col" dir="rtl">
              <h2 className="text-[14px] text-white">بهار وهابی </h2>
              <span className="text-[12px] text-gray-500">رول</span>
            </div>
          </div>
            <FiChevronDown className="text-gray-500 " strokeWidth={2} />
        </div>
       
      </div>
    </div>
  );
};

export default DashboardLayout;

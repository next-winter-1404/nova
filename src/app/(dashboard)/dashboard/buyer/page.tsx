import DashboardInformation from "@/src/components/common/dashboardInformation/dashboardInformation";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ProgressBar from "@/src/components/common/progressBar/ProgressBar";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { TbPinFilled, TbHeartFilled } from "react-icons/tb";
const BuyerDashboardPage = async () => {
  const role = await getServerSideCookie("userRole");
  const items = ["نام اقامتگاه", "تاریخ رزرو", "قیمت", "وضعیت"];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 justify-between w-full ">
        <DashboardInformation
          amount={5}
          cardText="تعداد کل رزرو ها"
          role={role}
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
        />
        <DashboardInformation
          amount={5}
          cardText="رزرو های فعال"
          role={role}
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
        />
        <DashboardInformation
          amount={5}
          cardText="رزرو های پرداخت نشده"
          role={role}
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
        />
        <DashboardInformation
          amount={5}
          cardText="علاقه مندی ها"
          role={role}
          href="favorites"
          icon={<TbHeartFilled className="w-[26px] h-[26px] text-white" />}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 2xl:gap-20">
        <DashboardContentContainer
          twParentClassName=""
          href="/"
          navigateText="lahini"
          role={role}
          title="saalam"
        ></DashboardContentContainer>
        <DashboardContentContainer
          twParentClassName=""
          href="profile"
          navigateText="ویرایش"
          role={role}
          title="وضعیت تکمیل پروفایل شما"
        >
          <div className="text-white flex justify-between">
            <div className="flex flex-col gap-4 max-w-1/2">
              <h2 className="text-[36px]">40%</h2>
              <p>
                برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪
                تکمیل شده باشد.
              </p>
            </div>
            <div className="w-[125px] h-[125px]">
              <ProgressBar />
            </div>
          </div>
        </DashboardContentContainer>
      </div>
      <DashboardContentContainer
        href="reserve-management"
        navigateText="مشاهده همه"
        role={role}
        title="رزرو های اخیر"
      >
        <div className="flex flex-col">
          <ItemNavbar items={items} />
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default BuyerDashboardPage;

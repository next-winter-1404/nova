import DashboardInformation from "@/src/components/common/dashboardInformation/dashboardInformation";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ProgressBar from "@/src/components/common/progressBar/ProgressBar";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import ReserveChart from "@/src/components/dashboard/chart/ReserveChart";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { getBookings } from "@/src/utils/sevices/api/processReserve/getbooking";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUsers";
import { TbPinFilled, TbHeartFilled } from "react-icons/tb";
import { TbDots } from "react-icons/tb";
const BuyerDashboardPage = async () => {
  const role = await getServerSideCookie("userRole");
  const userId = await getServerSideCookie("userId");
  const items = ["نام اقامتگاه", "تاریخ رزرو", "قیمت", "وضعیت"];
  const result = await getBookings();
  const booking = result?.data || [];
  const user = await getUsersDetail(Number(userId));

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
          seemore
          twParentClassName=""
          href="reserve-management"
          navigateText="مشاهده همه"
          role={role}
          title="نمودار رزرو های شما"
        >
          <ReserveChart />
        </DashboardContentContainer>
        <DashboardContentContainer
          seemore
          twParentClassName=""
          href="profile"
          navigateText="ویرایش"
          role={role}
          title="وضعیت تکمیل پروفایل شما"
        >
          <div className="text-white flex justify-between">
            <div className="flex flex-col gap-4 max-w-1/2">
              <h2 className="text-[36px]">{user?.additionalPercentage}%</h2>
              <p>
                برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪
                تکمیل شده باشد.
              </p>
            </div>
            <div className="w-[125px] h-[125px]">
              <ProgressBar additionalPercentage={user?.additionalPercentage} />
            </div>
          </div>
        </DashboardContentContainer>
      </div>
      <DashboardContentContainer
        seemore
        href="reserve-management"
        navigateText="مشاهده همه"
        role={role}
        title="رزرو های اخیر"
      >
        <div className="flex flex-col w-full  ">
          <ItemNavbar colsNumber={4} items={items} />
          <div className="flex text-white mt-5 items-center">
            {booking?.length > 0 ? (
              booking?.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4  w-[90%] gap-20 items-center"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-[107px] h-[72px] rounded-xl bg-gray-600"></div>
                    <div>{item.house?.title || "عنوانی وجود ندارد"}</div>
                  </div>
                  <div className=" text-center">
                    {item.created_at?.slice(0, 10) || "--"}
                  </div>
                  <div className="flex-center gap-1 text-center " dir="rtl">
                    <span>{item.house?.price || "  --"}</span>
                    <span>تومان</span>
                  </div>
                  <StatusLabel status={item.status} />
                </div>
              ))
            ) : (
              <div className="text-4xl text-gray-300">رزوری وجود ندارد</div>
            )}
            <TbDots className="w-6 h-6 " />
          </div>
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default BuyerDashboardPage;

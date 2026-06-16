import FadeIn from "@/src/components/animations/FadeIn";
import Slide from "@/src/components/animations/Slide";
import DashboardInformation from "@/src/components/common/dashboardInformation/dashboardInformation";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ProgressBar from "@/src/components/common/progressBar/ProgressBar";
import ProgressBarAdmin from "@/src/components/common/progressBar/adminProgressBar";
import UsersChart from "@/src/components/dashboard/chart/userChart";
import { getDashbordSummery } from "@/src/utils/sevices/api/admin/users/getDashbordSummery";
import {
  TbUsers,
  TbUser,
  TbUserCheck,
  TbUserShield,
  TbCalendarEvent,
  TbCheck,
  TbClock,
  TbX,
  TbPinFilled,
} from "react-icons/tb";
const AdminPage = async () => {
  const dashboardSummery = await getDashbordSummery();
  const bookingSuccessPercent = Math.round(
    ((dashboardSummery.bookings?.conformedBookings ?? 0) /
      (dashboardSummery.bookings?.bookingCount ?? 1)) *
      100
  );
  const usersData = [
    {
      label: "کل کاربران",
      value: dashboardSummery?.users?.userCount,
      icon: <TbUsers className="w-5 h-5 text-gray-300 " />,
    },
    {
      label: "خریداران",
      value: dashboardSummery?.users?.buyers,
      icon: <TbUser className="w-5 h-5 text-gray-300 " />,
    },
    {
      label: "فروشنده‌ ها",
      value: dashboardSummery?.users?.sellers,
      icon: <TbUserCheck className="w-5 h-5 text-gray-300 " />,
    },
    {
      label: "ادمین‌ ها",
      value: dashboardSummery?.users?.admins,
      icon: <TbUserShield className="w-5 h-5 text-gray-300 " />,
    },
  ];
  const bookingsData = [
    {
      label: "کل رزروها",
      value: dashboardSummery?.bookings?.bookingCount,
      icon: <TbCalendarEvent className="w-5 h-5 text-gray-300" />,
    },
    {
      label: "تایید شده",
      value: dashboardSummery?.bookings?.conformedBookings,
      icon: <TbCheck className="w-5 h-5 text-gray-300" />,
    },
    {
      label: "در انتظار",
      value: dashboardSummery?.bookings?.pendingBookings,
      icon: <TbClock className="w-5 h-5 text-gray-300" />,
    },
    {
      label: "لغو شده",
      value: dashboardSummery?.bookings?.canceledBookings,
      icon: <TbX className="w-5 h-5 text-gray-300" />,
    },
  ];
  const userChartData = [
    {
      name: "خریداران",
      value: dashboardSummery.users?.buyers ?? 0,
    },
    {
      name: "فروشندگان",
      value: dashboardSummery.users?.sellers ?? 0,
    },
    {
      name: "ادمین‌ها",
      value: dashboardSummery.users?.admins ?? 0,
    },
  ];
  return (
    <Slide direction="right">
    <div className="flex flex-col gap-5">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4  w-full ">
        <DashboardInformation
          amount={dashboardSummery.users?.userCount}
          cardText="تعداد کل کاربران"
          role="admin"
          href="users-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
          seeMore
        />
        <DashboardInformation
          amount={dashboardSummery.houses}
          cardText="تعداد کل املاک"
          role="admin"
          href="estate-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
          seeMore
        />
        <DashboardInformation
          amount={dashboardSummery.comments}
          cardText="تعداد کل نظرات"
          role="admin"
          href="comments-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
          seeMore
        />
        <DashboardInformation
          amount={dashboardSummery.averageRating}
          cardText="میانگین امتیازها"
          role="admin"
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
          seeMore
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-5 ">
        <DashboardContentContainer isIcon title="کاربران">
          <div className="grid grid-cols-2 gap-3 text-white-pure">
            {usersData.map((item) => (
              <div
                key={item.label}
                className="bg-dark-800 p-4 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-sm text-gray-300 font-semibold text-[18px]">
                    {item.label || 0}
                  </p>
                </div>
                <h2 className="text-xl font-bold text-white-pure">
                  {item.value || 0}
                </h2>
              </div>
            ))}
          </div>
        </DashboardContentContainer>
        <DashboardContentContainer isIcon title="رزرو ها">
          <div className="grid grid-cols-2 gap-3 text-white-pure">
            {bookingsData.map((item) => (
              <div
                key={item.label}
                className="bg-dark-800 p-4 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-sm text-gray-300 font-semibold text-[18px]">
                    {item.label}
                  </p>
                </div>

                <h2 className="text-xl font-bold text-white-pure">
                  {item.value ?? 0}
                </h2>
              </div>
            ))}
          </div>
        </DashboardContentContainer>
      </div>
      <div className="grid grid-cols-2  gap-4  w-full">
        <DashboardContentContainer isIcon title="کاربران سیستم">
          <div className="text-white flex flex-col justify-between items-center gap-4">
            <div className="w-[50%]">
              <UsersChart data={userChartData} />
            </div>

            <p className="text-gray-300 text-sm leading-6 text-center">
              توزیع کاربران بر اساس نقش‌های مختلف در سیستم
            </p>
          </div>
        </DashboardContentContainer>
        <DashboardContentContainer isIcon title="رزرو های تایید شده">
          <div className="text-white flex flex-col justify-between items-center gap-4">
            <div className="w-[50%]">
              <ProgressBarAdmin bookingSuccessPercent={bookingSuccessPercent} />
            </div>
            <p className="flex flex-col gap-2  text-gray-300  leading-6">
              نرخ موفقیت رزروهای سیستم بر اساس رزروهای تایید شده
            </p>
          </div>
        </DashboardContentContainer>
      </div>
    </div>
    </Slide>
  );
};

export default AdminPage;

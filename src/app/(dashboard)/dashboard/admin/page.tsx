import DashboardInformation from "@/src/components/common/dashboardInformation/dashboardInformation";
import { getDashbordSummery } from "@/src/utils/sevices/api/admin/users/getDashbordSummery";
import { TbPinFilled, TbHeartFilled } from "react-icons/tb";

const AdminPage = async () => {
  const dashboardSummery = await getDashbordSummery();
  return (
    <div className="padding-section flex-center gap-5">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4  w-full ">
        <DashboardInformation
          amount={dashboardSummery.totalUsers}
          cardText="تعداد کل کاربران"
          role="admin"
          href="users-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          seeMore
        />
        <DashboardInformation
          amount={dashboardSummery.totalHouses}
          cardText="تعداد کل املاک"
          role="admin"
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          seeMore
        />
        <DashboardInformation
          amount={dashboardSummery.totalBookings}
          cardText="تعداد کل املاک رزرو شده"
          role="admin"
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          seeMore
        />
        <DashboardInformation
          amount={dashboardSummery.averageRating}
          cardText="میانگین امتیازها"
          role="admin"
          href="reserve-management"
          icon={<TbPinFilled className="w-[26px] h-[26px] text-white" />}
          seeMore
        />
      </div>
    </div>
  );
};

export default AdminPage;

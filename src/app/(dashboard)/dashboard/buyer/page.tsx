import FadeIn from "@/src/components/animations/FadeIn";
import DashboardInformation from "@/src/components/common/dashboardInformation/dashboardInformation";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ProgressBar from "@/src/components/common/progressBar/ProgressBar";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import ReserveChart from "@/src/components/dashboard/chart/ReserveChart";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import { getFavoriteForUser } from "@/src/utils/sevices/api/favorites/getFavorites";
import { getBookings } from "@/src/utils/sevices/api/processReserve/getbooking";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import { TbPinFilled, TbHeartFilled } from "react-icons/tb";
import { TbDots } from "react-icons/tb";
const BuyerDashboardPage = async () => {
  const role = await getServerSideCookie("userRole");
  const userId = await getServerSideCookie("userId");
  const items = ["نام اقامتگاه", "تاریخ رزرو", "قیمت", "وضعیت","عملیات"];
  const result = await getBookings();
  const booking = result?.data || [];
  const user = await getUsersDetail(Number(userId));
  const favorites = await getFavoriteForUser(Number(userId));

  return (
    <FadeIn>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  w-full ">
          <DashboardInformation
            amount={booking?.length}
            cardText="تعداد کل رزرو ها"
            role={role}
            href="reserve-management"
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
            seeMore
          />
          <DashboardInformation
            amount={booking.filter((b) => b.status === "confirmed").length}
            cardText="رزرو های فعال"
            role={role}
            href="reserve-management"
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
            seeMore
          />
          <DashboardInformation
            amount={booking.filter((b) => b.status === "pending").length}
            cardText="رزرو های در حال انتظار"
            role={role}
            href="reserve-management"
            icon={<TbPinFilled className="w-[26px] h-[26px] text-white-pure" />}
            seeMore
          />
          <DashboardInformation
            amount={favorites?.data.length}
            cardText="علاقه مندی ها"
            role={role}
            href="favorites"
            icon={<TbHeartFilled className="w-[26px] h-[26px] text-white-pure" />}
            seeMore
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5 2xl:gap-4">
          <DashboardContentContainer
            seemore
            twParentClassName=""
            href="reserve-management"
            navigateText="مشاهده همه"
            role={role}
            title="نمودار رزرو های شما"
            isIcon
          >
            <ReserveChart data={booking} />
          </DashboardContentContainer>
          <DashboardContentContainer
            isIcon
            seemore
            twParentClassName=""
            href="profile"
            navigateText="ویرایش"
            role={role}
            title="وضعیت تکمیل پروفایل شما"
          >
            <div className="text-white-pure flex justify-between">
              <div className="flex flex-col gap-4 max-w-1/2">
                <h2 className="text-[36px] text-white-pure">{user?.additionalPercentage}%</h2>
                <p>
                  برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪
                  تکمیل شده باشد.
                </p>
              </div>
              <div className="w-[30%] ">
                <ProgressBar
                  additionalPercentage={user?.additionalPercentage}
                />
              </div>
            </div>
          </DashboardContentContainer>
        </div>
        <DashboardContentContainer
          isIcon
          seemore
          href="reserve-management"
          navigateText="مشاهده همه"
          role={role}
          title="رزرو های اخیر"
        >
          <div className="flex flex-col gap-3 w-full">

  <ItemNavbar colsNumber={5} items={items} />

  <div className="flex flex-col gap-3 w-full">

    {booking?.slice(0, 6).length > 0 ? (
      booking.slice(0, 6).map((item) => (
        <div
          key={item.id}
          className="
            grid
            grid-cols-5
            items-center

            w-full
            bg-dark-800
            rounded-xl

            px-4 md:px-6
            py-4

            text-white-pure
            text-[11px] md:text-[15px]

            transition-all
            duration-300
            ease-out
            transform-gpu

            hover:-translate-y-1
            hover:scale-[1.01]
            hover:bg-dark-700
            hover:shadow-xl
            hover:shadow-black/30

            border
            border-transparent
            hover:border-white/10
          "
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-[70px] h-[55px] rounded-lg bg-gray-600 hidden md:block" />

            <span className="truncate">
              {item.house?.title || "عنوانی وجود ندارد"}
            </span>
          </div>

          <p className="text-center">
            {item.created_at?.slice(0, 10) || "--"}
          </p>

          <p className="text-center">
            {item.house?.price
              ? `${formatPrice(Number(item.house.price))} تومان`
              : "--"}
          </p>

          <div className="flex justify-center">
            <StatusLabel status={item.status} />
          </div>

          <div className="flex justify-center">
            <TbDots className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      ))
    ) : (
      <div className="w-full flex items-center justify-center py-20">
        <p className="text-gray-400 text-xl md:text-2xl">
          رزروی وجود ندارد
        </p>
      </div>
    )}

  </div>

</div>
        </DashboardContentContainer>
      </div>
    </FadeIn>
  );
};

export default BuyerDashboardPage;

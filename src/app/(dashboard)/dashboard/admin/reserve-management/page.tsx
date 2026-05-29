import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import StatusLabel from "@/src/components/common/statusLabel/StatusLabel";
import ReserveItemsIcon from "@/src/components/dashboard/ReserveItemsIcon/ReserveItemsIcon";
import UserName from "@/src/components/dashboard/getUserName/UserName";
import { calculateDaysBetween } from "@/src/utils/hooks/countDays";
import { getAllBookings } from "@/src/utils/sevices/api/admin/booking/getAllBooking/getAllBookings";

const AdminReserveManagementPage = async () => {
  const items = ["نام کاربر", "تاریخ انجام رزرو", "تعداد روز", "وضعیت"];
  const result = await getAllBookings();
  const allBookings = result.data || [];
  return (
    <div>
      <DashboardContentContainer title="مدیریت رزرو ها">
        <div className="flex flex-col gap-5 w-full">
          <ItemNavbar colsNumber={4} items={items} />
          <div>
            {allBookings.length > 0 ? (
              allBookings.map((booking) => (
               <div className="flex justify-between w-full items-center" key={booking.id}>
                 <div className="grid grid-cols-4 gap-15 md:text-[18px] text-white text-[10px] whitespace-nowrap  w-full">
                  <UserName userId={Number(booking.user_id)} />
                  <p className="md:mr-10 ">{booking.created_at?.slice(0, 10)}</p>
                  <p >
                    {calculateDaysBetween(
                      booking?.reservedDates?.[0],
                      booking.reservedDates?.[1]
                    )}
                  </p>
                  
                  <div className="-mr-15">
                  <StatusLabel status={booking.status} />
                  </div>
                </div>
              <ReserveItemsIcon bookingId={Number(booking?.id)} houseId={booking.houseId} userId={booking.user_id}/>
               </div>
              ))
            ) : (
              <div className="w-full text-3xl text-gray-300 text-center font-semibold">
                رزروی وجود ندارد
              </div>
            )}
          </div>
        </div>
      </DashboardContentContainer>
    </div>
  );
};

export default AdminReserveManagementPage;

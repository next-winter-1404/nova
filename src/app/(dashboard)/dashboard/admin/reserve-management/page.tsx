import FadeIn from "@/src/components/animations/FadeIn";
import BookingManagementClient from "@/src/components/dashboard/bookingMnagementClinet/bookingMnagementClinet";
import { getAllBookings } from "@/src/utils/sevices/api/admin/booking/getAllBooking/getAllBookings";

const AdminReserveManagementPage = async () => {
  const items = ["نام کاربر", "تاریخ انجام رزرو", "تعداد روز", "وضعیت", "عملیات"];

  const result = await getAllBookings();
  const allBookings = result.data || [];

  return (
    <FadeIn>
      <BookingManagementClient allBookings={allBookings} items={items} />
    </FadeIn>
  );
};

export default AdminReserveManagementPage;

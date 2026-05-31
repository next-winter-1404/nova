import BookingManagementClient from "@/src/components/dashboard/bookingMnagementClinet/bookingMnagementClinet";
import { getAllBookings } from "@/src/utils/sevices/api/admin/booking/getAllBooking/getAllBookings";

const AdminReserveManagementPage = async () => {
  const items = ["نام کاربر", "تاریخ انجام رزرو", "تعداد روز", "وضعیت"];

  const result = await getAllBookings();
  const allBookings = result.data || [];

  return <BookingManagementClient allBookings={allBookings} items={items} />;
};

export default AdminReserveManagementPage;

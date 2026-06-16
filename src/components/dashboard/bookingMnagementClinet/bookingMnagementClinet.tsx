"use client";

import { FC, useState } from "react";

import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import Input from "../../common/input/Input";
import UserName from "../getUserName/UserName";
import { calculateDaysBetween } from "@/src/utils/hooks/countDays";
import StatusLabel from "../../common/statusLabel/StatusLabel";
import ReserveItemsIcon from "../ReserveItemsIcon/ReserveItemsIcon";
import useSearch from "@/src/utils/hooks/searchHook";
import { IBooking } from "@/src/core/types/IBooking";
import { formatDateTime } from "@/src/utils/hooks/formDates";
interface IProp {
  allBookings: IBooking[];
  items: string[];
}
const BookingManagementClient: FC<IProp> = ({ allBookings, items }) => {
  const [search, setSearch] = useState("");

  const result = useSearch(allBookings, search, (allBookings, query) =>
    allBookings.filter((item) =>
      item.status?.toLowerCase().includes(query.toLowerCase()),
    ),
  );
  return (
    <DashboardContentContainer
      title="مدیریت رزرو ها"
      topSectionContent={
        <Input
          parentWidth=" w-[200px] md:w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeHolder="جستجو..."
          dir="rtl"
          InputHeight="md:h-[50px]"
          borderColor="border border-white placeholder-gray-300"
          tagBgStyle={{ background: "var(--color-dark-600)", color: "white" }}
          labelText="جستجو"
        />
      }
    >
      <div className="flex flex-col gap-5 w-full">
        {/* Navbar */}
        <ItemNavbar colsNumber={5} items={items} />

        {/* Table Wrapper */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[900px] flex flex-col gap-3">
            {result.length > 0 ? (
              result.map((booking) => (
                <div
                  key={booking.id}
                  style={{
                    gridTemplateColumns: "repeat(5,minmax(0,1fr))",
                  }}
                  className="
              grid
              items-center
              gap-4

              bg-dark-800
              rounded-xl

              px-4 md:px-6
              py-3

              text-white-pure
              text-[11px] md:text-[15px]

              transition-all
              duration-300
              ease-out
              transform-gpu

              hover:-translate-y-1
              hover:scale-[1.01]

              hover:bg-dark-700
              hover:shadow-2xl
              hover:shadow-black/40

              border
              border-transparent
              hover:border-white/10

              cursor-pointer
            "
                >
                  {/* User */}
                  <div className="flex items-center">
                    <UserName userId={Number(booking.user_id)} />
                  </div>

                  {/* Created At */}
                  <div className="text-center">
                    {formatDateTime(booking.created_at)}
                  </div>

                  {/* Days */}
                  <div className="text-center">
                    {calculateDaysBetween(
                      booking?.reservedDates?.[0],
                      booking?.reservedDates?.[1],
                    )}
                  </div>

                  {/* Status */}
                  <div className="flex justify-center">
                    <StatusLabel status={booking.status} />
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center">
                    <ReserveItemsIcon
                      bookingId={Number(booking.id)}
                      houseId={booking.houseId}
                      userId={booking.user_id}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-3xl text-gray-300 py-10">
                رزروی وجود ندارد
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default BookingManagementClient;

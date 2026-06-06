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
      item.status?.toLowerCase().includes(query.toLowerCase())
    )
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
        <ItemNavbar colsNumber={4} items={items} />

        <div>
          {result.length > 0 ? (
            result.map((booking) => (
              <div
                className="flex justify-between w-full items-center"
                key={booking.id}
              >
                <div className="grid grid-cols-4 gap-15 md:text-[18px] text-white text-[10px] whitespace-nowrap  w-full">
                  <UserName userId={Number(booking.user_id)} />
                  <p className="md:mr-10 ">
                    {formatDateTime(booking.created_at)}
                  </p>
                  <p>
                    {calculateDaysBetween(
                      booking?.reservedDates?.[0],
                      booking.reservedDates?.[1]
                    )}
                  </p>

                  <div className="-mr-15">
                    <StatusLabel status={booking.status} />
                  </div>
                </div>
                <ReserveItemsIcon
                  bookingId={Number(booking?.id)}
                  houseId={booking.houseId}
                  userId={booking.user_id}
                />
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
  );
};

export default BookingManagementClient;

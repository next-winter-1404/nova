"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical } from "react-icons/tb";
import { FiAlertCircle } from "react-icons/fi";
import { Modal } from "../../common/modal";
import { useQuery } from "@tanstack/react-query";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { getBookingDetailAdmin } from "@/src/utils/sevices/api/admin/booking/getBookingDetail/getBookingDetail";
import { IBooking } from "@/src/core/types/IBooking";
import { IHouse } from "@/src/core/types/IHouse";
import ProductCard from "../../common/productCard/ProductCard";
import Image from "next/image";
import { IUserResponse } from "@/src/core/types/IUser";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import { getUsersDetail } from "@/src/utils/sevices/api/users/getUserDetail";
import {
  TbMail,
  TbPhone,
  TbCalendarClock,
  TbEdit,
  TbBadge,
  TbCalendarCheck,
  TbCalendarX,
  TbCircleCheckFilled,
  TbTrash,
} from "react-icons/tb";
import StatusLabel from "../../common/statusLabel/StatusLabel";
import Button from "../../common/button/page";
import ItemNavbar from "../../common/dashboardItemNavbar/ItemNavbar";
import { EditBooking } from "@/src/utils/sevices/api/admin/booking/editBooking/editBooking";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteBooking } from "@/src/utils/sevices/api/admin/booking/deleteBooking/deleteBooking";
interface IProp {
  bookingId: number;
  houseId?: number;
  userId?: number;
}
const ReserveItemsIcon: FC<IProp> = ({ bookingId, houseId, userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTravelersModalOpen, setIsTravelersModalOpen] = useState(false);
  const router = useRouter();
//   api callings
  const { data: houseDetail, isLoading: houseLoading } =
    useQuery<IHouse | null>({
      queryKey: ["houseDetail", houseId],
      queryFn: () => getHousesDetail(Number(houseId)),
      enabled: houseId !== null && houseId !== undefined,
      staleTime: 5 * 1000 * 60,
      refetchOnWindowFocus: false,
    });

  const { data: bookingDetail, isLoading: bookingLoading } =
    useQuery<IBooking | null>({
      queryKey: ["bookingDetail", bookingId],
      queryFn: () => getBookingDetailAdmin(Number(bookingId)),
      enabled: bookingId !== null,
      staleTime: 5 * 1000 * 60,
      refetchOnWindowFocus: false,
    });

  const { data: getUsers, isLoading: userLoading } =
    useQuery<IUserResponse | null>({
      queryKey: ["getUsers", userId],
      queryFn: () => getUsersDetail(Number(userId)),
      enabled: userId !== null && userId !== undefined,
      staleTime: 5 * 1000 * 60,
      refetchOnWindowFocus: false,
    });
  const usersDetail = getUsers?.user;
  const isLoading = houseLoading || bookingLoading || userLoading;

//   edit and delete reservation function
  const confirmReservation = async () => {
    try {
        await EditBooking(bookingId, "confirmed");
        toast.success("رزرو با موفقیت تأیید شد ");
        router.refresh();
      } catch (error) {
        toast.error("خطا در تأیید رزرو ");
        console.error(error);
      }
    };
  
  const deleteReservation = async () => {
    try {
        await deleteBooking(bookingId);
        toast.success("رزرو با موفقیت حذف شد ");
        router.refresh();
      } catch (error) {
        toast.error("خطا در حذف رزرو ");
        console.error(error);
      }
    };
  
 
// drop down items with their functions
  const allMenuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => setIsModalOpen(true),
    },

    {
      label: "تایید",
      icon: <TbCircleCheckFilled className="mt-px text-white" />,
      onClick: () => confirmReservation(),
    },
    {
        label: "حذف",
        icon: <TbTrash className="mt-px text-white" />,
        onClick: () => deleteReservation(),
    },
  ];
  const menuItems = allMenuItems.filter(item => 
    !(bookingDetail?.status === "confirmed" && item.label === "تایید")
  );
  const navbarItem = ["تاریخ تولد", " جنسیت", "کدملی", " نام"];

  return (
    <div>
      <DropMenu
        trigger={
          <div>
            <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
            <TbDotsVertical className="w-4 h-4 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
          </div>
        }
        items={menuItems}
        side="right"
        align="end"
      />
      {/* booking information modal (house,user,dates) */}
      <Modal
        contentClassName=" bg-dark-900"
        width="w-[55%]"
        mainContent={
          <div>
            {isLoading ? (
              <div>در حال بارگزاری....</div>
            ) : (
              <div className="w-full flex justify-between ">
                <div className="w-1/2 flex flex-col text-white gap-5" dir="rtl">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={usersDetail?.profilePicture || userPlaceHolder}
                      alt={`${usersDetail?.fullName}`}
                      width={50}
                      height={50}
                      className="rounded-lg border border-gray-300 overflow-hidden"
                    />
                    <p>
                      {`${usersDetail?.firstName} ${usersDetail?.lastName}` ||
                        "نام کاربر"}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 text-gray-300">
                      <TbMail className="w-4 h-5 mt-0.5" />
                      <span>ایمیل:</span>
                    </div>
                    {usersDetail?.email}
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className=" flex gap-1 items-center text-gray-300">
                      <TbPhone className="w-4 h-4  mb-1" />
                      <span>شماره تلفن:</span>
                    </div>
                    {usersDetail?.phoneNumber}
                  </div>
                  <div className="flex gap-2 text-gray-300 items-center">
                    <div className="flex gap-1 00 items-center">
                      <TbBadge />
                      <span>وضعیت رزرو:</span>
                    </div>
                    <StatusLabel status={bookingDetail?.status} />
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 text-gray-300 items-center">
                      <TbCalendarCheck />
                      <span>تاریخ ورود:</span>
                    </div>
                    {bookingDetail?.reservedDates?.[0].slice(0, 10)}
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 text-gray-300 items-center">
                      <TbCalendarX />
                      <span>تاریخ خروج:</span>
                    </div>
                    {bookingDetail?.reservedDates?.[1].slice(0, 10)}
                  </div>
                  <div className="flex gap-2 ">
                    <div className="flex gap-1 text-gray-300 items-center">
                      <TbCalendarClock />
                      <span>تاریخ ایجاد رزرو:</span>
                    </div>
                    {bookingDetail?.created_at?.slice(0, 10)}
                  </div>
                  <div className="flex gap-2 ">
                    <div className="flex gap-1 text-gray-300 items-center ">
                      <TbEdit />
                      <span>اخرین ویرایش:</span>
                    </div>
                    {bookingDetail?.updated_at?.slice(0, 10)}
                  </div>
                  <Button
                    text={`لیست مسافرین (${bookingDetail?.traveler_details?.length})`}
                    buttonStyle={{
                      background: "var(--color-primary-accent-green)",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsTravelersModalOpen(true);
                    }}
                  />
                </div>

                <div>
                  <ProductCard
                    address={houseDetail?.address}
                    bathrooms={houseDetail?.bathrooms}
                    parking={houseDetail?.parking}
                    photos={houseDetail?.photos}
                    price={houseDetail?.price}
                    rate={houseDetail?.rate}
                    rooms={houseDetail?.rooms}
                    discounted_price={houseDetail?.discounted_price}
                    title={houseDetail?.title}
                    buttonText="قیمت"
                    href={`/reserve-house/${houseDetail?.id}`}
                  />
                </div>
              </div>
            )}
          </div>
        }
        onOpenChange={setIsModalOpen}
        open={isModalOpen}
      />

      {/* travelers detail modal */}

      <Modal
        onOpenChange={setIsTravelersModalOpen}
        open={isTravelersModalOpen}
        contentClassName="bg-dark-900"
        mainContent={
          <div className="flex flex-col gap-5">
            <ItemNavbar
              colsNumber={4}
              items={navbarItem}
              twClassName="whitespace-nowrap"
            />
            {bookingDetail?.traveler_details?.map((traveler) => (
              <div
                className="flex flex-col gap-5"
                dir="rtl"
                key={`${traveler.firstName} - ${traveler.nationalId}`}
              >
                <div className="grid grid-cols-4 gap-4 text-white">
                  <span>
                    {`${traveler.firstName} ${traveler.lastName}` ||
                      "نام کاربر"}
                  </span>
                  <span>{traveler.nationalId || "----"}</span>
                  <span className="text-center">{traveler.gender || "--"}</span>
                  <span>{traveler.birthDate?.slice(0, 10) || "----"}</span>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default ReserveItemsIcon;

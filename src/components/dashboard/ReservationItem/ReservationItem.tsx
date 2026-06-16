"use client";
import { useActionState, useEffect, useState } from "react";
import { TbDots, TbDotsVertical, TbTool } from "react-icons/tb";
import { Modal } from "../../common/modal";
import { IBooking } from "@/src/core/types/IBooking";
import { useQuery } from "@tanstack/react-query";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { IHouse } from "@/src/core/types/IHouse";
import ProductCard from "../../common/productCard/ProductCard";
import Button from "../../common/button/page";
import ItemNavbar from "../../common/dashboardItemNavbar/ItemNavbar";
import DropMenu from "../../common/dropMenu/DropMenu";
import { FiAlertCircle } from "react-icons/fi";
import LoginButton from "../../login/button/LoginButton";
import { sendMaintenanceRequest } from "@/src/utils/sevices/api/maintenanceRequests/sendMaintenanceRequest";
import toast from "react-hot-toast";
interface IReservationItemProps {
  houseId: number;
  item?: IBooking;
}
const ReservationItem = ({ houseId, item }: IReservationItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);

  const { data: houseDetail } = useQuery<IHouse | null>({
    queryKey: ["houseDetail", houseId],
    queryFn: () => getHousesDetail(Number(houseId)),
    enabled: houseId !== null,
    staleTime: 5 * 1000 * 60,
    refetchOnWindowFocus: false,
  });
  const getTagsArray = (tags: any): string[] => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === "string") return [tags];
    return [];
  };
  // send report function
  const [state, formAction] = useActionState(
    async (prevState: any, formData: FormData) => {
      if (!houseId) {
        return {
          success: false,
          message: "خانه انتخاب نشده است",
        };
      }

      return sendMaintenanceRequest(Number(houseId), prevState, formData);
    },
    {
      success: false,
      message: "",
    }
  );
  // send report state
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  const navbarItem = ["نام", "کد ملی", "جنسیت", "تاریخ تولد"];
  const tagsArray = getTagsArray(houseDetail?.tags);

  // menu items with their functions
  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsModalOpen(true),
    },

    {
      label: "گزارش خرابی",
      icon: <TbTool className="mt-px text-white-pure" />,
      onClick: () => setIsMaintenanceModalOpen(true),
    },
  ];

  return (
    <>
      <DropMenu
        trigger={
          <div>
            <TbDots className="w-6 h-6 cursor-pointer text-gray-400 hover:text-primary-accent-green transition hidden md:block" />
            <TbDotsVertical className="w-5 h-5 cursor-pointer text-gray-400 hover:text-primary-accent-green transition md:hidden" />
          </div>
        }
        items={menuItems}
        side="bottom"
        align="end"
      />
      {/* send report modal */}
      <Modal
        contentClassName="bg-dark-900 text-white-pure"
        mainContent={
          <form action={formAction} className="flex flex-col gap-5">
            <textarea
              className="w-full min-h-[200px] p-2 border border-gray-300"
              dir="rtl"
              name="description"
            />
            <LoginButton
              buttonText="ارسال گزارش"
              loadingText="درحال ارسال ..."
              noIcon
              width="w-full"
              type="submit"
            />
          </form>
        }
        modalTitle="گزارش خرابی"
        modalDescription="در صورت مشاهده هرگونه مشکل یا خرابی در ملک، لطفاً جزئیات آن را در این بخش ثبت کنید تا توسط مالک بررسی و پیگیری شود."
        onOpenChange={setIsMaintenanceModalOpen}
        open={isMaintenanceModalOpen}
      />
      {/* house detail */}
      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        modalBtn={<div></div>}
        contentClassName=" bg-dark-900"
        width="w-[55%]"
        mainContent={
          <div className="flex justify-between">
            <div className=" text-white-pure flex flex-col justify-between ">
              <div className="flex-col flex gap-5 w-[90%]  ">
                <p dir="rtl">{houseDetail?.caption || "توضیحاتی وجود ندارد"}</p>
                <div className="flex gap-4" dir="rtl">
                  <span className="text-gray-300">برچسب ها : </span>
                  <div className="flex gap-2 flex-wrap">
                    {tagsArray.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-accent-green/20 text-primary-accent-green rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Modal
                  modalBtn={
                    <Button
                      text={"لیست مسافرها"}
                      buttonStyle={{
                        background: "var(--color-primary-accent-green)",
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                  }
                  contentClassName="bg-dark-800"
                  mainContent={
                    <div>
                      {item?.traveler_details?.map((traveler) => (
                        <div
                          className="flex flex-col gap-5"
                          dir="rtl"
                          key={`${traveler.firstName} - ${traveler.nationalId}`}
                        >
                          <ItemNavbar
                            colsNumber={4}
                            items={navbarItem}
                            twClassName="whitespace-nowrap"
                          />
                          <div className="grid grid-cols-4 gap-4 text-white-pure">
                            <span>
                              {`${traveler.firstName} ${traveler.lastName}` ||
                                "نام کاربر"}
                            </span>
                            <span>{traveler.nationalId || "----"}</span>
                            <span className="text-center">
                              {traveler.gender || "--"}
                            </span>
                            <span>{traveler.birthDate || "----"}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  }
                />
                <Button
                  text={"رزرو ها"}
                  buttonStyle={{
                    background: "var(--color-primary-accent-green)",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <ProductCard
              address={houseDetail?.address}
              bathrooms={houseDetail?.bathrooms}
              capacity={houseDetail?.capacity}
              parking={houseDetail?.parking}
              photos={houseDetail?.photos}
              rate={houseDetail?.rate}
              price={houseDetail?.price}
              title={houseDetail?.title}
              discounted_price={houseDetail?.discounted_price}
            />
          </div>
        }
      />
    </>
  );
};

export default ReservationItem;

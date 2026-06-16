"use client";
import React, { FC, useEffect, useState } from "react";
import { Modal } from "../../common/modal";
import DatePickerComponent from "../../common/datePicker";
import Button from "../../common/button/page";
import { FiPhoneCall } from "react-icons/fi";
import SimpleDropdown from "../../common/dropDown";
import { useRouter, useSearchParams } from "next/navigation";
import { createVisitAppointment } from "@/src/utils/sevices/api/visitAppointment/createvisitAppointment";
import toast from "react-hot-toast";
import { TbBadge, TbCalendarCheck, TbPhone } from "react-icons/tb";
import StatusLabel from "../../common/statusLabel/StatusLabel";
import { IVisit } from "@/src/core/types/IVisit";

interface IProps {
  houseId: number;
  userId?: number;
  getAppointments?: IVisit[];
}
const VisitAppointment: FC<IProps> = ({ houseId, userId, getAppointments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMyVisitOpen, setIsMyVisitOpen] = useState(false);
  const [date, setDate] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeOfVisit = searchParams.get("type");

  const myVisits = (getAppointments ?? []).filter(
    (appointment) => appointment.userId === userId
  );
  const checkAuth = async (): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/check");
      const data = await response.json();
      return data.isAuthenticated;
    } catch (error) {
      console.log("Error checking auth:", error);
      return false;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleSubmit = async () => {
    const isAuth = await checkAuth();

    if (!isAuth) {
      toast.error("ابتدا وارد حساب کاربری شوید");
      router.push("/login");
      return;
    }
    try {
      toast.loading("در حال ثبت قرار...", { id: "visit" });

      const apiParams = {
        houseId,
        appointmentTime: date,
        type: typeOfVisit,
      };
      if (!date || !typeOfVisit) {
        toast.error("لطفاً همه فیلدها را پر کنید");
        return;
      }
      await createVisitAppointment(apiParams);

      toast.success("قرار ملاقات ثبت شد ", { id: "visit" });
      setIsOpen(false);

      setIsOpen(false);
    } catch (err) {
      toast.error("خطا در ثبت قرار ", { id: "visit" });
      console.error(err);
    }
  };
  const options = [
    { value: "virtual", label: "مجازی" },
    { value: "in_person", label: "حضوری" },
  ];

  return (
    <div className="w-full" dir="rtl">
      {myVisits?.length > 0 ? (
        <Button
          onClick={() => setIsMyVisitOpen(true)}
          text={"مشاهده قرار های ملاقات"}
          buttonStyle={{
            background: "var(--color-primary-accent-green)",
            width: "100%",
            fontSize: "13px",
            color: "var(--color-dark-800)",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          text="تنظیم قرار ملاقات"
          icon={<FiPhoneCall />}
          buttonStyle={{
            background: "var(--color-primary-accent-green)",
            width: "100%",
            fontSize: "13px",
            color: "var(--color-dark-800)",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      )}

      <Modal
        onOpenChange={setIsOpen}
        open={isOpen}
        modalTitle="تنظیم قرار ملاقات با فروشنده"
        modalDescription="لطفا تاریخ و نوع قرار را نشخص کنید و سپس منتظر تایید فروشنده باشید"
        contentClassName="bg-dark-900 text-white"
        mainContent={
          <div className="flex flex-col gap-8">
            <DatePickerComponent
              onChange={setDate}
              value={date}
              paramKey="date"
              placeholder="تاریخ"
              labelText="زمان ملاقات"
            />
            <SimpleDropdown
              options={options}
              paramKey="type"
              placeholder="نوع قرار"
              tagBg="bg-dark-900"
              labelText="نوع قرار"
            />
            <Button
              text={"تنظیم قرار"}
              buttonStyle={{
                background: "var(--color-primary-accent-green)",
                width: "100%",
                fontSize: "13px",
                color: "var(--color-dark-800)",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        }
      />
      <Modal
        onOpenChange={setIsMyVisitOpen}
        open={isMyVisitOpen}
        modalTitle="مشاهده قرار های ملاقات شما با فروشنده"
        contentClassName="bg-dark-900 text-white"
        mainContent={
          <div dir="rtl " className="w-full flex flex-col gap-5">
            {myVisits.map((visit) => (
              <div
                className="flex flex-col gap-4 p-4 rounded-xl bg-dark-600 w-full"
                dir="rtl"
              >
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 text-gray-300 items-center">
                    <TbCalendarCheck className="w-4 h-4" />
                    <span>تاریخ قرار:</span>
                  </div>

                  {visit?.appointmentTime?.slice(0, 10) || "--"}
                </div>

                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 text-gray-300 items-center">
                    <TbPhone className="w-4 h-4" />
                    <span>نوع قرار:</span>
                  </div>

                  {visit?.type === "virtual" ? "مجازی" : "حضوری" || "--"}
                </div>

                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 text-gray-300 items-center">
                    <TbBadge className="w-4 h-4" />
                    <span>وضعیت:</span>
                  </div>

                  <StatusLabel status={visit?.status} />
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default VisitAppointment;

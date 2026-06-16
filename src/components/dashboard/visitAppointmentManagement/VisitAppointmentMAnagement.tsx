"use client";
import { FC, useState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbBan, TbDots, TbDotsVertical } from "react-icons/tb";
import { FiAlertCircle } from "react-icons/fi";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useRouter, useSearchParams } from "next/navigation";
import AlertComponent from "../../common/alert/alert";
import { adminDeleteBlog } from "@/src/utils/sevices/api/blogs/deleteBlog";
import toast from "react-hot-toast";
import { cancelVisitAppointment } from "@/src/utils/sevices/api/visitAppointment/cancelVisitAppointment";
import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
import { editVisitAppointment } from "@/src/utils/sevices/api/visitAppointment/editVisitAppointment";
import { Modal } from "../../common/modal";
import Button from "../../common/button/page";
import SimpleDropdown from "../../common/dropDown";
import DatePickerComponent from "../../common/datePicker";
interface IProp {
  visitId: number;
  status?: string;
}
const VisitAppointmentMAnagement: FC<IProp> = ({ visitId, status }) => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [date, setDate] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const typeOfVisit = searchParams.get("type");

  //   api calling
  const handleCancelVisit = async () => {
    try {
      await cancelVisitAppointment(visitId);
      toast.success("قرار ملاقات با موفقیت کنسل شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در کنسل  قرار ملاقات ");
      console.error(error);
    }
  };
  const handelAcceptVisit = async () => {
    try {
      await editVisitAppointment(visitId, { status: "confirmed" });
      toast.success("قرار ملاقات با موفقیت تایید شد ");
      router.refresh();
    } catch (error) {
      toast.error("خطا در تایید  قرار ملاقات ");
      console.error(error);
    }
  };
  const handleSubmit = async () => {
    try {
      const apiParams = {
        appointmentTime: date,
        type: typeOfVisit,
      };
      if (!date || !typeOfVisit) {
        toast.error("لطفاً همه فیلدها را پر کنید");
        return;
      }
      await editVisitAppointment(visitId, apiParams);

      toast.success("قرار ملاقات ویرایش شد ");
      setIsEditModal(false);
    } catch (err) {
      toast.error("خطا در ویرایش قرار ");
      console.error(err);
    }
  };

  // drop down items with their functions

  let menuItems = [
    {
      label: "ویرایش درخواست",
      icon: <TbEdit className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsEditModal(true),
    },
  ];
  if (status === "canceled") {
    menuItems.push({
      label: "تأیید درخواست",
      icon: <FiCheckCircle className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsAcceptModalOpen(true),
    });
  } else if (status === "confirmed") {
    menuItems.push({
      label: "رد درخواست",
      icon: <FiXCircle className="w-4 h-4 text-white-pure" />,
      onClick: () => setIsCancelModalOpen(true),
    });
  } else {
    menuItems.push(
      {
        label: "تأیید درخواست",
        icon: <FiCheckCircle className="w-4 h-4 text-white-pure" />,
        onClick: () => setIsAcceptModalOpen(true),
      },
      {
        label: "رد درخواست",
        icon: <FiXCircle className="w-4 h-4 text-white-pure" />,
        onClick: () => setIsCancelModalOpen(true),
      }
    );
  }

  const options = [
    { value: "virtual", label: "مجازی" },
    { value: "in_person", label: "حضوری" },
  ];

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
      <Modal
        contentClassName="bg-dark-900 text-white"
        mainContent={
          <div>
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
                text={"ویرایش قرار"}
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
          </div>
        }
        onOpenChange={setIsEditModal}
        open={isEditModal}
      />

      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از لغو کردن این دخواست مطمعن هستید؟"
        isModalOpen={isCancelModalOpen}
        setIsModalOpen={setIsCancelModalOpen}
        onClickFunction={handleCancelVisit}
      />
      <AlertComponent
        acceptButtonText="بله"
        alertText="ایا از تایید این درخواست مطمعن هستید؟"
        isModalOpen={isAcceptModalOpen}
        setIsModalOpen={setIsAcceptModalOpen}
        onClickFunction={handelAcceptVisit}
      />
    </div>
  );
};

export default VisitAppointmentMAnagement;

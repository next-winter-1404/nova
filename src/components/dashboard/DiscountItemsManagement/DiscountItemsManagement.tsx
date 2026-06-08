"use client";
import { FC, useEffect, useState, useActionState } from "react";
import DropMenu from "../../common/dropMenu/DropMenu";
import { TbDots, TbDotsVertical, TbEdit, TbTrash } from "react-icons/tb";
import { FiAlertCircle } from "react-icons/fi";
import { Modal } from "../../common/modal";
import { useRouter } from "next/navigation";
import AlertComponent from "../../common/alert/alert";
import toast from "react-hot-toast";
import { adminDeleteDiscount } from "@/src/utils/sevices/api/admin/discount/deleteDiscount";
import { adminEditDiscount } from "@/src/utils/sevices/api/admin/discount/editDiscount";
import { FaPercent, FaCalendarAlt, FaTicketAlt } from "react-icons/fa";
import Input from "../../common/input/Input";
import LoginButton from "../../login/button/LoginButton";
import DatePickerComponent from "../../common/datePicker";
import { formatDateTime } from "@/src/utils/hooks/formDates";

interface IProp {
  discountId: number;
  percentage?: string | number;
  validDate?: string;
  discountCode?: string;
}

const DiscountItemsManagement: FC<IProp> = ({
  discountId,
  percentage,
  validDate,
  discountCode,
}) => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [date, setDate] = useState(validDate);

  const router = useRouter();

  const [state, formAction] = useActionState(
    adminEditDiscount.bind(null, Number(discountId)),
    {
      success: false,
      message: "",
    }
  );

  //  set default date when modal opens 
  useEffect(() => {
    if (validDate) {
      setDate(validDate);
    }
  }, [validDate]);

  // handle edit response
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.refresh();
      setIsEditOpen(false);
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  // delete
  const handleDeleteDiscount = async () => {
    try {
      await adminDeleteDiscount(discountId);
      toast.success("کد تخفیف با موفقیت حذف شد");
      router.refresh();
    } catch (error) {
      toast.error("خطا در حذف کد تخفیف");
    }
  };

  const menuItems = [
    {
      label: "جزییات",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => setIsDetailModalOpen(true),
    },
    {
      label: "ویرایش",
      icon: <TbEdit className="text-white" />,
      onClick: () => setIsEditOpen(true),
    },
    {
      label: "حذف",
      icon: <TbTrash className="text-white" />,
      onClick: () => setIsAlertModalOpen(true),
    },
  ];

  return (
    <div>
      <DropMenu
        trigger={
          <div>
            <TbDots className="w-6 h-6 hidden md:block cursor-pointer" />
            <TbDotsVertical className="w-4 h-4 md:hidden cursor-pointer" />
          </div>
        }
        items={menuItems}
        side="right"
        align="end"
      />

      <Modal
        contentClassName="bg-dark-900"
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
        mainContent={
          <div className="flex flex-col gap-4 p-4" dir="rtl">
            <div className="flex items-center gap-3">
              <FaTicketAlt className="text-green-500" />
              <span>{discountCode}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPercent className="text-green-500" />
              <span>{percentage}%</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-green-500" />
              <span>{formatDateTime(validDate)}</span>
            </div>
          </div>
        }
      />

      <Modal
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        contentClassName="bg-dark-900 text-white"
        mainContent={
          <form
            action={formAction}
            className="flex flex-col gap-6 p-4"
            dir="rtl"
          >
            <div>
              <span>کد تخفیف:</span>
              <Input
                dir="rtl"
                name="code"
                defaultValue={discountCode}
                InputHeight="h-[50px]"
              />
            </div>

            <div>
              <span>درصد:</span>
              <Input
                dir="rtl"
                name="discount_percentage"
                defaultValue={percentage}
                InputHeight="h-[50px]"
              />
            </div>

            <div>
              <span>تاریخ:</span>

              <DatePickerComponent
                value={date}
                paramKey="valid_until"
                placeholder="تاریخ انقضا"
                onChange={(val) => setDate(val)}
              />

              <input type="hidden" name="valid_until" value={date} />
            </div>

            <LoginButton
              type="submit"
              buttonText="اعمال تغییرات"
              loadingText="در حال ذخیره..."
              noIcon
            />
          </form>
        }
      />

      {/* ================= DELETE ALERT ================= */}
      <AlertComponent
        isModalOpen={isAlertModalOpen}
        setIsModalOpen={setIsAlertModalOpen}
        acceptButtonText="بله"
        alertText="آیا از حذف مطمئن هستید؟"
        onClickFunction={handleDeleteDiscount}
      />
    </div>
  );
};

export default DiscountItemsManagement;

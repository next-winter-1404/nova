"use client";

import { TbCreditCard } from "react-icons/tb";
import DropMenu from "../../common/dropMenu/DropMenu";
import { FiAlertCircle } from "react-icons/fi";
import { Modal } from "../../common/modal";
import { useState } from "react";
import Input from "../../common/input/Input";
import { useRouter } from "next/navigation";
import { useWalletStore } from "@/src/stores/walletPaymentStore";
import { formatPrice } from "@/src/utils/hooks/formatPrice";

const BuyerWallet = () => {
  const { balance, chargeAmount, setChargeAmount } = useWalletStore();
  const [isModalOpen, setISModalOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    {
      label: "شارژ حساب",
      icon: <FiAlertCircle className="w-4 h-4 text-white" />,
      onClick: () => setISModalOpen(true),
    },
  ];
const handleSetAmount =()=>{
  router.push("/dashboard/buyer/payment");
  setISModalOpen(false)
}
  return (
    <>
      <Modal 
      modalTitle="شارژ کیف پول" modalDescription="مبلغ شارژ را به تومان وارد کنید"
        contentClassName="bg-dark-900"
        mainContent={
          <div>
            <Input
              InputHeight="h-[50px]"
              borderColor="border-white-pure" 
              placeHolder="تومان"
              value={chargeAmount || ""}
              onChange={(e) => setChargeAmount(Number(e.target.value))}
            />

            <button
              className="bg-primary-accent-green w-full mt-4 py-2 rounded-lg"
              onClick={() => handleSetAmount()}
            >
              شارژ
            </button>
          </div>
        }
        onOpenChange={setISModalOpen}
        open={isModalOpen}
      />

      <DropMenu
        trigger={
          <div className="border border-dashed w-full p-3 border-gray-500 flex items-center gap-4 rounded-[18px]">
            <TbCreditCard className="w-[28px] h-[28px] text-white" />
            <div className="flex-col flex" dir="rtl">
              <h2 className="text-[20px] text-white">کیف پول</h2>

              <span className="text-gray-500 text-[14px]">
                موجودی: {formatPrice(balance)} تومان
              </span>
            </div>
          </div>
        }
        items={menuItems}
        side="top"
        align="end"
      />
    </>
  );
};

export default BuyerWallet;
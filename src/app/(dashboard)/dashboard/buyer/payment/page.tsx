"use client";

import Input from "@/src/components/common/input/Input";
import { useWalletStore } from "@/src/stores/walletPaymentStore";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const WalletPayment = () => {
  const { chargeAmount, addToBalance, resetChargeAmount } = useWalletStore();

  const [cardNumber, setCardNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [dynamicPassword, setDynamicPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    setCardNumber(value.replace(/(\d{4})(?=\d)/g, "$1 "));
  };

  const validateForm = () => {
    if (cardNumber.replace(/\s/g, "").length !== 16)
      return "شماره کارت باید ۱۶ رقم باشد.";

    if (cvv2.length < 3) return "CVV2 باید    3 رقم باشد.";

    if (!year || !month) return "تاریخ انقضا الزامی است.";

    if (dynamicPassword.length !== 5 || !/^\d+$/.test(dynamicPassword))
      return "رمز پویا باید ۵ رقم باشد.";

    return true;
  };

  const handlePayment = () => {
    setError(null);

    const validation = validateForm();
    if (validation !== true) {
      setError(validation);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      addToBalance(chargeAmount);
      resetChargeAmount();

      toast.success("کیف پول شما با موفقیت شارژ شد ");

      setLoading(false);
      router.push("/dashboard/buyer");
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center w-full" dir="rtl">
      <div className="bg-dark-600 rounded-2xl shadow-xl w-2/5 overflow-hidden mt-10">
        <div className="bg-primary-accent-green p-6 text-center text-black">
          <h2 className="text-2xl font-bold mb- 2">درگاه پرداخت دلتا</h2>
          <p>مبلغ: {formatPrice(chargeAmount)} تومان</p>
        </div>

        <div className="p-6 space-y-6">
          <Input
            labelText="شماره کارت"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeHolder="XXXX XXXX XXXX XXXX"
            InputHeight="h-[50px]"
            borderColor="border-gray-300"
            textColor="text-gray-300"
            labelTextColor="text-gray-300"
            textSize="md:text-[16px] text-[12px]"
            labelTextSize="text-[16px]"
            tagBgStyle={{ background: "var(--color-dark-600)" }}
          />

          <div className="flex gap-4">
            <Input
              labelText="CVV2"
              value={cvv2}
              onChange={(e) =>
                setCvv2(e.target.value.replace(/\D/g, "").slice(0, 5))
              }
              placeHolder="CVV2"
              InputHeight="h-[50px]"
              borderColor="border-gray-300"
              textColor="text-gray-300"
              labelTextColor="text-gray-300"
              textSize="md:text-[16px] text-[12px]"
              labelTextSize="text-[16px]"
              tagBgStyle={{ background: "var(--color-dark-600)" }}
            />

            <Input
              labelText="ماه"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeHolder="MM"
              InputHeight="h-[50px]"
              borderColor="border-gray-300"
              textColor="text-gray-300"
              labelTextColor="text-gray-300"
              tagBgStyle={{ background: "var(--color-dark-600)" }}
            />

            <Input
              labelText="سال"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeHolder="YY"
              InputHeight="h-[50px]"
              borderColor="border-gray-300"
              textColor="text-gray-300"
              labelTextColor="text-gray-300"
              tagBgStyle={{ background: "var(--color-dark-600)" }}
            />
          </div>

          <Input
            labelText="رمز پویا"
            value={dynamicPassword}
            onChange={(e) =>
              setDynamicPassword(e.target.value.replace(/\D/g, "").slice(0, 5))
            }
            placeHolder="۵ رقم"
            InputHeight="h-[50px]"
            borderColor="border-gray-300"
            textColor="text-gray-300"
            labelTextColor="text-gray-300"
            tagBgStyle={{ background: "var(--color-dark-600)" }}
          />

          {error && (
            <div className="bg-red-500/10 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-black transition cursor-pointer ${
              loading
                ? "bg-gray-500"
                : "bg-primary-accent-green hover:bg-primary-accent-green-transparent-64"
            }`}
          >
            {loading ? "در حال پردازش..." : "پرداخت و شارژ کیف پول"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletPayment;

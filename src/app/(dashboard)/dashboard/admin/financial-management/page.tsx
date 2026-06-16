import FadeIn from "@/src/components/animations/FadeIn";
import PaymentManagementClient from "@/src/components/dashboard/paymentManagementClient/PaymentManagementClient";
import { getAllPayments } from "@/src/utils/sevices/api/admin/payments/getAllPayment/getAllPayment";
import React from "react";

const AdminFinancialPage = async () => {
  const navItems = ["نام کاربر", "مبلغ", "توضیحات", "تاریخ پرداخت", "وضعیت", "عملیات"];
  const res = await getAllPayments();
  const allPayment = res.data || [];
  return (
    <FadeIn>
      <PaymentManagementClient allPayment={allPayment} navItems={navItems} />
    </FadeIn>
  );
};

export default AdminFinancialPage;

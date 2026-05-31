import PaymentManagementClient from "@/src/components/dashboard/paymentManagementClient/PaymentManagementClient";
import { getAllPayments } from "@/src/utils/sevices/api/admin/payments/getAllPayment/getAllPayment";
import React from "react";

const AdminFinancialPage = async () => {
  const navItems = ["نام کاربر", "مبلغ", "توضیحات", "تاریخ پرداخت", "وضعیت"];
  const res = await getAllPayments();
  const allPayment = res.data || [];
  return (
    <PaymentManagementClient allPayment={allPayment} navItems={navItems} />
  );
};

export default AdminFinancialPage;

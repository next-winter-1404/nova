"use server"
import instance from "../../../interseptor";
interface IFinanceSummary  {
    totalAmount?: number;
    totalBookings?: number;
    totalPayments?: number;
    totalPerviousMonthAmount?: number;
    totalCurrentMonthAmount?: number;
  };
export const getSellerFinanceDashboard = async (): Promise<IFinanceSummary> => {
  const response = await instance.get("/api/seller/finance/dashboard");
  return response.data;
};

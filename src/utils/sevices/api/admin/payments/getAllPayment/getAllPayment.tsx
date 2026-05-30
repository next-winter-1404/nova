import { IPaymentResponse } from "@/src/core/types/IPayment"
import instance from "../../../../interseptor"

export const getAllPayments = async():Promise<IPaymentResponse>=>{
const response = await instance.get("/api/admin/payments")
return  response.data
}
export interface IPayment{
    amount: number,
    description : string,
    callbackUrl: string,
    bookingId: number
}
export interface IAllPayments {
    id?: number;
    userId?: number;
    bookingId?:number | null;
    amount?: string;
    description?: string;
    status?: string;
    paymentUrl?: string;
    transactionId?:number | null;
    createdAt?: string;
    updatedAt?: string;
}
export interface IPaymentResponse{
    data?:IAllPayments[]
    totalCount?:number
}
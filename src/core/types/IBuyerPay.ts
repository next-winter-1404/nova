export interface IBuyerPay {
    id : number,
    amount: string,
    description:string,
    status: string,
    createdAt: string,
}

export interface IBuyerPayList {
    payments : IBuyerPay[]
    totalCount? : number
}
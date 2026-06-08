export interface IDiscount {
    id?: number;
    house_id?: number;
    code?: string;
    discount_percentage?: string;
    valid_until?: string;
  }
  export interface IDiscountResponse {
    data?: IDiscount[];
    totalCount?: number;
  }
  
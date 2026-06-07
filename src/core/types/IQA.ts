export interface IHouseQA {
    id?: number;
    houseId?: number;
    userId?: number;
    question?: string;
    answer?: string | null;
    answeredBy?: number | null;
    created_at?: string;
    updated_at?: string;
  }
export interface IHouse {
  title?: string | null;
  price?: number | string | null;
}
export interface ITraveler {
  gender?: string;
  lastName?: string;
  birthDate?: string;
  firstName?: string;
  nationalId?: string;
}

export interface IBooking {
  id?: number;
  user_id?: number;
  houseId?: number;
  reservedDates?: string[];
  traveler_details?: ITraveler[];
  status?: string;
  sharedEmail?: string;
  sharedMobile?: string;
  created_at?: string;
  updated_at?: string;
  house?: IHouse;
}

export interface IBookingResponse {
  data?: IBooking[];
  totalCount?: number;
}

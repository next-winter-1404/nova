export interface IProductCard {
  id?: number;
  title?: string | null;
  address?: string | null;
  photos?: string[] | null;
  rate?: string | null;
  discounted_price?: string | null;
  price?: string | null;
  tags?: string | null;
  last_updated?: string;
  capacity?: number | null;
  location?: string | null;
  categories?: string[] | null;
  rooms?: number | null;
  parking?: number | null;
  bathrooms?: number | null;
  yard_type?: string | null;
  num_comments?: number;
  discount_id?: number | null;
  transaction_type?: string | null;
  sellerId?: number | string;
  sellerName?: string;
  caption?: string | null;
  bookings?: number;
  favoriteId?: number | null;
  isFavorite?: boolean;
  seeMore?: boolean;
  offer?: string;
  buttonText?: string;
  href?: string;
  primaryColor?:string;
  hoverColor?:string
}

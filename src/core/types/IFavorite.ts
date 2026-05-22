
export interface IFavoriteHouse {
    id: number;
    title?: string | null;
    address?: string | null;
    photos?: string[] | null;
    rate?: string | null;
    price?: string | number | null;
  }
  
  export interface IFavorite {
    id: number;           
    user_id: number;
    house_id: number;
    created_at: string;
    updated_at: string;
    house: IFavoriteHouse;
  }
  
  export interface IFavoritesResponse {
    data: IFavorite[];
    totalCount: number;
  }
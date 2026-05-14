import { IProductCard } from "../../core/types/IProductCard";

export const computingDiscount = ({discounted_price,price} : IProductCard): number => {
    const original = Number(price);
    const discounted = Number(discounted_price);
   
    return ((original - discounted) / original) * 100;
  }
import { getSellerHouses } from '@/src/utils/sevices/api/seller/houses/getHouses';
import React, { FC } from 'react'
import SellerEstateManagement from '@/src/components/dashboard/sellerEstateManagement/page';
import { getServerSideCookie } from '@/src/utils/helper/cookies/serverCookie/serverSideCookie';
import FadeIn from '@/src/components/animations/FadeIn';


interface IProps {
  searchParams: Promise<IFilters>;
}
interface IFilters {
  order?: string;
  sort?: string;
  page?: string | number;
  limit?: string | number;
}

const SellerEstatesPage : FC<IProps> = async() => {
  const role = await getServerSideCookie('userRole')
  const result = await getSellerHouses();
  const house = result?.houses || []

  const items = [
    "نام اقامتگاه",
    "قیمت",
    "ادرس",
    "امتیاز",
    "ظرفیت",
    "عملیات"

  ];
  return (
    <FadeIn>
    <div>
      <SellerEstateManagement items = {items} house={house} role = {role}/>
    </div>
    </FadeIn>
  )
}

export default SellerEstatesPage

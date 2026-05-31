import DashboardContentContainer from '@/src/components/common/dashboardcontentcontainer/container';
import ItemNavbar from '@/src/components/common/dashboardItemNavbar/ItemNavbar';
import Input from '@/src/components/common/input/Input';
import ReservationItem from '@/src/components/dashboard/ReservationItem/ReservationItem';
import { getSellerHouses } from '@/src/utils/sevices/api/seller/houses/getHouses';
import Image from 'next/image';
import React, { FC } from 'react'
import Add from "@/src/assets/icons/Add.svg"
import Link from 'next/link';
import SellerEstateManagement from '@/src/components/dashboard/sellerEstateManagement/page';
import { getServerSideCookie } from '@/src/utils/helper/cookies/serverCookie/serverSideCookie';


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
  const role = getServerSideCookie('userRole')
  const result = await getSellerHouses();
  const house = result?.houses || []

  const items = [
    "نام اقامتگاه",
    "قیمت",
    "ادرس",
    "امتیاز",
    "ظرفیت",

  ];
  return (
    <div>
      <SellerEstateManagement items = {items} house={house} role = {role}/>
    </div>
  )
}

export default SellerEstatesPage

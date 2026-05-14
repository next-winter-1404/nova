import { getHouses } from '@/src/utils/sevices/api/houses/getHouses';
import React from 'react'
import HouseCard from '../../common/houseCard/page';

const HouseData = async () => {
    const {houses}:any = await getHouses();
  return (
    <HouseCard houses ={houses}/>
  )  
}

export default HouseData
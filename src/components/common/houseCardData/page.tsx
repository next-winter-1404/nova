import { getHouses } from '@/src/utils/sevices/api/houses/getHouses';
import React from 'react'
import HouseCard from '../houseCard/page';

const HouseData = async () => {
    const {houses}:any = await getHouses();
    console.log("houses1 :", houses)   
  return (
    <HouseCard houses ={houses}/>
  )  
}

export default HouseData
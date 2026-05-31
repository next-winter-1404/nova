import React from 'react'
import { getAllLocation } from '@/src/utils/sevices/api/locations/getAllLocations/getAllLocation';
import { getLocationById } from '@/src/utils/sevices/api/locations/getLocationById/getLocationById';
import { LocationsResponse } from '@/src/core/types/ILocations';
import NeshanMap from './NeshanMap';

const NeshanMapParent = async (id:number) => {
 const getLocation = await getLocationById(id) as LocationsResponse
 const lat  = getLocation.data.map(item => item.lat);
  const lng  = getLocation.data.map(item => item.lng);
  return (
    <div>
      
      <NeshanMap lat={lat} lng={lng}/>
    </div>
  )
}

export default NeshanMapParent

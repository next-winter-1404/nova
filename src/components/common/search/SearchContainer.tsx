"use server"
import ListingType from "./ListingType";
import SearchWrapper from "./SearchWrapper";
// import { cacheLife } from "next/cache";
import { getAllLocation } from '@/src/utils/sevices/api/locations/getAllLocations/getAllLocation';



const SearchContainer = async() => {
  // 'use cache'
  // cacheLife('hours')
  const location = await getAllLocation();
  const data = location.data

  const citiesOptions = Array.isArray(data) 
    ? data.map((item) => ({
        value: String(item.id),
        label: item.areaName || `مکان ${item.id}`,
      }))
    : [];


  // console.log(data)
  return (
    <div className='w-full'>
      <SearchWrapper cityOptions={citiesOptions}/>
    </div>
  )
}

export default SearchContainer;

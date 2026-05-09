"use server"
import axios from "axios"
import ListingType from "./ListingType";
import SearchWrapper from "./SearchWrapper";
// import { getAllLocation } from '@/src/utils/sevices/api/locations/getAllLocations/getAllLocation';


const SearchContainer = async() => {
  // const location = await getAllLocation();
  // console.log(location )
  return (
    <form className='flex flex-col gap-4 w-[86%] h-30'>
      <ListingType />
          <SearchWrapper />
    </form>
  )
}

export default SearchContainer;

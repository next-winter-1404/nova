"use server";
import GlareHover from "../../animations/GlareHover/GlareHover";
import ListingType from "./ListingType";
import SearchWrapper from "./SearchWrapper";
// import { cacheLife } from "next/cache";
import { getAllLocation } from "@/src/utils/sevices/api/locations/getAllLocations/getAllLocation";

const SearchContainer = async () => {
  // 'use cache'
  // cacheLife('hours')
  const location = await getAllLocation();
  const data = location.data;

  const citiesOptions = Array.isArray(data)
    ? data.map((item) => ({
        value: String(item.id),
        label: item.areaName || `مکان ${item.id}`,
      }))
    : [];

  // console.log(data)
  return (
    <div className="w-full">
      {/* <GlareHover
        glareColor="var(--color-gray-300)"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      > */}
        <SearchWrapper cityOptions={citiesOptions} />
      {/* </GlareHover> */}
    </div>
  );
};

export default SearchContainer;

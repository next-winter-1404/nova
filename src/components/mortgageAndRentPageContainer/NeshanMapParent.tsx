"use client";
import { getLocationById } from "@/src/utils/sevices/api/locations/getLocationById/getLocationById";
import { useQuery } from "@tanstack/react-query";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";

const NeshanMapParent = ({ location }: { location: string }) => {
console.log(location);

  return (
    <div>
      
      <MapComponent
        options={{
          mapKey: process.env.NEXT_PUBLIC_MAP_KEY,
          mapType: MapTypes.neshanRasterNight,

          zoom: 15,
        }}
      />
    </div>
  );
};

export default NeshanMapParent;

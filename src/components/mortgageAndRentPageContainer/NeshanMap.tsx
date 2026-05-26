import React from 'react'
import { MapComponent, MapTypes } from '@neshan-maps-platform/mapbox-gl-react';

const NeshanMap = ({ lat, lng }: { lat: string; lng: sring }) => {
  return (
    <MapComponent options={{mapKey: "process.env.NEXT_PUBLIC_MAP_KEY", mapType: MapTypes.neshanRasterNight}}/>
  )
}

export default NeshanMap

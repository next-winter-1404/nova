"use client";

import { useEffect } from "react";
import "@neshan-maps-platform/leaflet/dist/leaflet.css";

export default function NeshanMap() {
  useEffect(() => {
    let map: any;
    let marker: any = null;

    const initMap = async () => {
      const L = (await import("@neshan-maps-platform/leaflet")).default;

      map = new L.Map("map", {
        key: process.env.NEXT_PUBLIC_NESHAN_MAP_KEY!,
        maptype: "dreamy",
        center: [35.699756, 51.338076],
        zoom: 14,
      });

      const getCity = async (lat: number, lng: number) => {
        try {
          const res = await fetch(
            `https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`,
            {
              headers: {
                "Api-Key": process.env.NEXT_PUBLIC_NESHAN_SERVICE_KEY!,
              },
            }
          );

          const data = await res.json();

          const city =
            data?.city ||
            data?.district ||
            data?.region ||
            data?.formatted_address ||
            "unknown";

          console.log("🏙️ CITY:", city);
          return city;
        } catch {
          return "error";
        }
      };

      map.on("click", async (e: any) => {
        const { lat, lng } = e.latlng;

        if (marker) {
          map.removeLayer(marker);
        }

        marker = L.marker([lat, lng], {
          draggable: true,
        }).addTo(map);

        await getCity(lat, lng);

        marker.on("dragend", async (event: any) => {
          const pos = event.target.getLatLng();
          await getCity(pos.lat, pos.lng);
        });
      });
    };

    initMap();
  }, []);

  return <div id="map" className="w-full h-full rounded-[40px]" />;
}

"use client";

import { useEffect, useRef } from "react";
import "@neshan-maps-platform/leaflet/dist/leaflet.css";

interface HouseMapProps {
  address: string;
}

export default function ShowPlace({ address }: HouseMapProps) {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const LRef = useRef<any>(null);

  useEffect(() => {
    const initMap = async () => {
      if (mapRef.current) return;

      const L = (await import("@neshan-maps-platform/leaflet")).default;
      LRef.current = L;

      mapRef.current = new L.Map("map", {
        key: process.env.NEXT_PUBLIC_NESHAN_MAP_KEY!,
        maptype: "dreamy",
        center: [35.699756, 51.338076],
        zoom: 10,
      });
    };

    initMap();
  }, []);

  useEffect(() => {
    const search = async () => {
      if (!address || !mapRef.current || !LRef.current) return;

      try {
        const res = await fetch(
          `https://api.neshan.org/v1/search?term=${encodeURIComponent(
            address
          )}`,
          {
            headers: {
              "Api-Key": process.env.NEXT_PUBLIC_NESHAN_SERVICE_KEY!,
            },
          }
        );

        const data = await res.json();

        console.log("NESHA RESPONSE:", data);

        if (!data?.items?.length) {
          console.log("❌ NO RESULTS FROM API");
          return;
        }

        const item = data.items.find(
          (i: any) => i?.location?.x && i?.location?.y
        );

        if (!item) {
          console.log("❌ NO VALID LOCATION");
          return;
        }

        const lat = item.location.y;
        const lng = item.location.x;

        console.log("📍 COORDS:", lat, lng);

        mapRef.current.setView([lat, lng], 14);

        if (markerRef.current) {
          mapRef.current.removeLayer(markerRef.current);
        }

        markerRef.current = LRef.current
          .marker([lat, lng])
          .addTo(mapRef.current);
      } catch (err) {
        console.log("❌ ERROR:", err);
      }
    };

    search();
  }, [address]);

  return <div id="map" className="w-full h-full rounded-[40px]" />;
}

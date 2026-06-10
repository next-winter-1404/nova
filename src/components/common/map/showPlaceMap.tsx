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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!containerRef.current || mapRef.current) return;

      const L = (await import("@neshan-maps-platform/leaflet")).default;
      LRef.current = L;

      const container = containerRef.current as any;

      if (container._leaflet_id) {
        container._leaflet_id = null;
      }

      mapRef.current = new L.Map(container, {
        key: process.env.NEXT_PUBLIC_NESHAN_MAP_KEY!,
        maptype: "dreamy",
        center: [35.699756, 51.338076],
        zoom: 10,
      });
    };

    initMap();

    return () => {
      if (mapRef.current) {
        try {
          mapRef.current.off();
          mapRef.current.remove();
        } catch {}
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const search = async () => {
      if (!address || !mapRef.current || !LRef.current) return;

      try {
        const res = await fetch(
          `https://api.neshan.org/v1/search?term=${encodeURIComponent(address)}`,
          {
            headers: {
              "Api-Key": process.env.NEXT_PUBLIC_NESHAN_SERVICE_KEY!,
            },
          }
        );

        const data = await res.json();

        if (!data?.items?.length) return;

        const item = data.items.find(
          (i: any) => i?.location?.x && i?.location?.y
        );

        if (!item) return;

        const lat = item.location.y;
        const lng = item.location.x;

        mapRef.current.setView([lat, lng], 14);

        if (markerRef.current) {
          mapRef.current.removeLayer(markerRef.current);
        }

        markerRef.current = LRef.current
          .marker([lat, lng])
          .addTo(mapRef.current);
      } catch (err) {
        console.log(err);
      }
    };

    search();
  }, [address]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-[40px]"
    />
  );
}
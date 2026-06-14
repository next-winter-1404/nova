"use client";

import { useEffect, useRef } from "react";
import "@neshan-maps-platform/leaflet/dist/leaflet.css";

interface Props {
  lat: number;
  lng: number;
}

export default function ShowPlaceByCoords({ lat, lng }: Props) {
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
        center: [lat, lng],
        zoom: 15,
      });

      markerRef.current = L.marker([lat, lng]).addTo(mapRef.current);
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
  }, [lat, lng]);

  return <div ref={containerRef} className="w-full h-full rounded-xl" />;
}
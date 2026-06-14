"use client";

import { useEffect, useRef } from "react";
import "@neshan-maps-platform/leaflet/dist/leaflet.css";

interface LocationPickerMapProps {
  onLocationChange: (lat: number, lng: number) => void;
  defaultCenter?: [number, number];
  defaultZoom?: number;
}

export default function LocationPickerMap({
  onLocationChange,
  defaultCenter = [35.699756, 51.338076],
  defaultZoom = 12,
}: LocationPickerMapProps) {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const LRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;

    const initMap = async () => {
      if (!containerRef.current) return;

      const L = (await import("@neshan-maps-platform/leaflet")).default;
      LRef.current = L;

      const container = containerRef.current as any;

      if (container._leaflet_id) {
        container._leaflet_id = null;
      }

      map = new L.Map(container, {
        key: process.env.NEXT_PUBLIC_NESHAN_MAP_KEY!,
        maptype: "dreamy",
        center: defaultCenter,
        zoom: defaultZoom,
      });

      mapRef.current = map;

      map.on("click", (e: any) => {
        const { lat, lng } = e.latlng;

        // remove old marker
        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        // add marker
        markerRef.current = L.marker([lat, lng], {
          draggable: true,
        }).addTo(map);

        onLocationChange(lat, lng);

        // drag event
        markerRef.current.on("dragend", (event: any) => {
          const pos = event.target.getLatLng();
          onLocationChange(pos.lat, pos.lng);
        });
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

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] rounded-[20px]"
    />
  );
}
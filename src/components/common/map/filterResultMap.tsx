"use client";

import { useEffect, useRef } from "react";
import "@neshan-maps-platform/leaflet/dist/leaflet.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterNeshanMap() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mapRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    let map: any;

    const initMap = async () => {
      if (!containerRef.current) return;

      const L = (await import("@neshan-maps-platform/leaflet")).default;
      const container = containerRef.current as any;

      if (container._leaflet_id) {
        container._leaflet_id = null;
      }

      if (mapRef.current) {
        try {
          mapRef.current.off();
          mapRef.current.remove();
        } catch {}
        mapRef.current = null;
      }
      container.innerHTML = "";

      map = new L.Map(container, {
        key: process.env.NEXT_PUBLIC_NESHAN_MAP_KEY!,
        maptype: "dreamy",
        center: [35.699756, 51.338076],
        zoom: 14,
      });

      mapRef.current = map;

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

          const params = new URLSearchParams(searchParams.toString());
          params.set("address", city);

          router.push(`?${params.toString()}`, {
            scroll: false,
          });
        } catch (err) {
          console.error(err);
        }
      };

      map.on("click", async (e: any) => {
        const { lat, lng } = e.latlng;

        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        markerRef.current = L.marker([lat, lng], {
          draggable: true,
        }).addTo(map);

        await getCity(lat, lng);

        markerRef.current.on("dragend", async (event: any) => {
          const pos = event.target.getLatLng();
          await getCity(pos.lat, pos.lng);
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

      const container = containerRef.current as any;
      if (container) {
        container._leaflet_id = null;
        container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full rounded-[40px]" />;
}
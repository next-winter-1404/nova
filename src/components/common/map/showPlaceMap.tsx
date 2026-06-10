// "use client";

// import { useEffect, useRef } from "react";
// import "@neshan-maps-platform/leaflet/dist/leaflet.css";

// interface HouseMapProps {
//   address: string;
// }

// export default function ShowPlace({ address }: HouseMapProps) {
//   const mapRef = useRef<any>(null);
//   const markerRef = useRef<any>(null);
//   const LRef = useRef<any>(null);

//   // 🗺️ init map فقط یک بار
//   useEffect(() => {
//     const initMap = async () => {
//       const L = (await import("@neshan-maps-platform/leaflet")).default;
//       LRef.current = L;

//       mapRef.current = new L.Map("map", {
//         key: process.env.NEXT_PUBLIC_NESHAN_MAP_KEY!,
//         maptype: "dreamy",
//         center: [35.699756, 51.338076],
//         zoom: 10,
//       });
//     };

//     initMap();
//   }, []);

//   // 📍 وقتی address تغییر کرد
//   useEffect(() => {
//     console.log("🔥 EFFECT TRIGGERED:", address);
  
//     const search = async () => {
//       if (!address) {
//         console.log("❌ no address");
//         return;
//       }
  
//       console.log("📡 FETCH START");
  
//       const res = await fetch(
//         `https://api.neshan.org/v1/search?term=${encodeURIComponent(address)}`,
//         {
//           headers: {
//             "Api-Key": process.env.NEXT_PUBLIC_NESHAN_SERVICE_KEY!,
//           },
//         }
//       );
  
//       console.log("📶 STATUS:", res.status);
  
//       const data = await res.json();
//       console.log("📶 STATUS:", res.status);
//       console.log("📦 RAW RESPONSE:", data);
//       console.log("📦 ITEMS:", data?.items);
//       console.log("📦 FULL DATA:", data);
//     };
  
//     search();
//   }, [address]);

//   return <div id="map" className="w-full h-full rounded-[40px]" />;
// }
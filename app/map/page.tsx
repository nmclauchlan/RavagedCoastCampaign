"use client";

import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Layout from "../(dashboard)/layout";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const ImageOverlay = dynamic(
  () => import("react-leaflet").then((mod) => mod.ImageOverlay),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MapPage() {
  const bounds: [[number, number], [number, number]] = [
    [-150, -350],
    [150, 150],
  ];

  const aspectRatio = 1350 / 2070;

  // data‐driven marker definitions (use real coords for each)
  const markers = [
    {
      position: [10, -200] as LatLngExpression,
      title: "Battle of the Burning Plains",
      slug: "battle-of-the-burning-plains",
      armies: "Stormcast Eternals vs Orruk Warclans",
      winner: "Stormcast Eternals",
    },
    {
      position: [50, -50] as LatLngExpression,
      title: "Siege of the Black Fortress",
      slug: "siege-of-the-black-fortress",
      armies: "Soulblight Gravelords vs Lumineth Realm-lords",
      winner: "Lumineth Realm-lords",
    },
    {
      position: [0, -100] as LatLngExpression,
      title: "Clash at the Shattered Coast",
      slug: "clash-at-the-shattered-coast",
      armies: "Fyreslayers vs Idoneth Deepkin",
      winner: "Idoneth Deepkin",
    },
  ];

  return (
    <Layout>
      <main className="w-screen h-screen bg-stone-800">
        <div className="w-full h-full">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Campaign Map
          </h1>
          <MapContainer
            center={[0, -100] as LatLngExpression}
            zoom={1.5}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <ImageOverlay
              url="/assets/images/Great_Parch_Map_06.png"
              bounds={bounds}
            />
            {markers.map((m, idx) => (
              <Marker key={idx} position={m.position}>
                <Popup>
                  <div>
                    <h3>Battle Report: {m.title}</h3>
                  </div>
                  <div>
                    <a href={`/battle-reports#${m.slug}`}>{m.armies}</a>
                  </div>
                  <div>{m.winner}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>
    </Layout>
  );
}

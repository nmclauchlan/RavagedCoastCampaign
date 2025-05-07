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
            <Marker position={[0, -100] as LatLngExpression}>
              <Popup>
                <div>
                  <h3> Battle Report</h3>
                </div>
                <div>Stormcast vs Skaven</div>
                <div>Stormcast Victory (3 Emberstones)</div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </Layout>
  );
}

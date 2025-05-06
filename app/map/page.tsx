"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

// Dynamically import MapContainer and ImageOverlay with SSR disabled
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });

export default function MapPage() {
  const bounds: [[number, number], [number, number]] = [
    [0, 0], // Top-left corner
    [1350, 2070], // Bottom-right corner (match image dimensions: height x width)
  ];

  const aspectRatio = 1350 / 2070; // Height divided by width

  return (
    <main className="min-h-screen bg-stone-800 flex items-center justify-center">
      <div
        className="w-full"
        style={{
          height: `calc(100vw * ${aspectRatio})`, // Dynamically calculate height
          maxHeight: '80vh', // Limit height to 80% of the viewport height
          minHeight: '400px', // Ensure a minimum height
        }}
      >
        <h1 className="text-4xl font-bold text-center text-white mb-4">Campaign Map</h1>
        <MapContainer
          center={[675, 1035]} // Center of the map (half of height and width)
          zoom={0} // Adjust zoom level to fit the image
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }} // Ensure the map fills the container
        >
          <ImageOverlay
            url="/assets/images/Great_Parch_Map_06.png" // Ensure this path is correct
            bounds={bounds}
          />
        </MapContainer>
      </div>
    </main>
  );
}

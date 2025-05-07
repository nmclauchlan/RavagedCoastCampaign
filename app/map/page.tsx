"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function MapPage() {
  const bounds: [[number, number], [number, number]] = [
    [-150, -350],
    [150, 150],
  ];

  const aspectRatio = 1350 / 2070;

  return (
    <main className="min-h-screen bg-stone-800 flex items-center justify-center">
      <div
        className="w-full"
        style={{
          height: `calc(100vw * ${aspectRatio})`,
          maxHeight: '90vh',
          minHeight: '400px',
        }}
      >
        <h1 className="text-4xl font-bold text-center text-white mb-4">Campaign Map</h1>
        <MapContainer
          center={[0, -100] as LatLngExpression}
          zoom={1.5}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <ImageOverlay
            url="/assets/images/Great_Parch_Map_06.png"
            bounds={bounds}
          />
          <Marker position={[0, -100] as LatLngExpression}>
            <Popup>
              <div><h3>Age of Sigmar Battle Report</h3></div>
              <div>Stormcast vs Skaven</div>
              <div>Stormcast Victory (3 Emberstones)</div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
}

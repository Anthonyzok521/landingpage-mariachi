'use client';
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Locations } from '~/shared/data/pages/locations';

export default function ApiMap() {
    return <div>
        <MapContainer bounds={[[4.708769482288961, -74.0738950724111]]} style={{ height: '400px', zIndex: 1, borderRadius: '8px' }}>
            <TileLayer

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            {Locations.map((l, index) =>
                <Marker key={`marker-${index}`} position={[l[1].center.lat, l[1].center.lng]} >
                    <Popup key={`popup-${index}`}>
                        {l[0]}
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    </div>
}
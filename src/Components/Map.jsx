import React, { useState } from 'react';
import './style.scss';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'

const Map = () => {
    // function LocationMarker() {
    //     const [position, setPosition] = useState(null)
    //     const map = useMapEvents({
    //         click() {
    //             map.locate()
    //         },
    //         locationfound(e) {
    //             setPosition(e.latlng)
    //             map.flyTo(e.latlng, map.getZoom())
    //         },
    //     })

    //     return position === null ? null : (
    //         <Marker position={position}>
    //             <Popup>You are here</Popup>
    //         </Marker>
    //     )
    // }

    const position = [27.96944, 77.49544];
    return (
        <div>
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>You are here</Popup>
                </Marker>
            </MapContainer>,
        </div>
    )
}

export default Map;
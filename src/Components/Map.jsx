import React from 'react';
import './style.scss';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Test = ({ pos }) => {
    const map = useMap();
    if (pos) map.flyTo(pos, 13, { duration: 3 });

    return pos ? (
        <Marker
            draggable
            position={pos}
        >
            <Popup>You are here</Popup>
        </Marker>
    ) : null;
}
const Map = (props) => {

    let position = []

    if (props.latitudeCoords && props.longitudeCoords) {
        const latitude = props.latitudeCoords;
        const longitude = props.longitudeCoords;
        position = [latitude, longitude];
    }
    else {
        position = [51.505, -0.09];
    }

    return (
        <>
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Test pos={position} />
                {/* <Marker position={position}>
                    <Popup>You are here</Popup>
                </Marker> */}
            </MapContainer>,
        </>
    )
}

export default Map;
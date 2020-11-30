import React from 'react';
import * as API from './API';
import { MapContainer, Marker, Popup, TileLayer, L } from 'react-leaflet';
import { Icon } from 'leaflet';

class MapDiv extends React.Component {
    render() {
        const locations = this.props.data.map((meteorite) => {
            return [
                parseFloat(meteorite.geolocation.latitude),
                parseFloat(meteorite.geolocation.longitude),
            ];
        });

        const position = locations[0] || [0, 0];
        return (
            <div id='mapid'>
                <MapContainer
                    key={position[0]}
                    center={position}
                    zoom={1}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />

                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>
        );
    }
}

export default MapDiv;

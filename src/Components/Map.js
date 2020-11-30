import React from 'react';
import * as API from './API';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

class Map extends React.Component {
  locations = this.props.data.map((meteorite) => {
    return [meteorite.geolocation.latitude, meteorite.geolocation.longitude];
  });

  position = this.locations[0];

  map = L.map('mapid').setView(this.position, 13);

  render() {
    return (
      <div id='mapid'>
        {this.map}
        {/* <MapContainer center={this.position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={this.position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
      </div>
    );
  }
}

export default Map;

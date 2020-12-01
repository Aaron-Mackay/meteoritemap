import React from 'react';
import * as API from './API';
import { MapContainer, Marker, Popup, TileLayer, L } from 'react-leaflet';
import { Icon } from 'leaflet';

class MapDiv extends React.Component {
  pinGenerator = (locations) => {
    let locationsMarkers = [];
    for (let i = 0; i < locations.length; i++) {
      locationsMarkers.push(
        <Marker key={this.props.data[i].id} position={locations[i]}>
          <Popup>
            `Name: {this.props.data[i].name}` <br /> Mass: `
            {this.props.data[i].mass}` <br /> Class: `
            {this.props.data[i].recclass}`
          </Popup>
        </Marker>
      );
    }
    return locationsMarkers;
  };
  render() {
    const locations = this.props.data.map((meteorite) => {
      return [
        parseFloat(meteorite.geolocation.latitude),
        parseFloat(meteorite.geolocation.longitude),
      ];
    });
    console.log(locations);

    return (
      <div id='mapid'>
        <MapContainer
          key={locations[0] || 'chips'}
          center={locations[0] || [0.0, 0.0]}
          zoom={1}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {this.pinGenerator(locations)}
        </MapContainer>
      </div>
    );
  }
}

export default MapDiv;

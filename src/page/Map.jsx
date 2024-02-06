import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

class MapComponent extends React.Component {
  state = {
    lat: 50.2700,
    lng: 30.3125,
    zoom: 10
  };

  render() {
    var center = [this.state.lat, this.state.lng];

    return (
        <MapContainer style={{ width: '100%', height: '400px' }} zoom={this.state.zoom} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}

export default MapComponent;

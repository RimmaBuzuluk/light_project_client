import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

// указываем путь к файлам marker
L.Icon.Default.imagePath = 'https://w7.pngwing.com/pngs/1003/887/png-transparent-location-heroicons-ui-icon-thumbnail.png';

class MapComponent extends React.Component {
	state = {
		lat: 50.0021,
		lng: 36.1345,
		zoom: 10,
	};

	render() {
		var center = [this.state.lat, this.state.lng];

		return (
			<MapContainer style={{ width: '100%', height: '80%', top: '200px' }} zoom={this.state.zoom} center={center}>
				<TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={center}>
					<Popup>текст</Popup>
				</Marker>
			</MapContainer>
		);
	}
}

export default MapComponent;

// 50.442186, 30.547745

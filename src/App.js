import React, { Component } from 'react';
import logo from './logo.svg';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import './App.css';

const mapConfig = {
  center: [43.6036786, 1.4328012],
  zoom: 14
};

const markers = [
  {
    name: 'Wild Code School Toulouse',
    latlng: [43.599898, 1.4409593]
  }, {
    name: 'Place du Capitole',
    latlng: [43.6044292, 1.4416234]
  }, {
    name: 'Jardin Compans Caffarelli',
    latlng: [43.6110079, 1.4311292]
  }
];

// const data = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       id: "01",
//       properties: { name: "Alabama", density: 94.65 },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [43.6044292, 1.4416234]
//           ]
//         ]
//       }
//     }
//   ]
// }

class App extends Component {
  getStyle(feature) {
    return {
        fillColor: '#ece7f2',
        weight: 2,
        opacity: 1,
        color: 'blue',
        dashArray: '3',
        fillOpacity: 0.7
    }
  }
  
  render() {
    // create an array with marker components
    const LeafletMarkers = markers.map(marker => (
      <Marker position={marker.latlng} key={`marker_${marker.name}`}>
        <Popup>
          <span>{marker.name}</span>
        </Popup>
      </Marker>
    ));
    
    return (
      <div className="App">
        <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {LeafletMarkers}
          {/* You can now try to find Alabama on a Map to see how it looks like now with GeoJSON*/}
          {/* <GeoJSON data={data} style={this.getStyle} /> */}
        </Map>
      </div>
    );
  }
}

export default App;

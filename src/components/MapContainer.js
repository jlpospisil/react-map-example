import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Polygon, HeatMap} from 'google-maps-react';

const LoadingContainer = () => <div>Fancy loading container</div>;
const polygonProps = {
  strokeColor: '#0000ff',
  strokeOpacity: 0.5,
  strokeWeight: 2,
  fillColor: '#0000ff',
  fillOpacity: 0.2,
};

class MapContainer extends Component {
  render() {
    const {google} = this.props;

    const polygons = [
      [
        {lat: 41.774, lng: -96.190},
        {lat: 34.466, lng: -82.118},
        {lat: 48.321, lng: -80.757},
        {lat: 41.774, lng: -96.190},
      ],
    ];

    const heatMapGradient = [
      'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ];

    const heatMapPositions = [
      { lat: 37.782551, lng: -122.445368 },
      { lat: 37.782745, lng: -122.444586 },
      { lat: 37.782842, lng: -122.443688 },
      { lat: 37.782919, lng: -122.442815 },
      { lat: 37.782992, lng: -122.442112 },
      { lat: 37.783100, lng: -122.441461 },
      { lat: 37.783206, lng: -122.440829 },
      { lat: 37.783273, lng: -122.440324 },
      { lat: 37.783316, lng: -122.440023 },
      { lat: 37.783357, lng: -122.439794 },
      { lat: 37.783371, lng: -122.439687 },
      { lat: 37.783368, lng: -122.439666 },
      { lat: 37.783383, lng: -122.439594 },
      { lat: 37.783508, lng: -122.439525 },
      { lat: 37.783842, lng: -122.439591 },
      { lat: 37.784147, lng: -122.439668 }
    ];

    return (
      <Map google={google}
        initialCenter={{
         lat: 53,
         lng: -92,
        }}
        zoom={4}
      >
        {polygons.map((polygon) => <Polygon paths={polygon} {...polygonProps} /> )}

        <HeatMap
          gradient={heatMapGradient}
          positions={heatMapPositions}
          opacity={0.3}
          radius={20}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
  libraries: ['places', 'visualization'],
  LoadingContainer,
})(MapContainer)
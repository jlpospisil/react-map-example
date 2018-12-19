import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {GoogleApiWrapper, Map as GoogleMaps, Polygon, HeatMap, Marker} from 'google-maps-react';

const LoadingContainer = () => <div>Fancy loading container</div>;

class MapContainer extends Component {
  render() {
    const {google, include, polygons, heatMaps, markers} = this.props;

    // Create a 1 dimensional array of the included elements to be added to the map
    const elements = include.map((items) => {
      switch (items.toLowerCase()) {
        case 'polygons':
          return polygons.map((polygon, index) => {
            const {key=`polygon-${index}`, points=[], options={}} = polygon;
            return <Polygon key={key} paths={points} {...options} />
          });

        case 'heatmaps':
          return heatMaps.map((heatMap, index) => {
            const {key=`heatMap-${index}`, points=[], options={}} = heatMap;
            return <HeatMap key={key} positions={points} {...options} />
          });

        case 'markers':
          return markers.map((marker, index) => {
            const {key=`marker-${index}`, position={}, options={}} = marker;
            return <Marker key={key} position={position} {...options} />
          });

        default:
          return [];
      }
    }).flat();

    return (
      <GoogleMaps google={google}
        initialCenter={{
          lat: 38,
          lng: -99,
        }}
        zoom={5}
      >
        { elements.map(element => element) }
      </GoogleMaps>
    );
  }
}

MapContainer.propTypes = {
  include: PropTypes.array,
  polygons: PropTypes.array,
  heatMaps: PropTypes.array,
  markers: PropTypes.array,
};

MapContainer.defaultProps = {
  include: ['polygons', 'heatMaps', 'markers'],
  polygons: [],
  heatMaps: [],
  markers: [],
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
  libraries: ['places', 'visualization'],
  LoadingContainer,
})(MapContainer)
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {GoogleApiWrapper, Map as GoogleMaps, Polygon, HeatMap} from 'google-maps-react';

const LoadingContainer = () => <div>Fancy loading container</div>;

class MapContainer extends Component {
  render() {
    const {props} = this;
    const {google, include} = props;

    // Create a 1 dimensional array of the included elements to be added to the map
    const elements = include.map((items) => {
      let Element, prop, pointsAttr;

      switch (items.toLowerCase()) {
        case 'polygons':
          [Element, prop, pointsAttr] = [Polygon, 'polygons', 'paths'];
          break;
        case 'heatmaps':
          [Element, prop, pointsAttr] = [HeatMap, 'heatMaps', 'positions'];
          break;
        default:
      }

      if (Element && prop && Array.isArray(props[prop]) && props[prop].length > 0) {
        return props[prop].map((item, index) => {
          const {key=`${prop}-${index}`, points=[], options={}} = item;
          return <Element key={key} {...{[pointsAttr]: points, ...options}} />
        })
      }

      return []
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
};

MapContainer.defaultProps = {
  include: ['polygons', 'heatMaps'],
  polygons: [],
  heatMaps: [],
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY,
  libraries: ['places', 'visualization'],
  LoadingContainer,
})(MapContainer)
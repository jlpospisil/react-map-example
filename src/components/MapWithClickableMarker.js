import React, {Component} from 'react'
import Map from './Map';

const markerProps = {
  onClick: () => { console.log('marker clicked') },
};

export default class MapWithPolygon extends Component {
  render() {
    return <Map markers={[
      {
        position: {lat: 41.2565, lng: -95.9345},
        options: {
          name: 'Omaha',
          ...markerProps,
        },
      }
    ]} />;
  }
}
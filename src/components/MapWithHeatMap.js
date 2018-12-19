import React, {Component} from 'react'
import Map from './Map';

const gradient = [
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

const points = [
  { lat: 41.252551, lng: -95.945368 },
  { lat: 41.252745, lng: -95.944586 },
  { lat: 41.252842, lng: -95.943688 },
  { lat: 41.252919, lng: -95.942815 },
  { lat: 41.252992, lng: -95.942112 },
  { lat: 41.253100, lng: -95.941461 },
  { lat: 41.253206, lng: -95.940829 },
  { lat: 41.253273, lng: -95.940324 },
  { lat: 41.253316, lng: -95.940023 },
  { lat: 41.253357, lng: -95.939794 },
  { lat: 41.253371, lng: -95.939687 },
  { lat: 41.253368, lng: -95.939666 },
  { lat: 41.253383, lng: -95.939594 },
  { lat: 41.253508, lng: -95.939525 },
  { lat: 41.253842, lng: -95.939591 },
  { lat: 41.254147, lng: -95.939668 },
];

export default class MapWithHeatMap extends Component {
  render() {
    return <Map heatMaps={[
      {
        points,
        options: {
          gradient,
          radius: 20,
          opacity: 0.3,
        },
      }
    ]} />;
  }
}
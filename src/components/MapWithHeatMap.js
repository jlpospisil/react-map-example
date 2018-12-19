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
  { lat: 40.782551, lng: -96.445368 },
  { lat: 40.782745, lng: -96.444586 },
  { lat: 40.782842, lng: -96.443688 },
  { lat: 40.782919, lng: -96.442815 },
  { lat: 40.782992, lng: -96.442112 },
  { lat: 40.783100, lng: -96.441461 },
  { lat: 40.783206, lng: -96.440829 },
  { lat: 40.783273, lng: -96.440324 },
  { lat: 40.783316, lng: -96.440023 },
  { lat: 40.783357, lng: -96.439794 },
  { lat: 40.783371, lng: -96.439687 },
  { lat: 40.783368, lng: -96.439666 },
  { lat: 40.783383, lng: -96.439594 },
  { lat: 40.783508, lng: -96.439525 },
  { lat: 40.783842, lng: -96.439591 },
  { lat: 40.784147, lng: -96.439668 },
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
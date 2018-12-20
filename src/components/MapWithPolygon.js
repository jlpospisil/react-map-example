import React, {Component} from 'react'
import {Polygon} from 'google-maps-react';
import Map from './Map';

const polygonProps = {
  strokeColor: '#0000ff',
  strokeOpacity: 0.5,
  strokeWeight: 2,
  fillColor: '#0000ff',
  fillOpacity: 0.2,
};

const paths = [
  [
    {lat: 42.9986, lng: -104.054},
    {lat: 41.0027, lng: -104.054},
    {lat: 41.0006, lng: -102.050},
    {lat: 40.0034, lng: -102.049},
    {lat: 39.9992, lng: -95.3090},
    {lat: 40.2397, lng: -95.4800},
    {lat: 40.3130, lng: -95.6400},
    {lat: 40.4302, lng: -95.6680},
    {lat: 40.5900, lng: -95.7000},
    {lat: 40.6827, lng: -95.8540},
    {lat: 40.8138, lng: -95.8440},
    {lat: 40.9654, lng: -95.8320},
    {lat: 41.0794, lng: -95.8660},
    {lat: 41.2923, lng: -95.8720},
    {lat: 41.4458, lng: -95.9350},
    {lat: 41.5261, lng: -95.9990},
    {lat: 41.6380, lng: -96.0980},
    {lat: 41.7703, lng: -96.0680},
    {lat: 41.8368, lng: -96.1080},
    {lat: 41.9677, lng: -96.1370},
    {lat: 42.0330, lng: -96.2400},
    {lat: 42.1155, lng: -96.2740},
    {lat: 42.2021, lng: -96.3580},
    {lat: 42.2448, lng: -96.3280},
    {lat: 42.3890, lng: -96.4180},
    {lat: 42.4731, lng: -96.4030},
    {lat: 42.5369, lng: -96.6350},
    {lat: 42.6057, lng: -96.7090},
    {lat: 42.6532, lng: -96.6890},
    {lat: 42.6602, lng: -96.7620},
    {lat: 42.7147, lng: -96.8300},
    {lat: 42.7571, lng: -96.9760},
    {lat: 42.8085, lng: -97.2020},
    {lat: 42.8458, lng: -97.2200},
    {lat: 42.8629, lng: -97.3970},
    {lat: 42.8427, lng: -97.5130},
    {lat: 42.8488, lng: -97.6140},
    {lat: 42.8659, lng: -97.8450},
    {lat: 42.7470, lng: -97.9900},
    {lat: 42.8337, lng: -98.1400},
    {lat: 42.9293, lng: -98.4480},
    {lat: 42.9966, lng: -98.5000},
    {lat: 43.0006, lng: -104.054}
  ],
];

export default class MapWithPolygon extends Component {
  render() {
    const {google} = this.props;

    return (
      <Map google={google}>
        <Polygon paths={paths} {...polygonProps} />
      </Map>
    )
  }
}
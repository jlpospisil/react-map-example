import React, {Component} from 'react'
import {Map as GoogleMaps} from 'google-maps-react';

export default class Map extends Component {
  render() {
    const {children, google} = this.props;

    return (
      <GoogleMaps google={google}
        initialCenter={{
          lat: 38,
          lng: -99,
        }}
        zoom={4}
      >
        { children }
      </GoogleMaps>
    )
  }
}
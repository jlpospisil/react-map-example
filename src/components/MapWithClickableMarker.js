import React, {Component} from 'react'
import Map from './Map';
import {Marker, InfoWindow} from "google-maps-react";


export default class MapWithPolygon extends Component {
  state = {
    showInfoWindow: false,
    activeMarker: null,
  };

  markerClicked(props, marker) {
    this.setState({
      showInfoWindow: true,
      activeMarker: marker,
    });
  }

  render() {
    const {google} = this.props;
    const {showInfoWindow, activeMarker} = this.state;

    return (
      <Map google={google}>
        <Marker name="Omaha"
          position={{ lat: 41.2565, lng: -95.9345 }}
          onClick={this.markerClicked.bind(this)}
        />

        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
        >
          <div>
            <strong>Info Window</strong>
            <div>
              Information would be displayed here.
            </div>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}
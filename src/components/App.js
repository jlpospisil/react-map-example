import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import {GoogleApiWrapper} from 'google-maps-react';
import '../scss/app.scss';
import Map from './Map';
import MapWithPolygon from './MapWithPolygon';
import MapWithHeatMap from './MapWithHeatMap';
import MapWithClickableMarker from './MapWithClickableMarker';

const LoadingContainer = () => <div>Fancy loading container</div>;

const initializeMap = (Map) => {
  return GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ['places', 'visualization'],
    LoadingContainer,
  })(Map)
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="AppNav">
            <NavLink to="/basic">Basic</NavLink>
            <NavLink to="/polygon">Polygon</NavLink>
            <NavLink to="/heat-map">HeatMap</NavLink>
            <NavLink to="/clickable-marker">Clickable Marker</NavLink>
          </nav>

          <div className="AppContent">
            <Switch>
              <Route exact path="/basic" component={initializeMap(Map)} />
              <Route exact path="/polygon" component={initializeMap(MapWithPolygon)} />
              <Route exact path="/heat-map" component={initializeMap(MapWithHeatMap)} />
              <Route exact path="/clickable-marker" component={initializeMap(MapWithClickableMarker)} />
              <Redirect to="/basic" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

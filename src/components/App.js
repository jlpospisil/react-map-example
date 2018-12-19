import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import '../scss/app.scss';
import Map from './Map';
import MapWithPolygon from './MapWithPolygon';
import MapWithHeatMap from './MapWithHeatMap';
import MapWithClickableMarker from './MapWithClickableMarker';

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
              <Route exact path="/basic" component={Map} />
              <Route exact path="/polygon" component={MapWithPolygon} />
              <Route exact path="/heat-map" component={MapWithHeatMap} />
              <Route exact path="/clickable-marker" component={MapWithClickableMarker} />
              <Redirect to="/basic" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import '../scss/app.scss';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="AppNav">
            <NavLink to="/basic">Basic</NavLink>
            <NavLink to="/polygon">Polygon</NavLink>
            <NavLink to="/heat-map">HeatMap</NavLink>
          </nav>

          <div className="AppContent">
            <Route path="/basic" exact={true} component={MapContainer} />
            <Route path="/polygon" exact={true} component={MapContainer} />
            <Route path="/heat-map" exact={true} component={MapContainer} />
            <Redirect to="/basic" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

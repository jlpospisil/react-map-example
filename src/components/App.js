import React, { Component } from 'react';
import '../scss/app.scss';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer></MapContainer>
      </div>
    );
  }
}

export default App;

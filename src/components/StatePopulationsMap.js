import React, {Component} from 'react'
import {Polygon} from 'google-maps-react';
import axios from 'axios';
import Map from './Map';

const polygonProps = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  fillOpacity: 0.2,
};

export default class StatePopulationsMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      polygons: [],
      populations: {},
      minPopulation: -1,
      maxPopulation: 0,
    };

    this.getStateCensusData = this.getStateCensusData.bind(this);
    this.getStatePolygons = this.getStatePolygons.bind(this);
    this.calculateColor = this.calculateColor.bind(this);
  }

  getStateCensusData() {
    axios.get('/census-data').then((response) => {
      if (response.data && Array.isArray(response.data)) {
        const populations = response.data.reduce((obj, state) => {
          const {id, Population} = state;
          return {
            ...obj,
            [id]: Population,
          };
        }, {});

        const minPopulation = response.data.reduce((min, state) => {
          const {Population} = state;
          return (min < 0 || Population < min) ? Population : min;
        }, -1);

        const maxPopulation = response.data.reduce((max, state) => {
          const {Population} = state;
          return (Population > max) ? Population : max;
        }, -1);

        this.setState({populations, minPopulation, maxPopulation});
      }
    })
  }

  getStatePolygons() {
    axios.get('/polygons/states').then((response) => {
      if (response.data && Array.isArray(response.data)) {
        this.setState({polygons: response.data});
      }
    });
  }


  calculateColor(pct) {
    const percentColors = [
      { pct: 0.0, color: { r: 0xff, g: 0xf5, b: 0x9d } },  // #FFF59D
      { pct: 0.3, color: { r: 0xfb, g: 0x8c, b: 0 } },     // #FB8C00
      { pct: 1.0, color: { r: 0xc6, g: 0x28, b: 0x28 } }   // #c62828
    ];

    let i;

    for (i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
        break;
      }
    }

    const lower = percentColors[i - 1];
    const upper = percentColors[i];
    const range = upper.pct - lower.pct;
    const rangePct = (pct - lower.pct) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;
    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };

    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  }

  componentDidMount() {
    this.getStateCensusData();
    this.getStatePolygons();
  }

  render() {
    const {google} = this.props;
    const {polygons, populations, minPopulation, maxPopulation} = this.state;
    const {calculateColor} = this;

    return (
      <Map google={google}>
        {
          polygons.map((polygon) => {
            const {id, points} = polygon;
            const population = populations[id];
            const percentage = population ? (population - minPopulation) / (maxPopulation - minPopulation) : 0;
            const color = calculateColor(percentage);
            const options = {
              ...polygonProps,
              strokeColor: color,
              fillColor: color,
            };
            return <Polygon key={`polygon-${id}`} paths={points} {...options} />
          })
        }
      </Map>
    )
  }
}
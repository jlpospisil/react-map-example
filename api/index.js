const stateAbbreviations = require('./state-abbreviations.json');
const statePolygonData = require('./state-polygons.json');
const statePopulationData = require('./state-populations.json');

const statePolygons  = Object.keys(statePolygonData).map((state) => {
  const stateInfo = stateAbbreviations.find((info) => info.name.toLowerCase() === state.toLowerCase());
  const { abbreviation: id } = stateInfo || {};
  const { Coordinates: points=[] } = statePolygonData[state] || {};

  if (!id) return null;

  return {
    id,
    points,
  };
})
  .filter(state => state !== null);

const statePopulations = statePopulationData.map((state) => {
  let stateData = state;
  stateData.id = stateData.code;
  delete stateData.code;
  return stateData;
});

module.exports = () => {
  return {
    statePolygons,
    'census-data': statePopulations,
  };
};
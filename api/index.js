const stateAbbreviations = require('./state-abbreviations.json');
const statePolygonData = require('./state-polygons.json');

const statePolygons  = Object.keys(statePolygonData).map((state) => {
  const stateInfo = stateAbbreviations.find((info) => info.name.toLowerCase() === state.toLowerCase());

  if (!stateInfo) return null;

  return {
    id: stateInfo.abbreviation,
    points: statePolygonData[state].Coordinates,
  };
})
  .filter(state => state !== null);

module.exports = () => {
  return {
    statePolygons,
  };
};
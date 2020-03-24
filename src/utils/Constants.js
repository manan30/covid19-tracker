import { scaleLinear } from 'd3-scale';

export const GEO_URL =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export const colorScale = range =>
  scaleLinear()
    .domain([0, range])
    .range(['#ffedea', '#ff5233']);

const missingCountries = [
  'USA',
  'Iran',
  'S. Korea',
  'UK',
  'UAE',
  'North Macedonia',
  'Moldova',
  'Palestine',
  'DRC',
  'Tanzania',
  'Syria'
];

const missingIso3 = [
  'USA',
  'IRN',
  'KOR',
  'GBR',
  'ARE',
  'MKD',
  'MDA',
  'PSE',
  'COD',
  'TZA',
  'SYR'
];

export const countriesDataSanitizer = countries => {
  const newData = [];
  countries.forEach(country => {
    const foundIndex = missingCountries.findIndex(c => c === country.country);
    if (foundIndex !== -1) {
      const newObject = { ...country };
      newObject.countryInfo.iso3 = missingIso3[foundIndex];
      newData.push(newObject);
    } else newData.push(country);
  });
  return newData;
};

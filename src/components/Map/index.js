import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { getAll, getAllCountries } from '../../api';
import { GEO_URL, colorScale } from '../../utils/Constants';

function getColor(country) {
  const color = colorScale(country.cases);
  return color;
}

function WorldMap() {
  const [covid19Data, setCovid19Data] = useState({});
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    (async function getData() {
      const data = await getAll();
      setCovid19Data(() => data);
    })();
  }, []);

  useEffect(() => {
    (async function getAllCountriesData() {
      const data = await getAllCountries();
      setCountriesData(() => data);
    })();
  }, []);

  return (
    <ComposableMap className='main-map' projection='geoMercator'>
      {/* <Sphere stroke='#E4E5E6' strokeWidth={0.5} /> */}
      {/* <Graticule stroke='#E4E5E6' strokeWidth={0.5} /> */}
      <ZoomableGroup zoom={1}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const foundCountry = countriesData.find(
                ({ countryInfo }) => countryInfo.iso3 === geo.properties.ISO_A3
              );

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={foundCountry ? getColor(foundCountry) : '#F5F4F6'}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default WorldMap;

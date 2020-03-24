import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { getAll, getAllCountries } from '../../api';
import { GEO_URL, colorScale } from '../../utils/Constants';

function WorldMap({ setTooltipContent }) {
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

  const getColor = count => {
    const scale = colorScale(covid19Data.cases);
    const color = scale(count);
    return color;
  };

  return (
    <ComposableMap data-tip='' className='main-map' projection='geoMercator'>
      <ZoomableGroup zoom={1}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const foundCountry = countriesData.find(
                ({ countryInfo }) => countryInfo.iso3 === geo.properties.ISO_A3
              );

              const newGeoObject = { ...geo, countryData: foundCountry };

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={newGeoObject}
                  fill={foundCountry ? getColor(foundCountry.cases) : '#F5F4F6'}
                  onMouseEnter={() => {
                    const {
                      countryData,
                      properties: { NAME }
                    } = newGeoObject;
                    console.log(countryData, NAME);
                    if (countryData) {
                      setTooltipContent({
                        name: NAME,
                        cases: countryData.cases,
                        recovered: countryData.recovered,
                        deaths: countryData.deaths
                      });
                    } else {
                      setTooltipContent({ name: NAME });
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    hover: {
                      fill: '#F53',
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none'
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default React.memo(WorldMap);

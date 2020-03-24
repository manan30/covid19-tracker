import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { getAll, getAllCountries } from '../../api';
import WorldMap from '../../components/Map';

function Main() {
  const [covid19Data, setCovid19Data] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  const [tooltipContent, setTooltipContent] = useState({});

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
    <>
      <WorldMap
        setTooltipContent={setTooltipContent}
        covid19DataScale={covid19Data.cases}
        countriesData={countriesData}
      />
      {tooltipContent.length !== 0 && (
        <ReactTooltip>
          <h4>{tooltipContent.name && tooltipContent.name}</h4>
          {tooltipContent.cases && <h5>Cases: {tooltipContent.cases}</h5>}
          {tooltipContent.recovered && (
            <h5>Recovered: {tooltipContent.recovered}</h5>
          )}
          {tooltipContent.deaths && <h5>Deaths: {tooltipContent.deaths}</h5>}
        </ReactTooltip>
      )}
    </>
  );
}

export default Main;

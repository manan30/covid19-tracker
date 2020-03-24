import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../Store';
import { getHistoricalDataByCountry } from '../../api';

function Details() {
  const {
    state: { countries }
  } = useStore();
  const { country } = useParams();
  const [historicalData, setHistoricalData] = useState([]);

  const searchCountry = countries.find(entry => entry.country === country);

  useEffect(() => {
    (async function getHistoricalData() {
      const data = await getHistoricalDataByCountry(country);
      setHistoricalData(() => data);
    })();
  }, [country]);

  return <>{searchCountry.country}</>;
}

export default Details;

import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import WorldMap from './components/Map';
import { Credits } from './GlobalStyles';

function App() {
  const [tooltipContent, setTooltipContent] = useState({});

  return (
    <div className='App'>
      <WorldMap setTooltipContent={setTooltipContent} />
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
      <Credits>
        &#x24B8; Manan Joshi. Made with
        <span style={{ color: 'red' }}> &#x2764; </span>
        using <a href='https://github.com/NovelCOVID/API'>NovelCOVID API</a>
      </Credits>
    </div>
  );
}

export default App;

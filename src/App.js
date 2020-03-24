import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Credits } from './GlobalStyles';
import Main from './views/Main';
import Details from './views/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Main} />
        <Route path='/:country' component={Details} />
      </Router>
      <Credits>
        &#x24B8; Manan Joshi. Made with
        <span style={{ color: 'red' }}> &#x2764; </span>
        using <a href='https://github.com/NovelCOVID/API'>NovelCOVID API</a>
      </Credits>
    </div>
  );
}

export default App;

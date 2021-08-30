import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

const CandlesPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>CANDLE PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/candles' component={CandlesPage}/>
      </Switch>
    </div>
  );
}

export default App;

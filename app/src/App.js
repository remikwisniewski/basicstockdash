import React from 'react';
import TopSector from './Components/TopSector/TopSector';
import StockComponent1 from './Components/StockComponent1/StockComponent1';
import Exchange from './Components/Exchange/Exchange';
import data from './dataSample.js';

import Dividend from './Components/Dividend/Dividend';
import { sortDivStocks } from './helperFunctions';

function App() {
  return (
    <div className="App">
      <TopSector/>
      <StockComponent1> 
        <Exchange exchanges={data.exchanges}/>
        <Dividend stocks={sortDivStocks(data.stocks)}/>
      </StockComponent1>
    </div>
  );
}

export default App;

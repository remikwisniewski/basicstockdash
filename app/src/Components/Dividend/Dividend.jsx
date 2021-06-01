import React from "react";
import modstyles from "./Dividend.module.css";


/*
    props - passed in API Data
    <Dividend stocks={sortDivStocks(data.stocks)}/>
*/
const Dividend = (props) => {

  const renderListItems = () => {
    return props.stocks.map((stock) => {
      return (
        <li className={modstyles.listItems} key={stock.ticker}>
          <div>{stock.ticker}</div>
          <div>{stock.amount} NOK</div>
        </li>
      );
    });
  }; 

  return (
    <div className={modstyles.container}>
      <h1 className={modstyles.header}>Top 5 dividend yield stocks</h1>
      <ul className={modstyles.dividendList}>{renderListItems()}</ul>
    </div>
  );
};

export default Dividend;
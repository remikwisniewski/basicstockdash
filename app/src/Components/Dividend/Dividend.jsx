import React from "react";

import modstyles from "./Dividend.module.css";

const Dividend = (props) => {
  const renderListItems = () => {
    return props.stocks.map((stock) => {
      return (
        <li className={modstyles.listItem} key={stock.ticker}>
          <div>{stock.ticker}</div>
          <div>{stock.amount} NOK</div>
        </li>
      );
    });
  };

  return (
    <div className={modstyles.container}>
      <h1 className={modstyles.header}>Top five dividend yield stocks</h1>
      <ul className={modstyles.dividendList}>{renderListItems()}</ul>
    </div>
  );
};

export default Dividend;
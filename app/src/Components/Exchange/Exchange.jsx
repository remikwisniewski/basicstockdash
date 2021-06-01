import React from 'react';
import modstyles from './Exchange.module.css';


/*
    we are using datasample and implementing it as if it was an api, later we will add the API
    props - passed in data api

    renderItems : gets called in <ul>
    - returns props.exchanges that we map over (loop) and we go over each exchange. Then we return
    a list with a classname of modstyles. Inside, we have a div with a classname of name for the exchange name..
    - props.exchanges.map: exchanges is data that is accessed from App.js in <Exchange exchanges={data.exchanges}/>
*/

const ExchangeComponent = (props) => {
  const renderItems = () => {
    return props.exchanges.map((exchange) => {
      return (
        <li className={modstyles.listName} key={exchange.name}>

          <div className={modstyles.name}>{exchange.name}</div>
          <div className={modstyles.index}>{exchange.price}</div>
          <div className={modstyles.percentage}>{exchange.change}</div>

        </li>
      );
    });
  };

  return (
    <div className={modstyles.container}>

      <h1 className={modstyles.title}>Exchanges</h1>
      <ul className={modstyles.exList}> {renderItems()} </ul>
      
    </div>
  );
};

export default ExchangeComponent;
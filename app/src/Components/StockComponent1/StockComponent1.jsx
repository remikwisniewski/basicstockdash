import React from 'react';
import modstyles from "./StockComponent1.module.css";
/*
importing module css
*/

/*
this function takes in props and whatever is inside <BottomSector> <BottomSector/> gets rendered
*/

const BottomSector = (props) => {
    return (
        <div className={modstyles.StockComponent1}>
            <div className={modstyles.container}> {props.children} </div>
            
        </div>
    )
}

export default BottomSector;
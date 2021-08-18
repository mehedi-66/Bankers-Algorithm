import React from 'react';
import './TotalAlocated.css'

function TotalAlocated(props) {
    let totalAlocatedArr = props.totalAlocatedArr;
    let col = props.col;
    let len = col.length;
    return (
        <React.Fragment>
            <span className="totalAlocation">Total </span>
            {
                totalAlocatedArr.map((element, index) =>
                     
                     <span key={index} className="totalAlocatedNumber">{(index < len)?element:""}</span>
                )
            }
        </React.Fragment>
    );
}
export default TotalAlocated;
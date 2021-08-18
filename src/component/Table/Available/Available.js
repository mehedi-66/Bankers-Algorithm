import React from 'react';
import './Available.css';




function Available(props){
    let AvailableArr = props.AvailableArr;
    let col1 = props.onColAvailable;
    let row1 = props.onRowAvailable;
    let newRow1 = [];
    for(let i = 0; i < row1.length; i++) {
        newRow1.push(col1[i]);
    }
    newRow1.push(1);

    const AvailabledHandler = ()=>{

    }
    return (
        
        <React.Fragment>
            <div className="Available">
            <p className="RemainHeading">Available</p>
            {
                    col1.map((element, index) => <span key={index} className="AvailableResource">R{index + 1}</span>)
            }
            <br />
            {
                newRow1.map((element, i) => 
                    col1.map((element, j) =>
                        <span key={[i, j]} ><input value={AvailableArr[i][j]} className="AvailableInput" onChange={AvailabledHandler}/>{j === col1.length - 1 && <br />}</span>
                    )
                )
            }
            </div>
            
        </React.Fragment>
    
    );
}
export default Available;
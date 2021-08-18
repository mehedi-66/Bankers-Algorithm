import React from 'react';
import './Remainneed.css';




function Remainneed(props){
    let RemainneedArr = props.RemainneedArr;
    let row1 = props.onRowRemain;
    let col1 = props.onColRemain;
    const RemainneedHandler = (event)=>{

    }
    return (

        <React.Fragment>
            <div className="Remainneed">
            <p className="RemainHeading">Remaining Need</p>
            {
                    col1.map((element, index) => <span key={index} className="RemainResource">R{index + 1}</span>)
            }
            <br />
            {
                row1.map((element, i) => 
                    col1.map((element, j) =>
                        <span key={[i, j]} ><input value={RemainneedArr[i][j]} className="RemainInput" onChange={RemainneedHandler}/>{j === col1.length - 1 && <br />}</span>
                    )
                )
            }
            </div>
            
        </React.Fragment>
    
    );
}
export default Remainneed;

import React from 'react';
import './Maxneed.css';

function Maxneed(props) {
    
    let row1 = props.onRowMaxneed;
    let col1 = props.onColMaxneed;
    
    const MaxneedInputHandeler = (event)=>{
        props.onMaxneedChange(event);
    }

    return (
        <React.Fragment>
            <div className="Maxneed">
            <p className="MaxneedHeading">Max Need</p>
            
            {col1.map((element, index) =>
                <span key={index} className="MaxneedResource" >R{index+1}</span>)
            }
                 <br />
            {
                row1.map((element, i)=>
                    col1.map((element,j)=>
                        <span key={[i, j]}><input type="text" name={[i,j]} onChange={MaxneedInputHandeler} className="MaxneedInput"/> {j === col1.length - 1 && <br />}</span>
                    )
                )
            }
            </div>
           
        </React.Fragment>
    );
};
export default Maxneed;
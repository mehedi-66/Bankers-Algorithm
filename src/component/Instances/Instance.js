
import React from 'react';
import './Instance.css';

function Instance(props){

    const instanceInputHandeler = (event)=>{
        // event name and value will create instance array on App() component
       props.onInstanceArr(event);
       
    }

    return (
        <React.Fragment>
           <div>
            <p className="instanceHeading">Instances</p>
            {
                 props.arrResourceCount.map((element, index) =>
                    <span key ={index} className="instanceContent">R{element}
                    <input onChange={instanceInputHandeler} name={index} type="text" className="instanceInput"/>
                    </span>
                 )
            }
           
            </div>
        </React.Fragment>
    );
}

export default Instance;
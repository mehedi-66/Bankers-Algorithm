import React from 'react';
import './ShowProces.css';

function ShowProcess(props){

    let deadLock = props.deadLock;
    let processArr = props.processArr;
    let x = " => "

    return (
        <React.Fragment>
            <div className="deadLock">
                {
                     processArr.map((element)=>
                     <span>P{element}{x}</span>
                 )
                                
                }
                
               
               {!deadLock ? <span className="deadLockSpan"> DEAD LOCK </span> : <span className="deadLockSafe">Safe Sequence</span>}
            </div>
        </React.Fragment>
    );
}
export default ShowProcess;
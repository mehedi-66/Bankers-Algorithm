
import React, {useState} from 'react';
import './Process.css'

function Process(props) {
    let [countProcess, setCountProcess] = useState(0);
    
    const  plusProcessHandeler = () =>{

        if(countProcess < 8 && countProcess >= 0){
            countProcess++;
        }
        props.onProcessChange("+",countProcess);
        setCountProcess(countProcess);
    }
    const  minusProcessHandeler = () =>{

        if(countProcess > 0){
            countProcess--;
        }
        props.onProcessChange("-", countProcess);
        setCountProcess(countProcess);
    }

    return (
        <React.Fragment>
          <div className="process">
              <p>process (8)</p>
              <button onClick={minusProcessHandeler}>-</button>
              <button onClick={plusProcessHandeler}>+</button>
              <span>= {countProcess}</span>
          </div>
        </React.Fragment>
    );
}
export default Process;
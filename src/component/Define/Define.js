
import React, {useState} from 'react';
import './Define.css';
import Process from '../Process/Process';
import Resource from '../Resource/Resource';
import Instance from '../Instances/Instance';

function Define(props){

    const [ResourceCount, SetResourceCount] = useState([]);
    const [processCount, SetProcessCount] = useState([]);
  
   const getResourceCount = (key, value) =>{
        if(key === "+"){
            if(ResourceCount.length < 8)
            ResourceCount.push(value);
        }
        else{
            props.onInstanceArr("-")
            ResourceCount.pop();
        }
      
         if(ResourceCount.length >= 0 && ResourceCount.length <= 8){
            props.onCol(ResourceCount);
            SetResourceCount([...ResourceCount]);
         }
        
    }
    const getProcessCount = (key, value) =>{

        if(key === "+"){
            if(processCount.length < 8){
                processCount.push(value);
            }
        }else{
            processCount.pop();
        }
        // console.log(processCount);
        if(processCount.length >= 0 && processCount.length <= 8){
            props.onRow(processCount);
            SetProcessCount([...processCount])
        }
    }
        
 

    return (
        <React.Fragment>
             <div className="options">
                <div className="options-left">
                    <Process onProcessChange={getProcessCount} />
                    <Resource onResourceChange={getResourceCount} />
                </div>

                 <Instance arrResourceCount={ResourceCount} onInstanceArr={props.onInstanceArr}/>
               
            </div>
        </React.Fragment>
    );
}
export default Define;
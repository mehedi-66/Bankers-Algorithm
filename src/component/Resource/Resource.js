import React, {useState} from 'react';
import './Resource.css'

function Resource(props) {

    let [countResource, setCountResource] = useState(0);
    
    const  plusResourceHandeler = () =>{

        if(countResource < 8 && countResource >= 0){
            countResource++;
        }
        // add array of resource inside the Define() component
        props.onResourceChange("+", countResource);
        setCountResource(countResource);
    }
    const  minusResourceHandeler = () =>{

        if(countResource > 0){
            countResource--;
        }
        props.onResourceChange("-",countResource);
        setCountResource(countResource);
    }

   

    return (

        <React.Fragment>
            <div className="resourse">
                <p>Resources (8)</p> 
                <button onClick={  minusResourceHandeler}>-</button>
                <button  onClick={plusResourceHandeler}>+</button>
                <span>= {countResource}</span>
            </div>

        </React.Fragment>
    );
}
export default Resource;
import React, { useState } from 'react';
import Header from './component/Header/Header'
import './App.css';
import Define from './component/Define/Define';
import Alocation from './component/Table/Alocation/Alocation';
import TotalAlocated from './component/Table/TotalAlocated/TotalAlocated';
import Maxneed from './component/Table/Maxneed/Maxneed';
import Remainneed from './component/Table/Remaindneed/Remainneed';
import Available from './component/Table/Available/Available';
import ShowProces from './component/ShowProces/ShowProces';

let instanceArr = [];
let AlocationArr = [[], [], [], [], [], [], [], []];
let MaxneedArr = [[], [], [], [], [], [], [], []];
let RemainneedArr = [[], [], [], [], [], [], [], []];
let AvailableArr = [[], [], [], [], [], [],[], [], [], [], []];
let visit = [];
let processArr = [];

let totalAlocatedArr = []; 
let isNan = 0;
let currentPositionAvailable = 0;
let deadLock = 0;
let runOnlyOneTime = 0;
function App() {

    // const [isNan, setIsNan] = useState(1);
    const [run, setRun] = useState(1);
    const [row, setRow] = useState([]);
    const [col, setCol] = useState([]);
    let getRowArr = (valueArr) => {

        setRow(valueArr);

    }
    let getColArr = (valueArr) => {

        setCol(valueArr);
    }
    // console.log(row);
    // console.log(col);
    let getInstanceArr = (event) => {

        if (event === "-") {

            instanceArr.pop();

        } else {

            instanceArr[event.target.name] = Number(event.target.value);
        }

        // console.log(`instance arr ${instanceArr} and len ${instanceArr.length}`);
    }

    const getAlocationArr = (event) => {

        let index = event.target.name;

        AlocationArr[index[0]][index[2]] = Number(event.target.value);
        // console.log(AlocationArr);
    }
    const getMaxneedHandler = (event) => {
        let index = event.target.name;  
        MaxneedArr[index[0]][index[2]] = Number(event.target.value);
      

    }


    const getTotalAlocation = () =>{
        let k = 0;
        for(let i = 0; i < col.length; i++) {
            let sum = 0;
            for(let j = 0; j< row.length; j++) {
                sum += AlocationArr[j][i]; 
            }
            totalAlocatedArr[k++] = sum;
        }
    }

    // calculate Remain need Arrays
    const getRmainneedArray = ()=>{
        for(let i = 0; i < row.length; i++){
            for(let j = 0; j < col.length; j++){
                
                RemainneedArr[i][j] = (MaxneedArr[i][j] - AlocationArr[i][j]);
            }
        }
    
    }

    // calculate initiallyAvailable
    const initiallyAvailable = () =>{
        for(let i = 0; i <col.length; i++){
            // instance array is (-) totalAlocated 
            // insert into AvailableArr [0]
            AvailableArr[0][i] = (instanceArr[i] - totalAlocatedArr[i]);
        }
        console.log(AvailableArr);
        checkRaminneed();
    }
    // check Raminneed with Available to get which process would be executed 
    const checkRaminneed = ()=>{
        // Remaing Need === currentAvailable
        for(let i = 0; i < 10; i++){
                visit[i] = 0;
        }
        let k = 0;
        let cnt = 0;
        while(k <= row.length){
            
            for(let i = 0; i < row.length; i++){
                console.log("run =>" + i);
                 cnt = 0;
                for(let j = 0; j < col.length; j++){

                   if( RemainneedArr[i][j] <= AvailableArr[currentPositionAvailable][j]){
                        cnt++;
                   }
                
                }
                if(cnt === col.length){
                    if(visit[i] === 0){

                        // Update Available Array
                        for(let t=0;t<col.length; t++){
                            AvailableArr[currentPositionAvailable+1][t] = (AvailableArr[currentPositionAvailable][t]+AlocationArr[i][t]);
                        }
                        console.log(AvailableArr);

                        currentPositionAvailable++;
                        processArr.push(i+1);
                        console.log(processArr);
                        visit[i] = 1;
                    }
                   
                }
               
               
            }
            k++;
        }
    }
    // Available work
    const getAvailableArray = ()=>{
        
        initiallyAvailable();
       
    
    }
    const  getFindDeadLock = ()=>{
        let cnt1 = 0;
        for(let i = 0; i < row.length; i++){
            if(visit[i] === 1){
                cnt1++;
            }
        }
        if(cnt1 === row.length){
            deadLock = 1;
        }
    }
    const getRun = () => {

        if(runOnlyOneTime === 0){
            runOnlyOneTime = 1;
            getTotalAlocation();
            getRmainneedArray();
            getAvailableArray();
            getFindDeadLock();
          
            let flag = 0;
           for(let i = 0;i < col.length; i++){
              
               if(isNaN(totalAlocatedArr[i])){
                   flag = 1;
               }
           }
           for(let i = 0; i < col.length; i++){
               if(isNaN(instanceArr[i])){
                   flag = 1;
               }
           }


        if(flag === 1){
            isNan = 1
        }
        else{
            isNan = 0;
        }
        setRun(!run);
        }

           
    }

    const reloadPageHandeler = ()=>{
        window.location.reload();

    }

    return (
        <React.Fragment>
            <Header />
            <Define onInstanceArr={getInstanceArr} onRow={getRowArr} onCol={getColArr} />
            {isNan && <p className="ReadHeading">Some input value is Missing</p>}
               {!runOnlyOneTime && <button className="runButton" onClick={getRun} >RUN</button> } 
            <div className="container">  
                

                <div className="AlocationBlock">
                    {(row.length > 0 && col.length > 0) && < Alocation onRowAlocation={row} onColAlocation={col} onAlocationArr={getAlocationArr} AlocationArr={AlocationArr} />}
                    {!run && <TotalAlocated totalAlocatedArr={totalAlocatedArr} col={col}/>}
                   
                </div>
                <div className="AlocationBlock">
                {(row.length > 0 && col.length > 0) && <Maxneed onRowMaxneed={row} onColMaxneed={col} onMaxneedChange={getMaxneedHandler}/>}
                </div>
               <div className="AlocationBlock">
               {!run && <Remainneed onRowRemain={row} onColRemain={col} RemainneedArr={RemainneedArr}/>}
               </div>
               <div className="AlocationBlock">
                    {!run && <Available onRowAvailable={row} onColAvailable={col} AvailableArr={AvailableArr}/>}
               </div>
              
            </div>
            <div>
                {!run && <ShowProces deadLock={deadLock} processArr={processArr}/>} }
            </div>
            {!run && <button className="runButton" onClick={reloadPageHandeler}>Try Again</button>}
            <div className="youtubeVide">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fo9dJZ42z6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
           
            <div className="Footer">
                <p>Mehedi</p>
               
            </div>

        </React.Fragment>
    );


}
export default App;
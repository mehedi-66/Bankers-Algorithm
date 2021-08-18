import React from 'react';
import './Alocation.css';

function Alocation(props) {

    let row1 = props.onRowAlocation;
    let col1 = props.onColAlocation;

    const alocationHandeler = (event) => {
        props.onAlocationArr(event);
    }

    return (
        <React.Fragment>

            <div >
                <p className="AlocationHeading">Allocation</p>

                {
                    col1.map((element, index) => <span key={index} className="AlocationResource">R{index + 1}</span>)
                }
                <br />
                {

                    row1.map((row, i) =>

                        col1.map((col, j) =>
                            <span key={[i, j]}> {j === 0 && <span>p{i + 1}</span>} <input type="text" name={[i, j]} onChange={alocationHandeler} className="alocationInput" />  {j === col1.length - 1 && <br />} </span>


                        )
                    )
                }

            </div>
        </React.Fragment>
    );
}
export default Alocation;
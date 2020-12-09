import React from 'react'
import Bar from "./Bar"

export default function Chart(props) {
    let counter = 0;
    return (
        <div className="chartContainer">
            {props.data.map(x => {
                counter++
            return (
                <div
                    id={counter} 
                    className="eachBar"
                    onMouseOut={props.deletePopup}
                     onMouseOver={props.popup}
                     key={counter}
                     style={{height: `${x[1]}px`}}>
                    <Bar data={x} id={counter}/>   
                </div>
            )
        })}
        </div>
       
    )
    
}

// {height: `${x[1]}px`}
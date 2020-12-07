import React from 'react'
import Bar from "./Bar"

export default function Chart(props) {
    
    return (
        <div className="chartContainer">
            {props.data.map(x => {
                console.log(x)
            return (
                <div className="eachBar"
                     key={1}
                     style={{height: `${x[1]}px`}}>
                    <Bar data={x}/>   
                </div>
            )
        })}
        </div>
       
    )
    
}

// {height: `${x[1]}px`}
import React from 'react'
import Bar from "./Bar"

export default function Chart(props) {
    
    return (
        <div className="chartContainer">
            {props.data.map(x => {
            return (
                <div className="eachBar"
                     key={x.id}
                     style={{height: `${x[1]}px`}}>
                    <Bar data={x}/>   
                </div>
            )
        })}
        </div>
       
    )
    
}

// {height: `${x[1]}px`}
import React from 'react'
import Bar from "./Bar"

export default function Chart(props) {
    console.log(props.data)
    return (
        <div className="chartContainer">
            {props.data.map(x => {
            return (
                <div key={x.id}>
                    <Bar data={x}/> 
                </div>
            )
        })}
        </div>
       
    )
    
}

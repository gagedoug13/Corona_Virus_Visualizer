import React from 'react'
import Bar from "./Bar"

export default function Chart(props) {
    let counter = 0;
    if (props.data[0]) {
        if (props.data[0][1] > 600) {
            return (
                <div className="barChartContainer">
                {props.data.map(x => {
                    counter++
                return (
                    <div
                        id={counter} 
                        className="eachBar"
                        onMouseOut={props.deletePopup}
                        onMouseOver={props.popup}
                        key={counter}
                        style={ {height: `${x[1] / 2}px`} }>
                        <Bar data={x} id={counter}/>
                        <p className="barNumber">{x[1]}</p>
                    </div>
                )
            })}
            </div>
            )
        } else {
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
                             style={ {height: `${x[1]}px`} }>
                            <Bar data={x} id={counter}/>  
                            <p className="barNumber">{x[1]}</p> 
                        </div>
                    )
                })}
                </div>
               
            )
        }

    } else {
        return (
            <div className="chartContainer">
                <Bar data={props.data} id={counter}/>
            </div>
        )
    }
    
    
}

// {height: `${x[1]}px`}
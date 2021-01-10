import { interpolateBlues } from 'd3'
import React from 'react'

export default function MonthlyViewsGraph(props) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let counter = 0
    return props.views.map(x => {
        return (
            <div className="eachMonthContainer" key={x}>

                <h3 className="month">{months[counter]}</h3>
                <div className="monthlyViewsBar"
                style={ {width: `${x}px`, 
                              backgroundColor: "turquoise",
                              marginBottom: "3px",
                              height: "3vh"} }>
                
                <p className='hide'>{counter++}</p>
                </div>
                {x} videos
            </div>   
        )
    })
}

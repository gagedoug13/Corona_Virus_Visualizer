import React from 'react'

export default function MonthlyViewsGraph(props) {
    return props.views.map(x => {
        return (
            <div className="chart-container" key={x}>
                <p>{x}</p>
            </div>
        )
    })
    
}

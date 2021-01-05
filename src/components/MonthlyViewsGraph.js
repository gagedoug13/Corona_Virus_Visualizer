import { interpolateBlues } from 'd3'
import React from 'react'

export default function MonthlyViewsGraph(props) {
    return props.views.map(x => {
        return (
            <div className="monthlyViewsContainer" key={x}>
                <div style={ {width: `${x}px`, backgroundColor: "turquoise",
                              marginBottom: "3px"} }>
                    {x}
                </div>
            </div>
        )
    })
    
}

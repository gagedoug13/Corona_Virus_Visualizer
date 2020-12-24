import React from 'react'
import Chart from './Chart'
import VisualFilters from "./VisualFilters"
import MonthlyViewsGraph from './MonthlyViewsGraph'

export default function ChartContainer(props) {
    return (
        <div>
            <h1 className="white-text">YouTube History Visualizer</h1>
                
                <Chart popup={props.popup}
                       data={props.data}
                       deletePopup={props.deletePopup}/>
                
                <h2 className="white-text">pick a filter to visualize your data.</h2>
                
                <VisualFilters listOfTopChannels={props.listOfTopChannels}
                               listOfTopKeywords={props.listOfTopKeywords}
                               videosPerMonth={props.videosPerMonth}/>

                <MonthlyViewsGraph views={props.views}/>
        </div>
    )
}

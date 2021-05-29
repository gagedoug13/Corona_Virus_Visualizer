import React from 'react'
import Chart from './Chart'
import VisualFilters from "./VisualFilters"
import MonthlyViewsGraph from './MonthlyViewsGraph'

export default function ChartContainer({ 
    popup, 
    data, 
    deletePopup, 
    listOfTopChannels, 
    listOfTopKeywords, 
    videosPerMonth, 
    views 
}) {
    return (
        <div className="chartDiv">
            <h1 className="white-text">YouTube History Visualizer</h1>
                
            <Chart popup={popup}
                    data={data}
                    deletePopup={deletePopup}/>
                
            <h2 className="white-text">pick a filter to visualize your data.</h2>
                
            <VisualFilters listOfTopChannels={listOfTopChannels}
                            listOfTopKeywords={listOfTopKeywords}
                           />
            
            <div className="monthlyViewsContainer"><MonthlyViewsGraph views={views}/></div>
        </div>
    )
}

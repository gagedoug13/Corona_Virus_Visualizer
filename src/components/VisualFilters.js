import React from 'react'

export default function VisualFilters(props) {

    return (
        <div>
            <button className="filterButton" onClick={() => props.listOfTopChannels()}>top 50 Channels</button>
            <button className="filterButton" onClick={() => props.listOfTopKeywords()}>top 50 Keywords</button>
            <button className="filterButton" onClick={() => props.videosPerMonth()}>monthly video count</button>
        </div>
    )
}

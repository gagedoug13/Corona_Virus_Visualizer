import React from 'react'

export default function VisualFilters(props) {

    return (
        <div>
            <button onClick={() => props.listOfTopChannels()}>top 50 Channels</button>
            <button onClick={() => props.listOfTopKeywords()}>top 50 Keywords</button>
        </div>
    )
}

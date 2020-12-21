import React from 'react'

export default function DataFeed(props) {
   
    
    return (
        <div className="dataFeedDiv">
            <div className='topVideosContainer'>
                <h2>no matching videos at the moment</h2>
            </div>

            <div className='topChannelsContainer'>
                {props.topFiveChannels.map(x => {
                    return (
                        <p>{x[0]}</p>
                    )
                })}
            </div>

            <div className='topKeywordsContainer'>
                {props.topFiveKeywords.map(x => {
                    return (
                        <p>{x[0]}</p>
                    )
                })}
            </div>
        </div>
    )
}

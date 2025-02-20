import React from 'react'

export default function DataFeed({ 
    topFiveChannels,
    topFiveKeywords, 
    topThreeMonths 
}) {
    
    return (
        <div className="dataFeedDiv">
            <div className='topVideosContainer'>
                <h2>no matching videos at the moment</h2>
            </div>

            <div className='topChannelsContainer'>
                <h2>Top Channels</h2>
                {topFiveChannels.map(x => {
                    return (
                        <p>{x[0]}</p>
                    )
                })}
            </div>
                {console.log(topFiveKeywords)}
            <div className='topKeywordsContainer'>
                <h2>Top Keywords</h2>
                {topFiveKeywords.map(x => {
                    return (
                        <p>{x[0]}</p>
                    )
                })}
            </div>

            <div className='topMonthsContainer'>
                <h2>Top Months</h2>
                {topThreeMonths.map(x => {
                    return (
                        <p>{x[0]}: {x[1]} videos watched</p>
                    )
                })}
            </div>
        </div>
    )
}

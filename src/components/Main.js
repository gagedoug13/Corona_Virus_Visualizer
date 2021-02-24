import React, { Component } from 'react'
import data from "../dillon-watch-history.json"
import ChartContainer from "./ChartContainer"
// import Chart from "./Chart"
// import VisualFilters from "./VisualFilters"
// import MonthlyViewsGraph from "./MonthlyViewsGraph"
import DataFeed from "./DataFeed"
require ('dotenv').config()


export default class Main extends Component {

    constructor(props){
        super(props)
            this.state = {
                chartData: [],
                viewsPerMonth: [],
                topFiveChannels: [],
                topFiveKeywords: [],
                topThreeMonths: []
        }
    }

    componentDidMount(){
        this.topFiveChannels()
        this.topFiveKeywords()
        this.videosPerMonth()
    }

    videosPerMonth = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const monthValues = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        for (let i=0; i<data.length; i++) {
            const time = data[i]["time"]
            const year = time.split('').slice(2,4).join('')
            if (time) {
                if (year == 20) {
                    let month = +time.split('').slice(5,7).join('')
                    monthValues[month]++
                } else {
                    continue
                }
            } 
        }
        let views = monthValues.slice(1)
        let monthlyViews = []

        for (let i=0; i<views.length; i++) {
            monthlyViews.push([monthNames[i], views[i]])
        }
       
        let sortedMonths = monthlyViews.sort((a, b) => b[1] - a[1]).slice(0, 3)
    
        this.setState({
            viewsPerMonth: views,
            topThreeMonths: sortedMonths
        })
        
    }

    listOfTopChannels = () => {
        let channels = {}
        for (let i=0; i<data.length; i++) {
            if (data[i]["subtitles"]) {
                const channel = data[i]["subtitles"][0]["name"]
                if (!channels[channel]) {
                    channels[channel] = 1
                } else {
                    channels[channel]++
                }
            }
        }
        let arrayOfChannels = []
        for (let obj in channels) {
            arrayOfChannels.push([obj, channels[obj]])
        }
        
       let sortedList = arrayOfChannels.sort(function(a, b) {
            return b[1] - a[1] 
        })

        sortedList = sortedList.slice(0, 50)

        this.setState({
            chartData: sortedList
        })
        return sortedList
    }
    
    countChannelViews = (name) => {
        let counter = 0
        for (let i=0; i<data.length; i++) {
            if (data[i]["subtitles"]) {
                if (data[i]["subtitles"][0]["name"] == name) {
                    counter++
                }
            }
        }
    }

    listOfTopKeywords = () => {
        let keywords = {}
        const uselessKeywords = ["watched", "-", "the", "that", "you", "i", "has", "my", "&", "of", "a",
                                 "to", "|", "with", "for", "and", "in", "on", "how", "is", "at", "be",
                                "by", "from", "this", "out", "his", "do", "an", "it", "or", "get", "gets",
                                "your", "1", "2", '""', "vs.", "he", "new", "they", "video", "been", 
                                "what", "removed", "3"]
        for (let i=0; i<data.length; i++) {
            if (data[i]["title"]) {
                const title = data[i]["title"].toLowerCase().split(' ')
                
               for (let word of title) {
                   if (word == "") {
                       continue

                   } else if (!uselessKeywords.includes(word)) {
                        if (!keywords[word]) {
                            keywords[word] = 1
                        } else {
                            keywords[word]++
                        }
                   }
               }
            }
        }

        let arrayOfKeywords = []
        for (let obj in keywords) {
            arrayOfKeywords.push([obj, keywords[obj]])
        }
        
       let sortedList = arrayOfKeywords.sort(function(a, b) {
            return b[1] - a[1] 
        })
        
        sortedList = sortedList.slice(0, 50)
       
        this.setState({
            chartData: sortedList
        })
        return sortedList
    }

    popUpWindow = (event) => {
        let popup = document.querySelector(`.popup${event.target.id}`)

        if (popup) {
            const adjustedX = event.clientX + 40
            const adjustedY = event.clientY - 60
            popup.style.display = ""
            popup.style.position = "absolute"
           
            popup.style.top = adjustedY + "px"
            popup.style.left = adjustedX + "px"
        } 

    }
    
    deletePopUpWindow = (event) => {
        let popup = document.querySelector(`.popup${event.target.id}`)
        if (popup) {
            popup.style.display = "none"
        }
       
    }

    topFiveVideos = () => {
        let titles = {}
        for (let i=0; i<data.length; i++) {
            const videoTitle = data[i]['title'].split('').slice(8).join('')
            if (videoTitle) {
                if (titles[videoTitle]) {
                    console.log("existing title")
                    titles[videoTitle]++
                } else {
                    titles[videoTitle] = 0
                }
            }
        }

        let arrayOfTitles = []
        for (let obj in titles) {
            arrayOfTitles.push([obj, titles[obj]])
        }
        
       let sortedList = arrayOfTitles.sort(function(a, b) {
            return b[1] - a[1] 
        })

        sortedList = sortedList.slice(0, 50)

    }

    topFiveChannels = () => {
        const topFive = this.listOfTopChannels(data).slice(0, 5)
        this.setState({
            topFiveChannels: topFive
        })
    }
    
    topFiveKeywords = () => {
        const topFive = this.listOfTopKeywords(data).slice(0, 5)
        this.setState({
            topFiveKeywords: topFive
        })
    }



    render() {

        return (
            <div className='mainContainer'>
                <DataFeed topFiveChannels={this.state.topFiveChannels}
                          topFiveKeywords={this.state.topFiveKeywords}
                          topThreeMonths={this.state.topThreeMonths}/>

                <ChartContainer popup={this.popUpWindow}
                               data={this.state.chartData}
                               deletePopup={this.deletePopUpWindow}
                               listOfTopChannels={this.listOfTopChannels}
                               listOfTopKeywords={this.listOfTopKeywords}
                               videosPerMonth={this.videosPerMonth}
                               views={this.state.viewsPerMonth}/>

            </div>
        )
    }
}

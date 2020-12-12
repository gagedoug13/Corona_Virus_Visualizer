import React, { Component } from 'react'
import data from "../dillon-watch-history.json"
import Chart from "./Chart"
import VisualFilters from "./VisualFilters"
require ('dotenv').config()


export default class Main extends Component {

    constructor(props){
        super(props)
            this.state = {
                chartData: []
        }
    }
    videosPerMonth = () => {

        const monthValues = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        for (let i=0; i<data.length; i++) {
            const time = data[i]["time"]
            if (time) {
                let month = +time.split('').slice(5,7).join('')
                monthValues[month]++
            } 
        }
        // console.log(monthValues)
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
                                "by", "from", "this", "out", "his", "do"]
        for (let i=0; i<data.length; i++) {
            if (data[i]["title"]) {
                const title = data[i]["title"].toLowerCase().split(' ')
               for (let word of title) {
                   if (!uselessKeywords.includes(word)) {
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
        console.log(sortedList)
        // return sortedList
    }

    popUpWindow = (event) => {
        const popup = document.querySelector(`.popup${event.target.id}`)
        const adjustedX = event.clientX + 20
        const adjustedY = event.clientY - 60
        popup.style.display = ""
        popup.style.position = "absolute"
       
        popup.style.top = adjustedY + "px"
        popup.style.left = adjustedX + "px"
      
    }
    
    deletePopUpWindow = (event) => {
        const popup = document.querySelector(`.popup${event.target.id}`)
        popup.style.display = "none"
    }


    render() {
        console.log(data)
        this.videosPerMonth()
        return (
            <div className='mainContainer'>
                <h1 class="white-text">YouTube History Visualizer</h1>
                
                <Chart popup={this.popUpWindow}
                       data={this.state.chartData}
                       deletePopup={this.deletePopUpWindow}/>
                
                <h2 class="white-text">pick a filter to visualize your data.</h2>
                
                <VisualFilters listOfTopChannels={this.listOfTopChannels}
                               listOfTopKeywords={this.listOfTopKeywords}/>
            </div>
        )
    }
}

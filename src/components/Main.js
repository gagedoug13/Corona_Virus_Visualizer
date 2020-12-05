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

    componentDidMount() {
        // this.countChannelViews("JRE Clips")
        // this.listOfTopChannels()
        // this.listOfTopKeywords()
        // console.log(data)
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
        
        // console.log(sortedList)
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
        //  console.log(counter)
    }

    listOfTopKeywords = () => {
        console.log(data[0]["title"])
        let keywords = {}
        for (let i=0; i<data.length; i++) {
            if (data[i]["title"]) {
                const title = data[i]["title"].split(' ').slice(1)
               for (let word of title) {
                   if (!keywords[word]) {
                       keywords[word] = 1
                   } else {
                       keywords[word]++
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
    }

    render() {
        // console.log(this.state.chartData)
        return (
            <div className='mainContainer'>
                <Chart data={this.state.chartData}/>
                <VisualFilters listOfTopChannels={this.listOfTopChannels}
                               listOfTopKeywords={this.listOfTopKeywords}/>
            </div>
        )
    }
}

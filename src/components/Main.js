import React, { Component } from 'react'
import data from "../dillon-watch-history.json"
require ('dotenv').config()


export default class Main extends Component {

    componentDidMount() {
        this.countChannelViews("JRE Clips")
        this.listOfTopChannels()
        this.listOfTopKeywords()
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
        // console.log(sortedList)
        // return sortedList
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
        let channels = {}
        for (let i=0; i<data.length; i++) {
            if (data[i]["subtitles"]) {
                const channel = data[i]["subtitles"][0]["name"].split(' ')
                // console.log(channel)
               for (let keyword of channel) {
                   if (!channels[keyword]) {
                       channels[keyword] = 1
                   } else {
                       channels[keyword]++
                   }
               }
            }
        }
        // console.log(channels)
        let arrayOfKeywords = []
        for (let obj in channels) {
            arrayOfKeywords.push([obj, channels[obj]])
        }
        
       let sortedList = arrayOfKeywords.sort(function(a, b) {
            return b[1] - a[1] 
        })
        console.log(sortedList)

    }

    render() {
        return (
            <div>
               
            </div>
        )
    }
}

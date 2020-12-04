import React, { Component } from 'react'
import data from "../dillon-watch-history.json"
require ('dotenv').config()


export default class Main extends Component {

    componentDidMount() {
        this.countChannelViews("JRE Clips")
        this.listOfTopChannels()
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
            arrayOfChannels.push(obj, channels[obj])
        }
        
       let sorted = arrayOfChannels.sort(function(a, b) {
            return a > b ? -1 : 1
        })
        console.log(sorted)
    }
    
    countChannelViews = (name) => {
        let counter = 0
        for (let i=0; i<data.length; i++) {
            if (data[i]["subtitles"]) {
                if (data[i]["subtitles"][0]["name"] == name) {
                    counter++
                }
            } else {
                continue
            }
        }
        // console.log(counter)
    }

    render() {
        return (
            <div>
               
            </div>
        )
    }
}

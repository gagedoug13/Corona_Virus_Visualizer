import React, { Component } from 'react'
require ('dotenv').config()

export default class Main extends Component {

    componentDidMount() {

        fetch("https://covid-19-live-data.p.rapidapi.com/coronavirus/v1/current", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": process.env.RAPID_KEY,
            "x-rapidapi-host": "covid-19-live-data.p.rapidapi.com"
            }
            })
            .then(response => response.body)
            .then(body => {
                const reader = body.getReader();
            })
           
    
    }
    

    render() {
        return (
            <div>
                <h1>{this.getTestData}</h1>
            </div>
        )
    }
}

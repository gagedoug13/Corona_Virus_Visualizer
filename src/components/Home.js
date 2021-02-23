import React from 'react'
import ytLogo from '../logos/leafs.jpg'
import { Link } from "react-router-dom"


export default function Home() {
    return (
       
            
            <div className='homeDiv' style={{backgroundImage: "url(" + ytLogo + ")"}}>          
                <div className='welcomeDiv'>
                    <h1 className='welcome'>Welcome to YouTube Data Visualizer</h1>
                </div>

                <div className='fileInstructionsDiv'>
                <input className='fileButton' type="file" id="myFile" name="filename"/>
                    
                    <h3 className='or'>or</h3>
                        <Link to='/instructions'>
                            <button className='basicInstructionsButton'>instructions</button>
                        </Link>
                </div>

                <div className='basicInstructionsDiv'>
                    <p className='howTitle'>how it works</p>
                    <h3 className='basicInstructions'>You download your raw <span style={{color: "red"}}>YouTube</span> data from <a className='googleLink' href='https://google.takeouts.com'>google.takeouts.com</a> and we 
                    visualize it for you.</h3>

                    <h3 className='basicInstructions'>All you have to do is follow the instructions 
                    above and you'll be able to see your most viewed channels, videos, 
                    and key words from your YouTube history.</h3>
                </div>
                
            </div>
    )
}
import React from 'react'

export default function Home() {
    return (
        <div className='homeDiv'>
            <div className='welcomeDiv'>
                <h1>Welcome to YouTube Data Visualizer</h1>
            </div>

            <div className='fileInstructionsDiv'>
                <button className='fileButton'>choose file</button>
                <h3 className='or'>or</h3>
                <button className='instructionsButton'>see instructions</button>
            </div>

            <div className='instructionsDiv'>
                <p className='howTitle'>how it works</p>
                <h3 className='basicInstructions'>You download your raw YouTube data from google.takeouts.com and we 
                    visualize it for you. All you have to do is follow the instructions 
                    above and you'll be able to see your most viewed channels, videos, 
                    and key words from your YouTube history.</h3>
            </div>
          
        </div>
    )
}

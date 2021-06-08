import React from 'react'
import ytLogo from '../logos/leafs.jpg'
import { Link } from "react-router-dom"


export default function Home() {
    let fileReader;
    let fileData = null;

    // const checkFile = (event) => {
    //     const file = document.getElementById('myFile').files[0]
    //     console.log(event.target)
    //     // var data = open(file)
        // if (file.type != "application/json") {
        //     alert("Please choose the json file from your watch history.")
        // } else {
            
        // }
    // }

    const handleFileChosen = (file) => {
        
        if (file.type != "application/json") {
            alert("Please choose the json file from your watch history.")
            file = null;
            return;
        } else {
            fileReader = new FileReader();
            fileReader.onloadend = handleFileRead;
            fileReader.readAsText(file);
        }
        // console.log(file)
        
      };

    const handleFileRead = (e) => {
        const content = fileReader.result;
        fileData = content;
        // console.log(fileData)
        // … do something with the 'content' …
    };
    return (
            <div className='homeDiv' style={{backgroundImage: "url(" + ytLogo + ")"}}> 
                    
                <div className='welcomeDiv'>
                    <h1 className='welcome'>Welcome to YouTube Data Visualizer</h1>
                </div>

                <div className='fileInstructionsDiv'>
                <input 
                    className='fileButton' 
                    onChange={e => handleFileChosen(e.target.files[0])} 
                    type="file" 
                    accept='.json' 
                    id="myFile" 
                    name="filename"
                />
                <Link to={{ 
                    pathname: "/main", 
                    state: {fileData} 
                }}>
                    <button className='checkFileButton' ></button>
                </Link>
                    
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
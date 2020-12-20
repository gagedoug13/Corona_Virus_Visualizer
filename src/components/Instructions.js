import React from 'react'
import googleTakeout from '../instructionPhotos/google-takeout.png'
import deselect from '../instructionPhotos/deselect-all.png'
import selectYoutube from '../instructionPhotos/select-youtube.png'
import JSON from '../instructionPhotos/HTML-to-JSON.png'
import createExport from '../instructionPhotos/create-export.png'
import downloadYourFiles from '../instructionPhotos/download-your-files.png'
import extractAll from '../instructionPhotos/extract-all.png'

export default function Instructions() {
    return (
        <div className='instructionsDiv'>
            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Step 1. go to <a href='https://takeout.google.com/'>takeout.google.com</a> to download your youtube history.</h2>
                <img className='instructionsPhoto' src={googleTakeout}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Deselect all of the selected data and go to the bottom and hit the checkmark by the YouTube history icon.</h2>
                <img className='instructionsPhoto' src={deselect}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>At the bottom of the page, check the box next to YouTube data and click on Multiple Formats under the YouTube button.</h2>
                <img className='instructionsPhoto' src={selectYoutube}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Under the History tab, change the format from HTML to JSON and hit OK.</h2>
                <img className='instructionsPhoto' src={JSON}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Hit the <span>Next step</span> button and then scroll down and hit <span>Create export</span>.</h2>
                <img className='instructionsPhoto' src={createExport}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>When the data is ready, go to the email from Google and download your files.</h2>
                <img className='instructionsPhoto' src={downloadYourFiles}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>In the location that you saved your data, go to the zip file and double-click takeout / youtube and youtube music / history/ and at the top of the page hit extract all.</h2>
                <img className='instructionsPhoto' src={extractAll}></img>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Its time to upload your data. When choosing the file, go to Takeout / YouTube and YouTube Music / History / Watch History.</h2>
                <img className='instructionsPhoto' src={extractAll}></img>
            </div>

        </div>
    )
}

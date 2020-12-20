import React from 'react'

export default function Instructions() {
    return (
        <div className='instructionsDiv'>
            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Step 1. go to <a href='https://takeout.google.com/'>takeout.google.com</a> to download your youtube history.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Deselect all of the selected data and go to the bottom and his the checkmark by the YouTube history icon.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Hit to the Multiple Formats button under the icon and change the History format from HTML to JSON.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Export your data.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>When the data is ready, go to the email from Google and download your data.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Go to your zip file that you downloaded and extract all of the contents from it.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>When choosing which data you want to display, go to Takeout / YouTube and YouTube Music / History / Watch History.</h2>
            </div>

            <div className='instructionsCard'>
                <h2 className='instructionsBody'>Select your file.</h2>
            </div>


           
        </div>
    )
}

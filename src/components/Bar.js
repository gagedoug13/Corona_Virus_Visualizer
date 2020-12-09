import React from 'react'

export default function Bar(props) {
    const id = props.id
   return (
       <div className={`popup${id}`} 
        style={{
            height: "10vh",
            width: "20vw",
            backgroundColor: "purple",
            color: "white",
            display: "none"
        }}><h2 className="popupCardData">{props.data}</h2>
       </div>
   )
}

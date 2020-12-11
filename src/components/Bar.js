import React from 'react'

export default function Bar(props) {
    const id = props.id
   return (
       <div className={`popup${id}`} 
        style={{
            height: "auto",
            width: "auto",
            backgroundColor: "white",
            color: "black",
            // opacity: "40%",
            display: "none",
        }}>
            
    <h2 className="popupCardData">{props.data[0]}: {props.data[1]} </h2>
       </div>
   )
}

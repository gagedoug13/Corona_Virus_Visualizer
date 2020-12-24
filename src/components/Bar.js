import React from 'react'

export default function Bar(props) {
    const id = props.id
   return (
       <div 
        key={id} 
        className={`popup${id}`} 
        style={{
            height: "auto",
            width: "auto",
            backgroundColor: "#202020",
            color: "white",
            border: "2px green solid",
            display: "none",
        }}>
        <h2 className="popupCardData">{props.data[0]}: {props.data[1]} </h2>
       </div>
   )
}

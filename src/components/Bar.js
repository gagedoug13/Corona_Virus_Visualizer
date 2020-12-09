import React from 'react'

export default function Bar(props) {
    const id = props.id
   return (
       <div className={`popup${id}`} 
        style={{
            height: "10vh",
            width: "20vw",
            backgroundColor: "white",
            display: "none"
        }}>{props.data}
       </div>
   )
}

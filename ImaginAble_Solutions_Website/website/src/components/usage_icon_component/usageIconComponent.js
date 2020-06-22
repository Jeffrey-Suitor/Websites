import React from "react";
import "./usageIconComponent.css"

export default function usageIconComponent(props){
    return(
        <div className="icon-container">
            <img className='icon-image' src={props.img} alt={props.alt}/>
            <div className='icon-text'>{props.text}</div>
        </div>
    )
}
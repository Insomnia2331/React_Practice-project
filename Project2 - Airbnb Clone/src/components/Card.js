import React from "react"
import Path from "../images/star.png"
//import Paths from "../images/mountain-bike.png"

export default function Card(props) {
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image"  alt=""/>
            <div className="card--stats">
                <img src={Path} className="card--star" alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
import React from "react"
import Icon from "../images/react-icon-small.png"


export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark":""}>
            <img src={Icon} className="nav--icon" alt="imagehaha" />

            <></>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">light</p>
                <div className="tpggler--slider" onClick={props.toggleDarkMode}>
                    <button className="toggler--slider--circle" >Swithch Mode</button>
                </div>
                <p className="toggler--dark">Dark</p>

            </div>
        </nav>
    )
}
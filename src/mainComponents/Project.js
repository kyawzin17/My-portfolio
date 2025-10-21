import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Project() {

const [down1, setDown1]= useState(false);
const [down2, setDown2]= useState(false);
function dropdown(down, setDown) {
    if(down) {
        setDown(false);
    }else {
    setDown(true);
    }
}
    return (
        <section className="b-project b-section">
            <div className="sidebar-project">
                <h2>Projects</h2>
                <div onClick={() => dropdown(down1, setDown1)} className="project-item">
                    <h3>Restruent project</h3>
                    {down1 ? <FontAwesomeIcon className="dropdown-icon" icon={faCircleChevronUp} /> : <FontAwesomeIcon className="dropdown-icon" icon={faCircleChevronDown} />}
                </div>
                {down1
                 &&
                <ul className="dropdown-ul">
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                </ul>}
                <div onClick={() => dropdown(down2, setDown2)} className="project-item">
                    <h3>React.js project</h3>
                    {down2 ? <FontAwesomeIcon className="dropdown-icon" icon={faCircleChevronUp} /> : <FontAwesomeIcon className="dropdown-icon" icon={faCircleChevronDown} />}
                </div>
                {down2
                 &&
                <ul className="dropdown-ul">
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                </ul>}
            </div>
            <div className="view-project">

            </div>
        </section>
    )
}
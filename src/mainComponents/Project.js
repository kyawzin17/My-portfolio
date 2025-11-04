import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import {Resturent} from "../../public/Ep-1/bootstrap1.html"

export default function Project() {

const [item1, setItem1]= useState(false);
const [item2, setItem2]= useState(false);
const [phead, setPhead]= useState(true)

function item1Click() {
    setItem1(true);
    setItem2(false);
    setPhead(false);
}
function item2Click() {
    setItem1(false);
    setItem2(true);
    setPhead(false);
}
    return (
        <section className="b-project b-section">
            <div className="sidebar-project">
                <h2>Projects</h2>
                <hr />
                <ul className="project-ul">
                    <li onClick={item1Click} className={item1 ? "active" : "noActive"}>
                        <h3>Restruent project</h3>
                    </li>
                    <li onClick={item2Click} className={item2 ? "active" : "noActive"}>
                        <h3>Add project...</h3>
                    </li>
                </ul>
                {/* <div onClick={() => dropdown(down1, setDown1)} className="project-item">
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
                </ul>} */}
            </div>
            <div className="view-project">
                {phead && 
                    <div className="view-main">
                        <h1>This is My project!</h1>
                        <h2>Please, Click sidebar to view my project pages.</h2>
                    </div>
                }
                {item1 && 
                    <div className="view-item1">
                    <h2>Preview, My restaurant project!</h2>
                    <iframe 
                        src="/Ep-1/bootstrap1.html"
                        title="My restaurant project!"
                        className="view-restaurant"
                        ></iframe>
                    </div>
                }
            </div>
        </section>
    )
}
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject, faUtensils, faTree } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import {Resturent} from "../../public/Ep-1/bootstrap1.html"

export default function Project() {

const [item1, setItem1]= useState(false);
const [item2, setItem2]= useState(false);
const [phead, setPhead]= useState(true);
const [layout, setLayout]= useState(window.innerWidth);

window.addEventListener("resize", () => setLayout(window.innerWidth));

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
        <section className="b-project b-section tr">
            <div className="sidebar-project tr">
                <h2>{layout > 768 ? "Project" : <FontAwesomeIcon icon={faDiagramProject} size="lg" />}</h2>
                <ul className="project-ul tr">
                    <li onClick={item1Click} className={item1 ? "active" : "noActive"}>
                        <h3>{layout > 768 ? "Restaurant web" : <FontAwesomeIcon icon={faUtensils} size="lg" />}</h3>
                    </li>
                    <li onClick={item2Click} className={item2 ? "active" : "noActive"}>
                        <h3>{layout > 768 ? "Nature of tree" : <FontAwesomeIcon icon={faTree} size="lg" />}</h3>
                    </li>
                </ul>
            </div>
            <div className="view-project tr">
                {phead && 
                    <div className="view-main tr">
                        <h1>This is My project!</h1>
                        <h2>Please, Click sidebar to view my project pages.</h2>
                    </div>
                }
                {item1 && 
                    <div className="view-item1 tr">
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
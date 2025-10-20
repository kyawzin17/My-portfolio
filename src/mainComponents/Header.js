import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const [theme, setTheme] = useState(true);
    function themeChange() {
        setTheme(!theme);
    }
    return (
        <header className="header">
            <div className="h-inner">
                <div className="h-logo">
                    <span>Portfolio!</span>
                </div>
                <div className="h-center">
                    <button className="h-skills h-button">Skills</button>
                    <button className="h-about h-button">About</button>
                    <button className="h-profile h-button">Profile</button>
                    <button className="h-project h-button">Projects</button>
                    <button className="h-contact h-button">Contact</button>
                </div>
                <div onClick={themeChange} className="h-theme">
                    <div className="themeicon-container">
                        <FontAwesomeIcon className="sun-icon" icon={faSun} />
                        <FontAwesomeIcon className="moon-icon" icon={faMoon} />
                    </div>
                    
                    <div className={theme ? "theme-circle" : "theme-circle light"}>

                    </div>
                </div>
            </div>
        </header>
    )
}
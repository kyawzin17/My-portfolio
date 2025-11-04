import "./Header.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";

export default function Header({active, setActive}) {

    const [mode, setMode]= useState('');
    
    useEffect(() => {

        const storeTheme= localStorage.getItem("mode");
        if(storeTheme === "light") {
            document.documentElement.style.setProperty("--bg", "#F8F9FA");//#a6c1ee
            document.documentElement.style.setProperty("--color", "#000");
            document.documentElement.style.setProperty("--hcolor", "#14078dff");
            document.documentElement.style.setProperty("--pcolor", "rebeccapurple");//rebeccapurple
            setMode(storeTheme);
        }else {
            document.documentElement.style.setProperty("--bg", "#000000");
            document.documentElement.style.setProperty("--color", "#ffffff");
            document.documentElement.style.setProperty("--hcolor", "lawngreen");
            document.documentElement.style.setProperty("--pcolor", "lawngreen");
            setMode(storeTheme);
        }

    }, []);

    const scrollHandler= (id) => {
        const element= document.getElementById(id);
        setActive(id);
         if (element) element.scrollIntoView({behavior: "smooth"});
        // if(element) {
        //     const y= element.getBoundingClientRect().top + window.scrollY - offHeight;
        //     window.scrollTo({ top: y, behavior: "smooth",});
        // }
    }

    function themeChange() {
        if(mode === "light") {
            setMode("dark");
            localStorage.setItem("mode","dark");
            document.documentElement.style.setProperty("--bg", "#000000");
            document.documentElement.style.setProperty("--color", "#ffffff");
            document.documentElement.style.setProperty("--hcolor", "lawngreen");
            document.documentElement.style.setProperty("--pcolor", "lawngreen");
        
        }else {
            setMode("light"); 
           localStorage.setItem("mode","light");
            document.documentElement.style.setProperty("--bg", "#F8F9FA");//#a6c1ee
            document.documentElement.style.setProperty("--color", "#000");
            document.documentElement.style.setProperty("--hcolor", "#14078dff");
            document.documentElement.style.setProperty("--pcolor", "rebeccapurple");//rebeccapurple
        }
    }
    const section= [
      { id: "skills", component: "Skills"},
      { id: "about", component: "About"},
      { id: "profile", component: "Profile"},
      { id: "project", component: "Project"},
      { id: "contact", component: "Contact"},
    ];
    return (
        <header className="header">
            <div className="h-inner">
                <div className="h-logo">
                    <span>Portfolio!</span>
                </div>
                <div className="h-center">
                    {section.map((sec) => {
                        return <button onClick={() => scrollHandler(sec.id)} className={`h-button ${active === sec.id && "navactive"} ${sec.id}`}>{sec.component}</button>
                    })}
                    {/* <button className="h-skills h-button">Skills</button>
                    <button className="h-about h-button">About</button>
                    <button className="h-profile h-button">Profile</button>
                    <button className="h-project h-button">Projects</button>
                    <button className="h-contact h-button">Contact</button> */}
                </div>
                <div onClick={themeChange} className="h-theme">
                    <div className="themeicon-container">
                        <FontAwesomeIcon className="sun-icon" icon={faSun} />
                        <FontAwesomeIcon className="moon-icon" icon={faMoon} />
                    </div>
                    
                    <div className={mode === "light" ? "theme-circle light" : "theme-circle"}>

                    </div>
                </div>
            </div>
        </header>
    )
}
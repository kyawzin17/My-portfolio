import "./Header.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";

export default function Header({active, setActive}) {

    const [mode, setMode]= useState('');
    const [layout, setLayout]= useState(window.innerWidth);
    const [width, setWidth]= useState(0);
    const [left, setLeft]= useState(0);
    const btnRef= useRef({});

    const section= [
      { id: "skills", component: "Skills"},
      { id: "about", component: "About"},
      { id: "profile", component: "Profile"},
      { id: "project", component: "Project"},
      { id: "contact", component: "Contact"},
    ];
    const sectionPhone= [
      { id: "profile", component: "Profile"},
      { id: "about", component: "About"},
      { id: "project", component: "Project"},
      { id: "skills", component: "Skills"},
      { id: "contact", component: "Contact"},
    ];

    const resizeFun= () => {
        setLayout(window.innerWidth);
    }
    useEffect(() => {

        section.map((e) => {
            const tag= btnRef.current[e.id];
            if(tag.innerText.toLowerCase() === active) {
                setWidth(tag.offsetWidth - 13);
                setLeft(tag.offsetLeft + 2);
            }
    })
    },[active]);
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

    const scrollHandler= (e, id) => {
        const element= document.getElementById(id);
        const w= e.target.offsetWidth - 13;
        const l= e.target.offsetLeft + 2;
        setWidth(w);
        setLeft(l);
        setActive(id);
         if (element) {
            element.scrollIntoView({behavior: "smooth"});
            
         };
        // if(element) {
        //     const y= element.getBoundingClientRect().top + window.scrollY - offHeight;
        //     window.scrollTo({ top: y, behavior: "smooth",});
        // }
    }

    function themeChange() {
        window.addEventListener("resize", resizeFun);
        
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
    
    return (
        <header className="header tr">
            <div className="h-inner tr">
                <div className="h-logo tr">
                    <span>Portfolio! {layout}</span>
                </div>
                <div className="h-center tr">
                    {layout <= 575 ?
                    sectionPhone.map((sec) => {
                        return <button ref={(el) => btnRef.current[sec.id] = el} onClick={(e) => scrollHandler(e, sec.id)} className={`h-button tr ${active === sec.id && "navactive"} ${sec.id}`}>{sec.component}</button>
                    })
                    :
                    section.map((sec) => {
                        return <button ref={(el) => btnRef.current[sec.id] = el} onClick={(e) => scrollHandler(e, sec.id)} className={`h-button tr ${active === sec.id && "navactive"} ${sec.id}`}>{sec.component}</button>
                    })
                }
                    
                </div>
                <div style={{width: `${width}px`, marginLeft: `${left}px`}} className="section-bar tr"></div>
                <div onClick={themeChange} className="h-theme tr">
                    <div className="themeicon-container tr">
                        <FontAwesomeIcon className="sun-icon tr" icon={faSun} />
                        <FontAwesomeIcon className="moon-icon tr" icon={faMoon} />
                    </div>
                    
                    <div className={mode === "light" ? "theme-circle light tr" : "theme-circle tr"}>

                    </div>
                </div>
            </div>
        </header>
    )
}
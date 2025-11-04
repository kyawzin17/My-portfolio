import { useState } from "react";
import "./Skills.css";
import Htmlphoto from "../pictures/png-clipart-html-web-development-world-wide-web-consortium-javascript-webgl-5-angle-web-design-thumbnail.png";
import Cssphoto from "../pictures/download.jpg";
import Jsphoto from "../pictures/javascript-logo-web-application-scripting-language-web-development-web-banner-content-management-system-yellow-line-png-clipart.jpg";
import Reactphoto from "../pictures/react-logo-icon-11609374122d9vkbptqap.png";
import Bsphoto from "../pictures/download (1).jpg";
import Tailwind from "../pictures/download.png";

export default function Skills() {
    const cardArray= [
                        {id: 1, title: "Html" , skill: "85%", image: Htmlphoto},
                        {id: 2, title: "Css" , skill: "90%", image: Cssphoto},
                        {id: 3, title: "JavaScript" , skill: "80%", image: Jsphoto},
                        {id: 4, title: "React" , skill: "93%", image: Reactphoto},
                        {id: 5, title: "Bootstrap" , skill: "85%", image: Bsphoto},
                        {id: 6, title: "Tailwind" , skill: "30%", image: Tailwind}
    ]
    
    const [activeId, setActiveid]= useState(null);
    const [parsenage, setParsenage]= useState(0);
    
    return (
        <section className="b-skills b-section">
            <div className="skills-head">
                <h2>Skills</h2>
                <p>✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
            </div>
            <div className="skills-main">
                <div className="skills-bar">
                    <h2>My skills progress bar!</h2>
                    <ul>

                        <li>
                            <h4>Html</h4>
                            <div className="bar">
                                <div className="html-bar"></div>
                            </div>
                        </li>
                        <li>
                            <h4>Css</h4>
                            <div className="bar">
                                <div className="css-bar"></div>
                            </div>
                        </li>
                        <li>
                            <h4>JavaScript</h4>
                            <div className="bar">
                                <div className="js-bar"></div>
                            </div>
                        </li>
                        <li>
                            <h4>React.js</h4>
                            <div className="bar">
                                <div className="react-bar"></div>
                            </div>
                        </li>
                        <li>
                            <h4>Bootstrap css</h4>
                            <div className="bar">
                                <div className="bs-bar"></div>
                            </div>
                        </li>
                        <li>
                            <h4>Tailwind css</h4>
                            <div className="bar">
                                <div className="tw-bar"></div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="skills-hr"></div>
                <div className="skills-card">
                    {cardArray.map((card) => {

                        const radius=65; 
                        const target= parseInt(card.skill);
                            const strokeArea= 2 * 65 * Math.PI;
                            const number= parseInt(card.skill);
                            const offs= activeId === card.id ? strokeArea - (number / 100) * strokeArea : strokeArea;

                        return (
                            <div key={card.id} 
                                    className={`card ${card.title.toLowerCase()}`}>

                                <div onMouseOver={() => {
                                    setActiveid(card.id);
        let start= 0;
        const duration= 2000;
        const startTime= performance.now();
        // console.log("This is the startTime:", startTime)

        const animate= (currentTime) => {
            // console.log("This is the currentTime:", currentTime)
            const elapsed= currentTime - startTime;
            // console.log("This is currentTime-startTime:", elapsed)
            const progress= Math.min(Math.max(elapsed / duration, 0), 1);
            const current= Math.floor(progress * target);
            setParsenage(current);
            if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
                                }} 
                                        className="flip-inner">

                                    <div className={`flip-face font-face face-${card.title.toLowerCase()}`}>
                                        <span>{card.title}</span>
                                    </div>
                                    <div className="flip-face back-face">
                                        <header>{card.title}</header>
                                        <main>
                                            <svg width="150" height='150'>
                                                <defs>
                                                    <pattern id={`imagepattern-${card.id}`} 
                                                                x="0" 
                                                                 y="0" 
                                                                  patternUnits="userSpaceOnUse" 
                                                                   width="100" 
                                                                    height="100"
                                                                     style={{transform: "rotate(90deg) scale(-1,1)", borderRadius: "20px"}}>
                                                        <image href={card.image} width="50" height="50" x="0" y="0" />
                                                    </pattern>
                                                </defs>
                                                <circle className="svg-circle"
                                                        cx='75' 
                                                         cy='75' 
                                                          r={radius} 
                                                           stroke="#ee4908ff" 
                                                            strokeWidth="6" 
                                                             strokeLinecap="round"
                                                                fill={`url(#imagepattern-${card.id})`}
                                                                 strokeDashoffset={offs}
                                                                  strokeDasharray={strokeArea}
                                                                   style={{
                                                                    transition: "stroke-dashoffset 2s ease-in",
                                                                    transform: 'rotate(90deg) scale(-1,1)',
                                                                     transformOrigin: "50% 50%",
                                                                   }}/>
                                                <text id="progress-tr" x="50%" y="125" textAnchor="middle" fontSize="15" fill="white" fontFamily="Arial" dominantBaseline="middle">{parsenage}%</text>
                                            </svg>

                                        </main>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="card html-card"></div>
                    <div className="card css-card"></div>
                    <div className="card js-card"></div>
                    <div className="card react-card"></div>
                    <div className="card bs-card"></div>
                    <div className="card tl-card"></div> */}
                </div>
            </div>
        </section>
    )
}
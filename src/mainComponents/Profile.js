import "./Profile.css";
import myPhoto from "../pictures/myPortfolioPicture.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faFacebook, faViber } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from "react";

export default function Profile() {

    const text="I   am a fontend developer ";
    const [textDisplay, setTestDisplay]= useState("");
    useEffect(() => {
        let i= 0;
        const interval= setInterval(() => {
            setTestDisplay((val) => val + text[i])
                i++;

             if (i >= text.length-1) {
                clearInterval(interval);
            };
        }, 100);
        return () => clearInterval(interval);
    }, [])

    return (
        <section className="b-profile b-section tr">
                <div className="profile-left tr">
                    <h1>Hello,</h1>
                    <h2> I'm <span className="name-span">Kyaw Zin</span></h2>
                    <h3>{textDisplay} <span className="blink tr">#</span></h3>
                    {/* <h3>I can write Html, Css, JavaScript & React.js </h3> */}
                    <div className="icon-container tr">
                        <a href="https://github.com/kyawzin17" target="_blank" rel="noopener noreferrer" className="icon-a tr">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://facebook.com/reddragon1766" target="_blank" rel="noopener noreferrer" className="icon-a tr">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://t.me/@kyawzinwinei" target="_blank" rel="noopener noreferrer" className="icon-a tr">
                            <FontAwesomeIcon icon={faTelegram} size="lg" />
                        </a>
                        <a href="viber://chat?number=%2B959674114295" target="_blank" rel="noopener noreferrer" className="icon-a tr">
                            <FontAwesomeIcon icon={faViber} size="lg" />
                        </a>
                    </div>
                </div>
                <div className="profile-right tr">
                    <img className="my-photo tr" src={myPhoto} alt="my-photo" />
                </div>
            </section>
    )
}
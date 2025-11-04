import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faFacebook, faViber } from '@fortawesome/free-brands-svg-icons';
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {

    const form= useRef();
    const [send, setSend]= useState(false);
    const [name, setName]= useState('');
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");
    const [comf, setComf]= useState(false);
    const [err, setErr]= useState(null);



    function sendEmail(e) {
        e.preventDefault();
        if(!name && !email && !message) return;
        setSend(true);
        emailjs
        .sendForm('service_jfc56tu', 'template_geqcmal', form.current, {
            publicKey: "t819ArIyddtjlIAZA",
        })
        .then(
            () => {
                setName("");
                setEmail("");
                setMessage("");
                setComf(true);
                setSend(false);
                setErr(null);
            },
            (error) => {
                setComf(false);
                setSend(false);
                setErr(error.text);
            },
        );
    };

        const copyText= (text) => {
            navigator.clipboard.writeText(text);
            toast.success("Copied!");
        }
    return( 
    <section className="b-contact">
        <header className="contact-header">
            <h2>Contact Me</h2>
            <p>✦•┈๑⋅⋯ ⋯⋅๑┈•✦</p>
        </header>
        <div className="contact-body">
            <div className="contact-left">
                <div className="contact-leftinner">
                    <h2>Get in touch!</h2>
                <p>I'm currently open to work opportunities as a Fontend Developer. If you're looking for someone passionate about building responsive and user-friendly websites, feel free to reach out.
                    </p>
                
                <div className="email-div">
                    <Toaster position="top-center" />
                    <label for="email">Email:</label>
                    <span name="email" onClick={() => copyText("kyawzinwin23k@gmail.com")}>kyawzinwin23k@gmail.com</span>
                </div>
                
                <div className="phone-div">
                    <Toaster position="top-center" />
                    <label for="phone">Phone:</label>
                    <span name="phone" onClick={() => copyText("+95 9674114295")}>+95 9674114295</span>
                </div>
                </div>
            </div>
            <div className="contact-right">
                <form ref={form} className="right-form" onSubmit={sendEmail}>
                    <input type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Your name..."
                            className="input-name form-input"
                            id="name"
                            required/>
                    <br />
                    <input type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Your email..."
                            className="input-email form-input"
                            id="email"
                            required/>
                    <br />
                    <textarea type="text"
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                placeholder="Your messages..."
                                className="input-message form-input"
                                id="message"
                                required/>
                    <br />
                    {comf && <span className="suc-span">You sent a message to me!</span>}
                    {err && <span className="err-span">{err}!</span>}
                    <br />
                    {send
                    ?
                    <button className="send-btn" value="send" type="submit">Sending...</button>
                    :
                    <button className="send-btn" value="send" type="submit">Send</button>
    }
                </form>
            </div>
        </div>
        <footer className="contact-footer">
                        <a href="https://github.com/kyawzin17" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="https://facebook.com/reddragon1766" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://t.me/@kyawzinwinei" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <FontAwesomeIcon icon={faTelegram} size="lg" />
                        </a>
                        <a href="viber://chat?number=%2B959674114295" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <FontAwesomeIcon icon={faViber} size="lg" />
                        </a>
        </footer>
    </section>
    )
}
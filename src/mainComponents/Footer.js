import "./Footer.css";

export default function Footer() {

    return(
        <section className="b-footer">
            <div className="footer-div">
                <h2>My Learning Resources</h2>
                <h3>Websites</h3>
                <ul>
                    <li>W3 School website</li>
                    <li>Bootstrap Css website</li>
                    <li>Chat GPT-40, GPT-4.5</li>
                </ul>
                <h3>YouTube Channels</h3>
                <ul>
                    <li>MSquare Programming</li>
                    <li>Dgtech Myanmar</li>
                    <li>Creative Coder Myanmar</li>
                    <li>Some other Channels...</li>
                </ul>
                <h3>Books</h3>
                <ul>
                    <li>Sayar Ei Maung's "Professional-Web-Developer"</li>
                    <li>Saturngod's "Developer Intern"</li>
                </ul>
            </div>
        </section>
    )
}
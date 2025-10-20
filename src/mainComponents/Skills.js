import "./Skills.css";

export default function Skills() {
    const cardArray= [
                        {id: 1, title: "Html" , skill: "85%", image:""},
                        {id: 1, title: "Css" , skill: "90%", image:""},
                        {id: 1, title: "JavaScript" , skill: "80%", image:""},
                        {id: 1, title: "React.js" , skill: "93%", image:""},
                        {id: 1, title: "Bootstrap" , skill: "85%", image:""},
                        {id: 1, title: "Tailwind" , skill: "2%", image:""}
    ]
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
                        return (
                            <div key={card.id} className={`card ${card.title.toLowerCase()}`}>
                                <header>{card.title}</header>
                                <main className="card-div">
                                </main>
                                <footer>
                                    click For more
                                </footer>
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
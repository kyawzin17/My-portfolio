import "./About.css";
import aboutPhoto from "../pictures/myPortfolioPicture.png";

export default function About() {

    return (
        <section className="b-about b-section">
            <div className="photo-container">
                <svg className="svg-photo" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" width='100%' height='auto'>
                    <defs>
                        <filter id='shadow' x='-50%' y="-50%" width='200%' height='200%'>
                            <feDropShadow dx='0' dy='0' stdDeviation='5' floodColor="rgb(102,51,153)"/>
                       </filter>
                       <clipPath id='circleClip'>
                        <ellipse cx="125" cy='125' rx='80' ry='100'/>
                       </clipPath>
                    </defs>
                    <image x="25" y='30'  href={aboutPhoto} width='200' height='300' clipPath="url(#circleClip)" preserveAspectRatio="xMidYMidslice" />
                    <ellipse cx='125' cy="125" rx='80' ry='100' fill='none' stroke="rgb(102,51,153)" strokeWidth="4" filter="url(#shadow)"/>
                </svg>
                {/* <img className="about-photo" src={aboutPhoto} alt="For about photo!" /> */}
            </div>
            <div className="text-container">
                <h3> Who I'm?</h3>
                <p>
                    Hello, my name is Kyaw Zin Win, and I'm a fontend developer. I specialize in building modern, responsive websites using HTML, CSS, JavaScript, Bootstrap, and React.
                    I began learning web development in April 2024, starting on a mobile phone with the Replit app. Although I faced many limitations and challenges, I stayed committed, using books, YouTube, and online resources to keep improving my skills.
                    </p>
                    <p>
                    Now that I have a laptop, I can study and create projects more smoothly and effectively.
                    My ultimate goal is clear — to become a professional, international-level web developer. For me, web development is not only something I enjoy but also the foundation on which I’m building my future.
                </p>
                <p>
                    If you’d like to connect or collaborate, feel free to reach out via GitHub or Email.<span style={{fontSize: 30, padding: 3}}>&#128521;</span>
                </p>
            </div>
        </section>
    )
}
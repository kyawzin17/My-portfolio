
import "./Body.css";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";

export default function Body() {
    
    return (
        <section className="body">
            <Profile />
            <About />
            <Project />
            <Skills />
        </section>
    )
}
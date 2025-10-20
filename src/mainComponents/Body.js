
import "./Body.css";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";

export default function Body() {
    
    return (
        <section className="body">
            <Profile />
            <About />
            <Skills />
        </section>
    )
}
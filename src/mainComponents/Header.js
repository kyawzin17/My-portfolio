import "./Header.css";

export default function Header() {

    return (
        <header className="header">
            <div className="h-inner">
                <div className="h-center">
                    <button className="h-skills h-button">Skills</button>
                    <button className="h-about h-button">About</button>
                    <button className="h-profile h-button">Profile</button>
                    <button className="h-project h-button">Projects</button>
                    <button className="h-contact h-button">Contact</button>
                </div>
            </div>
        </header>
    )
}
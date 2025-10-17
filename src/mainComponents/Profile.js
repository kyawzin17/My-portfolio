import "./Profile.css";
import myPhoto from "../pictures/myPortfolioPicture.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faGoogle, faViber } from '@fortawesome/free-brands-svg-icons';

export default function Profile() {

    return (
        <section className="b-profile b-section">
                <div className="profile-left">
                    <h1>Hello,</h1>
                    <h2> I'm <span className="name-span">Kyaw Zin</span></h2>
                    <h3>I'm a fontend developer #</h3>
                    {/* <h3>I can write Html, Css, JavaScript & React.js </h3> */}
                    <div className="icon-container">
                        <a href="" target="_blank" rel="noopener noreferrer" className="icon-a">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="icon-a">
                            <FontAwesomeIcon icon={faGoogle} size="lg" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="icon-a">
                            <FontAwesomeIcon icon={faTelegram} size="lg" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="icon-a">
                            <FontAwesomeIcon icon={faViber} size="lg" />
                        </a>
                    </div>
                </div>
                <div className="profile-right">
                    <img className="my-photo" src={myPhoto} alt="my-photo" />
                </div>
            </section>
    )
}
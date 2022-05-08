import LinkedInIcon from "../../assets/linkedin-box-line.png"
import GithubIcon from "../../assets/github-line.png";
import MailIcon from "../../assets/mail-line.png"
import TwitterIcon from "../../assets/twitter-line.png"
import "./index.css"

export function Footer(){
    return(
        <div className="footer">
            <a href="https://www.linkedin.com/in/snehit-paunikar/" target="_blank" rel="noreferrer noopener">
                <img src={LinkedInIcon} alt="LinkedinIcon" className="icon"/>
            </a>
            <a href="https://github.com/Redarcher9" target="_blank" rel="noreferrer noopener">
                <img src={GithubIcon} alt="GithubIcon" className="icon"/>
            </a>
            <a href="mailto: snehit.86@gmail.com" target="_blank" rel="noreferrer noopener" >
                <img src={MailIcon} alt="MailIcon" className="icon"/>
            </a>
            <a href="https://twitter.com/thisisSnehit" target="_blank" rel="noreferrer noopener">
                <img src={TwitterIcon} alt="TwitterIcon" className="icon"/>
            </a>
        </div>
    );
}
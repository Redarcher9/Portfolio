import ExternalLink from "../../assets/external-link-line.png";
import Github from "../../assets/githubLink.png"
import "./index.css"
export function Projecttile(props){
    return(
        <div className="projecttile">
            <div className="projecttilebar">
                    {props.githubLink && <a href={props.githubLink} target="_blank" rel="noreferrer noopener">
                        <img className="LinkCss" src={Github} alt="githublink"></img>
                    </a>
                    }   
                    <a href={props.link} target="_blank" rel="noreferrer noopener">
                        <img className="LinkCss" src={ExternalLink} alt="Externallink"></img>
                    </a>
             </div>
             <h1>
                     {props.title}
             </h1>
             <p>
                     {props.description}
             </p>
        </div>
    )
}
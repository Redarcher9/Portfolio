import { Projecttile } from "../../components";
import {Projects} from "../../constants/projects"
import "./index.css";

export function Work(){
    return(
        <div className="work">
            {Projects.map((project)=>{
                return(
                <Projecttile title={project.title} link={project.link} description={project.description}/>
                )
            })
            }
        </div>
    );
}
import {Blogs} from "../../constants/blogs"
import "./index.css"
export function Blog(){

    return(
        <div className="blog">
            {Blogs.map((article)=>{
                return(
                <div className="article">    
                    <p className="articletitle">{article.Date}</p>
                    <a href={article.link} target="_blank" rel="noreferrer noopener" className="articletitle">
                        {article.title}
                    </a>
                </div>    
            )
            })}
        </div>
    );
}
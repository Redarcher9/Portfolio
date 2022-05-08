import profile from '../../assets/Picture.png'
import './Home.css'
export function Home(){
    return(
        <div className='home'>
            <div className='intro'>
                <img src={profile} className='picture' alt="profile_picture"/>
                <span className='introtext'>
                    Hello, I'm <br></br>
                    <span className='namehighlight'>SNEHIT!</span><br></br>
                    <br></br>
                    I love building products using technology. I have experience <br></br>
                    in developing production grade full stack applications. I also <br></br>
                    like to contribute to open source projects and write technical<br></br>
                    blogs.Currently, I am working as a Software Engineer at Shell.<br></br>
                    <br></br>
                    I am familiar with:<br></br>
                    <br></br>
                    Languages: JavaScript, TypeScript<br></br>
                    Frameworks: ReactJS, Express<br></br>
                    Databases: MongoDb, PostGreSql<br></br>
                    Other Techlogies: Docker, Git, Azure Cloud Services<br></br>
                    
                    <br></br>
                    Feel free to get in touch with me.
                </span>
            </div>
        </div>
    );
}
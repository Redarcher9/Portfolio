import { NavLink,Outlet} from "react-router-dom";
import Logo from "../../assets/logo.png"
import './index.css';

export function Navbar(){
    return(
        <div >
            <nav className="navbar">
                        <div >
                             <NavLink className={({ isActive })=> isActive ?"a-active":"a"} to="/">
                                 <img src={Logo} alt="logo" className="logocss"></img>
                             </NavLink>
                        </div>
                        <div style={{marginRight:"250px"}}>
                            <NavLink className={({ isActive })=> isActive ?"a-active":"a"} to="/work">Work</NavLink>
                            <NavLink className={({ isActive })=> isActive ?"a-active":"a"} to="/blog">Blog</NavLink>
                        </div>
                        
            </nav>
            <Outlet />
        </div>
        
    )
}
import { Link } from "react-router-dom";
import '../styles/NavBar.css'
function NavBar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to = "/"></Link>
            </div>
            <div className="navbar-links"><Link to = "/" className="nav-link">Movie Library</Link>
            </div>
            <div className="navbar-links"><Link to = "/" className="nav-link">Home</Link>
            </div>
            <div className="navbar-links"><Link to = "/favorites" className="nav-link">Favorites</Link>
            </div>
            <div className="navbar-links"><Link to = "/logIn" className="nav-link">Log Out</Link>
            </div>
        </nav>
        </>
    )
}

export default NavBar
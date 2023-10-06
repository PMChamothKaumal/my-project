import { Link } from "react-router-dom";

const NavBar = () =>{
return(
    <nav>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/articles">articles</Link>
        </li>
    </nav>
)
}
export default NavBar;
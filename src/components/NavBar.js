import { Link } from 'react-router-dom';


const NavBar = () => {

    // Using link instead of hrefs...

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
                
            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/pricing">Pricing</Link>
            </li>
    
        </ul>
    )
}

export default NavBar;
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/about">About Page</Link>
            <Link to="/contact">Contact Page</Link>
        </div>

    )
}

export default NavBar
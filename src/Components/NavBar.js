import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="NavBar">
            <Link className="Link" to="/">Home Page</Link>
            <Link className="Link" to="/about">About Page</Link>
            <Link className="Link" to="/contact">Contact Page</Link>
            <Link className="Link" to="/signup">Sign Up</Link>
        </div>


    )
}

export default NavBar
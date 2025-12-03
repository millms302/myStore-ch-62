import { Link } from 'react-router-dom'

import './Navbar.css'


function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <h1>My Online Store</h1>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <Link to={"/"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/catalog"} className="nav-link">Catalog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/about"} className="nav-link">About</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

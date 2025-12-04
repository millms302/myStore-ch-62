import { useContext } from 'react'
import GlobalContext from '../state/globalContext'
import { Link } from 'react-router-dom'

import './Navbar.css'
import { IconShoppingCartCog } from '@tabler/icons-react';

function Navbar() {
  const user = useContext(GlobalContext).user
  const cart = useContext(GlobalContext).cart
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <h1>My Online Store</h1>
            </div>
            <div className="navbar-menu d-flex justify-between">
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
                    <li className="nav-item">
                        <Link to={"/admin"} className="nav-link">Admin</Link>
                    </li>

                </ul>

              <div className='d-flex align-items-center gap-2'>
                <div class="text-white">{user.name}</div>
                <div class="text-white">
                    <IconShoppingCartCog size={52} stroke={1} /> {cart.length}</div>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

import { useContext } from 'react'
import GlobalContext from '../state/globalContext'
import { Link } from 'react-router-dom'

import './Navbar.css'
import { IconShoppingCartCog } from '@tabler/icons-react';

function Navbar() {
  const user = useContext(GlobalContext).user
  const cart = useContext(GlobalContext).cart

  console.log(cart)

  function getTotalItems() {
    let sum = 0;

    for(let i=0; i<cart.length; i++){
        sum = sum + cart[i].quantity;
    }
    return sum;
  }
  return (
    <nav className="navbar  w-100"  data-bs-theme="dark">
        <div className="navbar-container d-flex justify-content-between align-items-center w-100">
            <div className="navbar-brand">
                <h1>Crazy Mike's Shred Sticks</h1>
            </div>
            <div className="navbar-menu d-flex">
                <ul className="navbar-nav d-flex flex-row ">
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
                    <Link to={"/cart"} className='btn btn-dark'>
                        <IconShoppingCartCog size={36} stroke={1} /> {getTotalItems()}
                    </Link>
                </div>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

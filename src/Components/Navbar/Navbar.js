import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../../Assets/Fullstack academy Logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
function Nav({token, isLoggedOut}) {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
        <div className='site-title'>
         <img src={logo} alt="app logo"/>
        <h1 className='site-name'>Stranger's Things</h1>
        </div>

        <div className='navbar-remove'>
        <ul className='navbar-links'>
          <li >
          <Link to="/home">HOME</Link>
          </li>
          <li>
          <Link to="/posts">POSTS</Link>
          </li>
          <li>
          <Link to="/profile">PROFILE</Link>
          </li>
          <li>
          {/* <Link to="/login">LOG IN / LOG OUT</Link> */}
          {
            token ? (
              <Link to='/' onClick={() => isLoggedOut()}>LOGOUT</Link>
            ) : (
              <>
              <Link to='/login'>LOGIN</Link>
              </>
            )
          }
          </li>
        </ul>
        </div>
       
        <div className='navbar-smallscreen'>
         <GiHamburgerMenu color='#fff' fontSize={27} onClick ={() => setToggleMenu(true)} className='hamburger'/>
         { toggleMenu && (
          <div className='navbar-smallscreen-overlay'>
            <GiHamburgerMenu  className="menu-close" fontSize={27} onClick={() => setToggleMenu(false)}/>
            <ul className='navbar-smallscreen-link'>
          <li className='active'>
          <Link to="/home">HOME</Link>
          </li>
          <li>
          <Link to="/posts">POSTS</Link>
          </li>
          <li>
          <Link to="/profile">PROFILE</Link>
          </li>
          <li>
          {/* <Link to="/login">LOG IN / LOG OUT</Link> */}
          {
            token ? (
              <Link to='/' onClick={() => isLoggedOut()}>LOGOUT</Link>
            ) : (
              <>
              <Link to='/login'>LOGIN</Link>
              </>
            )
          }
          </li>
        </ul>
          </div>
         )}
        </div>
    </nav>
  )
}

export default Nav
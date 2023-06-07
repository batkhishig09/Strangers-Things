import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

function Nav() {
  return (
    <nav className='navbar'>
        <h1 className='site-title'>Stranger's Things</h1>
        <ul>
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
          <Link to="/login">LOG IN / LOG OUT</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
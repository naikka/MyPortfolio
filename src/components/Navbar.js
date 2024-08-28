import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='rightside'>
        <Link to="/"> Home</Link>
        <Link to="/"> About</Link>
        <Link to="/"> Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;
import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <nav>
      <Link style={navStyle} to="/">
      <h3>Logo</h3>
      </Link>
      <ul className="nav-ops">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/shop'>
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to='/topics'>
          <li>Topic</li>
        </Link>
      </ul>
    </nav>
  )
}

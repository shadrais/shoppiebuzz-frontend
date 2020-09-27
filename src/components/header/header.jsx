import React from 'react';
import './header.css';

const Header = () => {
    return (
        
        <nav className="navbar">
          <h3>Logo</h3>
          <ul className="navlinks">
            <li >
              Login
            </li>
            <li>
              SignUp
            </li>
          </ul>
        </nav>
    );
}

export default Header;
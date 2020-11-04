import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        
        <nav className="navbar">
          <h3>Logo</h3>
          <ul className="navlinks">
            <li >
             <Link to='/login'>
              Login
             </Link> 
            </li>
            <li >
             <Link to='/register'>
              Register
             </Link> 
            </li>
          </ul>
        </nav>
    );
}

export default Header;
import React from 'react';
// import SearchBar from './SearchBar';
import "./Navbar.css";

const Navbar = () => {
  return (

            <nav>
            <container>
            <h1 className='header-title'>Noted.</h1>

                <ul className='nav-items'>
                    <li>Sign up</li>
                    <li>About</li>
                    <li>Public Notes</li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                </container>
            </nav>

  );
}

export default Navbar;
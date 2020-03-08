import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <header className='navbar__logo'>
        <h1>
          <a href='/'>Crazy Ramen</a>
        </h1>
      </header>
    </div>
  );
};

export default Navbar;

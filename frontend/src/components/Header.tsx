import React from 'react';
import '../styles/header.scss'

const Header = () => {
    return (
      <header className='header'>
        <div className='background'></div>
        <nav className='nav'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
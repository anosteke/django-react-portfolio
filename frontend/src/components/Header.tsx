import React from 'react';
import '../styles/header.scss'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

    return (
      <header className='header'>
        <div className='icons'> 
          
          <img className='icon' src='https://i.imgur.com/vKiNRio.png'></img> 
          <img className='icon' src='https://i.imgur.com/gf54M4U.png'></img> 
          <img className='icon' src='https://i.imgur.com/RfoPaD6.png'></img> 
        </div>
    
        <div className='background'></div>
        <nav className='nav'>
          <button className="header-button font-bold" onClick={() => navigate('/')}>Home</button>
          <button className="header-button font-bold" onClick={() => navigate('/resumes')}>Resume</button>
          <button className="header-button font-bold" onClick={() => navigate('/about')}>About</button>
        </nav>
      </header>
    );
  };
  
  export default Header;
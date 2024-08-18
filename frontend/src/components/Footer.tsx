import React from 'react';
import '../styles/footer.scss'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

    return (
      <footer className='footer'>
        <div className='footer-line'></div>
        <div className='categories font-extrabold'>
            <a href={'/home'} >Home</a>
            <a href={'/resumes'}>Resume</a>
            <a href={'/about'}>About</a>
            <a href={'https://www.linkedin.com/in/pierre-raphaël-wozny/'}  target="_blank">Linkedin</a>
            <a href={'https://github.com/anosteke'}  target="_blank">GitHub</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
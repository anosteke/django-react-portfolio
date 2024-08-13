import React from 'react';
import '../styles/footer.scss'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

    return (
      <footer className='footer'>
        <div className='footer-line'></div>
        <div className='categories font-extrabold'>
            <a>Home</a>
            <a>Resume</a>
            <a>About</a>
            <a>Linkedin</a>
            <a>GitHub</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";
import belilogo from '../slike/Wonta Logo1 bela-01 1.png'
import facebookicon from '../slike/footerikonice/🦆 icon _circle facebook_.png'
import instagramicon from '../slike/footerikonice/Subtract.png'
import linkedinicon from '../slike/footerikonice/🦆 icon _circle linkedin_.png'
import behanceicon from '../slike/footerikonice/🦆 icon _rounded behance_.png'
import tictockicon from '../slike/footerikonice/ticktock.png'
import telegramicon from '../slike/footerikonice/Vector.png'

function Footer() {
  return (
    <div className='bojafootera'>
   <section className='footer'>
     <div className='footer-content'>
      <img className='belilogo' src={belilogo} alt='belilogo'></img>
     </div>
     <div className='footer-content'>
      <ul>
        <li><Link to='/about-us'>About us</Link></li>
        <li><Link to='/our-work'>Our work</Link></li>
        </ul>
     </div>
     <div className='footer-content'>
     <ul>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
     </div>
     <div className='footer-content'>
     <ul>
     <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Order</Link></li>
        </ul>
     </div>
     <div className='footer-content'>
     <ul>
        <li>Do you have an idea?</li>
        <li>Contact Us</li>
        <li>office@wontastudio.com</li>
        </ul>
     </div>
   </section>
   <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 1920 6" fill="none">
  <path d="M0 3L1920 2.99983" stroke="white" stroke-width="3" stroke-linecap="round"/>
   </svg>
   <div className='ikonice'>
   <a href='https://www.tiktok.com/@wontastudio'>
    <img src={tictockicon} alt='tictock'></img>
    </a>
    <a href='https://www.linkedin.com/company/wontastudio'>
    <img src={linkedinicon} alt='linkedin'></img>
    </a>
    <a href='https://www.facebook.com/wontastudio23'>
    <img src={facebookicon} alt='facebook'></img>
    </a>
     <a href='https://www.instagram.com/wontastudio/'>
    <img src={instagramicon} alt='instagram'></img>
    </a>
    <a href='https://www.behance.net/wontastudio'>
    <img src={behanceicon} alt='behance'></img>
    </a>
    <a href='https://t.me/wontastudio'>
    <img src={telegramicon} alt='telegram'></img>
    </a>
   </div>
   <p className='copyright'>All rights reserved © 2023 Wonta Studio.</p>
  </div>
  )
}

export default Footer;

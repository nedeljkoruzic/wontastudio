import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import "./Navbar2.css";
import logozaheder from '../slike/logo za heder.png'
const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  isOpen?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
  return (
    
    <div className="Navbar">
      <a href="/">
        <img id="nav-logo" src={logozaheder} alt="logonav"/>
      </a>
      <div className={`nav-items ${isOpen && "open"}`}>
             
      <NavLink activeClassName='active' to='/about-us'>ABOUT US</NavLink>          
      <NavLink activeClassName='active' to='/our-work'>OUR WORK</NavLink>           
      <NavLink activeClassName='active' to='/services'>SERVICE</NavLink>
      <NavLink activeClassName='active' to='/contact'>CONTACT</NavLink>    
      <NavLink activeClassName='active' to='/blog'>BLOG</NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      <Link to='/contact' className="nav-dugme">ORDER</Link>   

    </div>
  );
};

export default Navbar2;

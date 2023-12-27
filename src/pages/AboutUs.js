import React from 'react'
import { useEffect } from 'react';
import Navbar2 from '../components/Navbar2'
import Abouthero from '../components/Abouthero';
import Footer from '../components/Footer';
function AboutUs() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
          <Navbar2/>
          <Abouthero/>
          <Footer/>
    </div>
  )
}

export default AboutUs;

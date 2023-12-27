import React from 'react'
import { useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Tabs3 from '../components/Tabs3'
function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <Navbar2/>
      <Tabs3/>
      <Footer/>
    </div>
  )
}

export default Contact;

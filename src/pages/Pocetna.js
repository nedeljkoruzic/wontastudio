import { useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CetiriVidea from '../components/CetiriVidea'
import OurProjects from '../components/OurProjects'
import Contactpocetna from '../components/Contactpocetna'
function Pocetna() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
       <Navbar2/>
      <Hero/>
      <CetiriVidea/>
      <OurProjects/>
      <Contactpocetna/>
      <Footer/>
    </div>
  )
}

export default Pocetna

import { useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import Tabs2 from '../components/Tabs2'
import Footer from '../components/Footer'
function OurWork() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <Navbar2/>
      <Tabs2/>
      <Footer/>
    </div>
  )
}

export default OurWork

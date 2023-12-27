import { useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import Tabs from '../components/Tabs'
import Footer from '../components/Footer'
function Services() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <Navbar2/>
      <Tabs/>
     <Footer/>
    </div>
  )
}

export default Services

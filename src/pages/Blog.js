import { useEffect } from 'react';
import Navbar2 from '../components/Navbar2'
import Bloghero from '../components/Bloghero'
function Blog() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
     <Navbar2/>
     <Bloghero/>
    </div>
  )
}

export default Blog

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pocetna from './pages/Pocetna';
import About from "./pages/AboutUs"
import Work from "./pages/OurWork"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Cooperation from "./pages/Cooperation"
import Blog from "./pages/Blog"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Pocetna/>} />
      <Route path='about-us' element= {<About/>} />
      <Route path='our-work' element= {<Work/>} />
      <Route path='services' element= {<Services/>} />
      <Route path='contact' element= {<Contact/>} />
      <Route path='Cooperation' element= {<Cooperation/>} />
      <Route path='blog' element= {<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

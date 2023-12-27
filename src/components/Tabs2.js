import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Flexbox from './Flexbox';
import Flexbox2 from './Flexbox2';
import Flexbox3 from './Flexbox3';
import './Tabs2.css'
import portfolio from '../slike/Frame 124.webp'
import portfoliomob from '../slike/portfoliomob.webp'
function Tabs2() {


    const [toggle, setToggle] = useState(1);
        const updateToggle = (index) => {
            setToggle(index);
        }

  return (
    <div className='portfoliocontent2'>
       <img className='portfolioslika' src={portfolio} alt='portfolio' />
       <img className='portfolioslikamob' src={portfoliomob} alt='portfoliomob' />
              <div className='portfoliocontent'>
      <Link to='/Contact' className='dvadugmeta'>ORDER</Link>
      <Link to='/Contact' className='dvadugmeta'>COOPERATION</Link>
      </div>
        <div className='tridugmeta2'>
        <Link className='flex-fill' activeClassName='active'  onClick={() => updateToggle(1)}>GRAPHIC DESIGN</Link>
        <Link className='flex-fill' activeClassName='active'  onClick={() => updateToggle(2)}>WEB DESIGN</Link>
        <Link className='flex-fill' activeClassName='active'  onClick={() => updateToggle(3)}>VIDEO EDITING</Link>
        </div>
      
        <div className={ toggle === 1 ? 'show-content' : 'content'}>
             <Flexbox/>
        </div>
        <div className={ toggle === 2 ? 'show-content' : 'content'}>
             <Flexbox2/>
        </div>
        <div className={ toggle === 3 ? 'show-content' : 'content'}>
             <Flexbox3/>
      </div>
   

    </div>
  )
}

export default Tabs2;
import React from 'react'
import { useState } from 'react';
import VideoEditing from './VideoEditing';
import GraphicDesign from './GraphicDesign';
import WebDesign from './WebDesign';
import WebDevelopment from './WebDevelopment';
import { Link } from 'react-router-dom';
import './Tabs.css'
import service1 from '../slike/service naslovna 1980-01 2.webp'
import servicemob from '../slike/servicemob.webp'
function Tabs() {


    const [toggle, setToggle] = useState(1);
        const updateToggle = (index) => {
            setToggle(index);
        }

  return (
    <div className='portfoliocontent2'>
              <img className='serviceheroimg' src={service1} alt='servicemainimg'/>
              <img className='serviceheroimgmob' src={servicemob} alt='servicemainimgmob'/>
        <div className='tridugmeta2'>
        <Link exact className='flex-fill' activeClassName='active' onClick={() => updateToggle(1)}>GRAPHIC DESIGN</Link>
        <Link exact className='flex-fill' activeClassName='active' onClick={() => updateToggle(2)}>WEB DESIGN</Link>
        <Link exact className='flex-fill' activeClassName='active' onClick={() => updateToggle(3)}>WEB DEVELOPMENT</Link>
        <Link exact className='flex-fill' activeClassName='active' onClick={() => updateToggle(4)}>VIDEO EDITING</Link>

        </div>
      
        <div className={ toggle === 1 ? 'show-content' : 'content'}>
             <GraphicDesign/>
        </div>
        <div className={ toggle === 2 ? 'show-content' : 'content'}>
             <WebDesign/>
        </div>
        <div className={ toggle === 3 ? 'show-content' : 'content'}>
             <WebDevelopment/>
      </div>
      <div className={ toggle === 4 ? 'show-content' : 'content'}>
             <VideoEditing/>
      </div>


    </div>
  )
}

export default Tabs;

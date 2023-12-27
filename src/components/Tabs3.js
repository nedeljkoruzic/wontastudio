import React from 'react'
import { useState } from 'react';
import GraphicContactImg2 from './GraphicContactImg'
import VideoContactImg2 from './VideoContactImg'
import WebDesignContactImg2 from './WebDesignContactImg'
import ContactUsContact2 from './ContactUsContact';
import ContactCooperation from './ContactCooperation';
import ContactWebsite from './ContactWebsite'
import ContactGraphic from './ContactGraphic'
import ContactVideo from './ContactVideo'
import { Link } from 'react-router-dom';
import './Tabs.css'

function Tabs3() {


    const [toggle, setToggle] = useState(1);
        const updateToggle = (index) => {
            setToggle(index);
        }

  return (
    <div className='portfoliocontent2'>
<div className={ toggle === 1 ? 'show-content' : 'content'}>
             <GraphicContactImg2/>
        </div>
        <div className={ toggle === 2 ? 'show-content' : 'content'}>
             <WebDesignContactImg2/>
        </div>
        <div className={ toggle === 3 ? 'show-content' : 'content'}>
             <VideoContactImg2/>
      </div>
      <div className={ toggle === 4 ? 'show-content' : 'content'}>
             <ContactUsContact2/>
      </div>

        <div className='tridugmeta2'>
        <Link className='flex-fill' activeClassName='active' onClick={() => updateToggle(1)}>GRAPHIC DESIGN</Link>
        <Link className='flex-fill' activeClassName='active' onClick={() => updateToggle(2)}>WEBSITE</Link>
        <Link className='flex-fill' activeClassName='active' onClick={() => updateToggle(3)}>VIDEO EDITING</Link>
        <Link className='flex-fill' activeClassName='active' onClick={() => updateToggle(4)}>COOPERATION</Link>

        </div>
      
        <div className={ toggle === 1 ? 'show-content' : 'content'}>
             <ContactGraphic/>
        </div>
        <div className={ toggle === 2 ? 'show-content' : 'content'}>
             <ContactWebsite/>
        </div>
        <div className={ toggle === 3 ? 'show-content' : 'content'}>
             <ContactVideo/>
      </div>
      <div className={ toggle === 4 ? 'show-content' : 'content'}>
             <ContactCooperation/>
      </div>


    </div>
  )
}

export default Tabs3;
import React from 'react'
import pocetna from '../video/aaaaaaaaaa.mp4'
import pocetna2 from '../slike/Mask group (1).webp'
import astronaut from '../slike/astronaut.webp'
import astronautmob from '../slike/aboutuspocetnamob.webp'
import TextSpan from './TextSpan';
import { Link } from 'react-router-dom';
import "./Hero.css";

function Hero() {
  const recenica2 = "Our Services".split("");
  return (
    <div className='video'>
   <div>
    <video className='pocetnaslika' src={pocetna} autoPlay muted />
    <img className='pocetnaslika2' alt='pocetnaslikamobilni' src={pocetna2} autoPlay muted />

    <div className='heroaboutus'>
      <img className='astronautimg' src={astronaut} alt='astronautpocetna'/>
      <img className='astronautmob' src={astronautmob} alt='astronautpocetnamob'/>
      <h2 className='astronauttxt'>
      Welcome to Wonta Studio - Your destination
for top-notch design and digital creativity!
Our agency represents a blend of expertise,
innovation, and dedication that brings your 
digital visions to life. With years of experience 
in the industry, we are your reliable partner for 
all things related to graphic design, 
web development, web design, and video
editing. 
      </h2>
      <Link to='/AboutUs' className='astronautdugme'>Learn More</Link>
    </div>
   </div>
   <div className='ourservivetext'>
   {recenica2.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
   </div>
   
    </div>
   

  )
};

export default Hero;

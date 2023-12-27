import React from 'react'
import './OurProjects.css'
import TextSpan from './TextSpan';
import project from '../slike/32445 1.webp'

function OurProjects() {
    const recenica3 = "Our Projects".split("");
  return (
    <div>
      <div className='ourprojectstext'>
   {recenica3.map((letter,index)=> {
      return (
        <TextSpan key={index}>
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
   </div>
   <img className='projectslika' src={project} alt='projectslika'></img>

   <div className='rowtext'>
    <div className='tritext'>
        <h2>Elena M.</h2>
        <p>To anyone looking for a partner for website
development, I highly recommend this 
agency. Not only will your expectations be 
met, but they will also be exceeded. Thank 
you for the outstanding work!</p>
    </div>
    <div className='tritext'>
        <h2>David A.</h2>
        <p>I've collaborated with them on several 
projects, and the results have always 
been outstanding. Fast communication, 
careful attention to my requirements, 
and the creative ability to turn my vision 
into reality are just some of the reasons 
why I highly recommend them.</p>
    </div>
    <div className='tritext'>
        <h2>Lars K.</h2>
        <p>First and foremost, what I liked was their
dedication to the project. A team of 
experts worked with us step by step, 
listening to our ideas and providing us 
with advice on how to best implement 
them. </p>
    </div>
   </div>
    </div>
  )
}

export default OurProjects;

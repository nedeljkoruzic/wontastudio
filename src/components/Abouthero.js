import React from 'react'
import { Link } from 'react-router-dom';
import TextSpan from './TextSpan';
import './Abouthero.css'
import asmoon from '../slike/aboutisecena.webp'
import asmoonmob from '../slike/aboutusmob.webp'
import projects from '../slike/32445 1.webp'

function Abouthero() {
const sentence = "What We Do".split(""); 
const recenica = "Why Choose Us".split("");
  return (
    <>
    <img className='aboutmainimg' alt='asmoon' src={asmoon}></img>
    <img className='aboutmainimgmob' alt='asmoon' src={asmoonmob}></img>
      <div>
      <h3 className='h3tekst'>Your Creative Partner for Design and Development!</h3>
      <p className='ptekst'>We are a young, dynamic company with experts who bring over 10 years of experience in graphic design, 
web development, web design, and video editing. Our passion and dedication to creating outstanding 
digital experiences set us apart as leaders in the industry.</p>
</div>
    <div className='App'>
     {sentence.map((letter,index)=> {
      return (
        <TextSpan key={index}>
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     <div className='dverecenice'>
     <p className='ptekst'>Our team of creative designers works on <br></br>
transforming your ideas into visually captivating <br></br>
concepts. From logos, branding, and marketing <br></br>
material design to illustrations and packaging, <br></br>
our range of services covers everything you need<br></br>
to grab attention and leave a lasting impression.</p>
<p className='ptekst'>Aesthetics and functionality converge in our <br></br>
approach to web design. We approach each <br></br>
project individually, focusing on user experience <br></br>
to create attractive, intuitive, and responsive <br></br>
web pages that will leave your visitors in awe.</p>
</div>
<div className='dverecenice'>
     <p className='ptekst'>Our web development experts are masters at <br></br>
creating functional, scalable, and secure websites<br></br> 
and applications. We not only work on crafting a <br></br>
web presence that meets your current needs but <br></br>
also plan for the future, allowing you to grow and <br></br>
expand seamlessly.</p>
<p className='ptekst'>Our video editing team transforms raw footage<br></br>
into stunning video clips. Whether it's <br></br>
commercials, promotions, guides, or any other <br></br>
type of video content, we provide professional <br></br>
editing and post-production that will make your <br></br>
stories unforgettable.</p>
</div>
<h2 className='h2tekst'>At Wonta Studio, every project is a unique story. <br></br>
We understand that each client is unique, so we <br></br>
create customized solutions that reflect your needs,<br></br>
values, and goals. Our collaboration with you isn't <br></br>
just a business relationship, it's also an opportunity <br></br>
for a creative partnership.
</h2>
<img className='projectslika' src={projects} alt='projectslika'></img>
{recenica.map((letter,index)=> {
      return (
        <TextSpan key={index}>
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     <div className='donjitekst'>
     <h2 className='h2tekst'>Your success is our priority, and we work with you to achieve outstanding results.
     Our team consists of experts with years of industry experience.
     We take pride in our creative approach and original solutions.
     Every project undergoes a rigorous quality control process.
</h2>

<h2 className='h2tekst'>Build a digital experience with us that will set you apart and
enable you to achieve your business goals. Contact us today
to embark on a journey towards creating top-notch projects.
</h2>
<h1 className='h1tekst'>Wonta Studio - Where Creativity Becomes Reality.</h1>
</div>
<div className='donjidugmici'>
      <Link to='/Contact' className='dvadugmetadonjalevo'>ORDER</Link>
      <Link to='/Contact' className='dvadugmetadonja'>COOPERATION</Link>
      </div>
    </div>
    </>
  )
  
}

export default Abouthero;

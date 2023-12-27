import React from 'react'
import { Link } from 'react-router-dom';
import './GraphicDesign.css'
import TextSpan from './TextSpan';
import grupa8 from '../slike/Group 8.webp'

function WebDesign() {
  const site = "site design".split("");
  const maintenance = "maintenance".split("");
  const redesign = "and redesign".split("");
  const ui = "ui/ux design".split("");
  return (
    <div>
             {site.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
      <h3 className='pitanjegd'>Creativity Shaping the Digital Future</h3>
      <p className='tekstgd'>Web design is the art and science of creating visually appealing, functional, and
intuitive websites. It represents a crucial aspect of the online presence of any 
organization or individual. At Wonta Studio, we understand the deep 
importance of quality web design and want to explain to you why it matters 
and why we are the right choice for your project.</p>
<h3 className='pitanjegd'>Why Is Web Design Important?</h3>
<p className='tekstgd'>First Impression: Your website is often the first point of contact between 
you and your target audience. Good web design creates a positive first 
impression.
User Experience (UX): The website should be easy to navigate and 
user-friendly. Good design makes interaction with your site smooth 
and efficient.
Brand Identity: Web design helps define your brand and its online 
identity. Through chosen colors, fonts, and styles, you communicate 
your values and messages.
SEO Optimization: Quality web design can improve SEO, which 
means better search engine rankings and more visitors.
</p>
<h3 className='pitanjegd'>Why Are We the Best for Web Design?</h3>
<p className='tekstgd'>Expertise: Our team of expert designers has years of experience in
creating web design for various industries and target audiences. 
We understand the latest trends and technologies.
Customized Approach: We approach each project individually. We 
talk to you to understand your needs and goals and create a design 
that reflects them.
Creativity: Our agency is known for its creativity. Your website will be 
original, attractive, and functional at the same time.
Testing and Optimization: We provide thorough testing to ensure that 
the website works flawlessly on all devices and browsers.</p>
<p className='tekstgd'>Web design is a key factor in a successful online presence.
Wonta Studio will help you create a website that is not only beautiful
but also effective in attracting and retaining visitors. Contact us to 
shape the digital future of your business together.</p>
<img className='grupaslike' src={grupa8} alt='grupaslike8'></img>
<div className='desno'>
{maintenance.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='animated'>
      {redesign.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
<h3 className='pitanjegd'>Ensuring Your Digital Relevance</h3>
<p className='tekstgd'>In the world of the internet, continuous website maintenance and redesign are
crucial for maintaining your online presence and attracting an audience. 
At Wonta Studio, we understand how important it is for your website to remain
relevant and functional over time, and we want to explain why our website 
maintenance and redesign services are invaluable.</p>
<h3 className='pitanjegd'>For Continuous Excellence</h3>
<p className='tekstgd'>Website maintenance is not just about repairs and bug fixes. It involves 
constant monitoring, updating, and optimization to keep your website fast, 
secure, and functional.</p>
<h3 className='pitanjegd'>Refresh and Upgrade Your Presence</h3>
<p className='tekstgd'>As time passes, trends change, and your business may be growing 
and evolving. Therefore, website redesign is crucial to refresh your 
online presence and remain competitive.</p>
<h3 className='pitanjegd'>Why We're the Best for Website Maintenance and 
Redesign?</h3>
<p className='tekstgd'>Website maintenance and redesign are essential for your long-term
online presence and competitiveness. Wonta Studio will help 
you keep your website in excellent condition and refresh it whenever 
necessary. Contact us to ensure that your online presence is always 
at its best.</p>
{ui.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
<h3 className='pitanjegd'>Transforming the Digital Experience</h3>
<p className='tekstgd'>UI (User Interface) and UX (User Experience) design are the foundation for 
creating websites and mobile applications that not only look good but also 
provide a seamless user experience. At Wonta Studio, we are 
committed to crafting digital solutions that inspire, engage, and leave a 
positive impression on users, and we want to explain why our UI/UX design 
services are indispensable.</p>
<h3 className='pitanjegd'>Why Is UI/UX Design Important?</h3>
<p className='tekstgd'>User Experience: Good UI/UX design creates an intuitive and enjoyable 
user experience, increasing user satisfaction and brand loyalty.
Boosts Conversions: Intuitive interfaces and good design can increase 
the conversion rate, meaning more users take desired actions.
Reduces Bounce Rate: Poorly designed websites and applications 
often result in user abandonment. Good UX design reduces the 
bounce rate.
Strengthens the Brand: Quality design reflects professionalism and 
your brand's values, building user trust.</p>
<h3 className='pitanjegd'>Why We're the Best for UI/UX Design?</h3>
<p className='tekstgd'>UI/UX design is a crucial factor for success in the digital market. 
Wonta Studio will help you shape digital solutions that attract, 
satisfy, and retain users, providing them with a flawless experience. 
Contact us to transform your digital presence together.</p>
<div className='donjidugmici'>
      <Link to='/Contact' className='dvadugmetadonjalevo'>ORDER</Link>
      <Link to='/Contact' className='dvadugmetadonja'>COOPERATION</Link>
</div>
    </div>
    
  )
}

export default WebDesign;

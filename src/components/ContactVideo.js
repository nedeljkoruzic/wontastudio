import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactVideo.css'
import TextSpan from './TextSpan';
import pozadinskaslika from '../slike/Untitled44-31 1.webp'

function ContactVideo() {

	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q1eje5g', 'template_z4hei3a', form.current, '0ZG_qlfkPtzr9BqbC')
      .then((result) => {
          console.log(result.text);
		  console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      setTimeout(() => {
        e.target.reset()
      },100);
  };

  const kontaktgrown = "grown your".split("");
  const kontaktbus = "bussines".split("");
  return (
    <div>
         {kontaktgrown.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     <div className='bussines'>
      {kontaktbus.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
          <h2 className='kontaktnimanjinaslovi'>video editing</h2>

    <div className='video-container'>
      <form ref={form} onSubmit={sendEmail}>
        <input name='from_name' type='text' id='fullname' placeholder='Full Name' required/>
        <input name='from_company' type='text' id='company' placeholder='Company' required/>
        <input name='from_email' type='email' id='email' placeholder='Email' required/>
        <input name='from_phone' type='text' id='pnumber' placeholder='Phone Number'/>
        <input name='from_website' type='text' id='website' placeholder='Website' required/> 
        <input name='from_budget' type='text' id='website' placeholder='Budget' required/> 
        <textarea name='message' placeholder="Additional information / Short description of 
        the desired service"></textarea>
       <input type='submit' id='buttonsend' value='SEND' required/>
      </form>
      </div>
      <img src={pozadinskaslika} alt='pozadinskilogo' className='pozadinskaslika3'/>

    </div>
  )
}

export default ContactVideo;

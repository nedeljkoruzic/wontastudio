import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextSpan from './TextSpan'
import './ContactCooperation.css'
import pozadinskaslika from '../slike/Untitled44-31 1.webp'

function ContactCooperation() {

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
    <h2 className='kontaktnimanjinaslovi'>cooperation</h2>

    <div className='cooperation-container'>
    <form ref={form} onSubmit={sendEmail}>
      <input name='from_name' type='text' id='fullname2' placeholder='Full Name' required/>
      <input name='from_company' type='text' id='company2' placeholder='Company' required/>
      <input name='from_email' type='email' id='email2' placeholder='Email' required/>
      <textarea name='message' placeholder="Your Text*"></textarea>
     <input type='submit' id='buttonsend2' value='SEND' required/>
    </form>
    </div>
    <img src={pozadinskaslika} alt='pozadinskilogo' className='pozadinskaslika4'/>
  </div>
  )
}

export default ContactCooperation

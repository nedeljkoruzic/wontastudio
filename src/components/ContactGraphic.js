import React, { useRef } from 'react';
import TextSpan from './TextSpan';
import emailjs from '@emailjs/browser';
import './ContactGraphic.css'
import pozadinskaslika from '../slike/Untitled44-31 1.webp'
function ContactGraphic() {

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
      e.target.reset()
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
      <h2 className='kontaktnimanjinaslovi'>Graphic Design</h2>
    <div className='graphic-container'>
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='from_name' id='fullname' placeholder='Full Name' required/>
      <input type='text' name='from_company' id='company' placeholder='Company' required/>
      <input type='email' name='from_email' id='email' placeholder='Email' required/>
      <input type='text' name='from_phone' id='pnumber' placeholder='Phone Number'/>
      <input type='text' name='from_website' id='website' placeholder='Website' required/> 
      <input type='text' name='from_product' id='website' placeholder='Which Product' required/> 
      <input type='text' name='from_budget' id='website' placeholder='Budget' required/> 
      <textarea name="message" placeholder="Additional information / Short description of 
      the desired service"></textarea>
     <input type='submit' id='buttonsend' value='SEND'  required/>

    </form>
   
    </div>
    <img src={pozadinskaslika} alt='pozadinskilogo' className='pozadinskaslika'/>
  </div>
  )
}

export default ContactGraphic;

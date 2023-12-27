import React, { useRef} from 'react';
import { Link } from 'react-router-dom';
import './Contactpocetna.css'
import emailjs from '@emailjs/browser';


function Contactpocetna() {

  
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
  return (
    <div>
        <div className='dvacontanctbtn'>
        <Link to='/Contact' className="btn2">Contact Us</Link>
        <Link to='/Contact' className="btn2">Cooperation</Link>
        </div>
        <div className='pocetna-container'>
      	<form  ref={form} onSubmit={sendEmail}>
				<input type="text" name="from_name" className="field" placeholder="Your Name" required/>
				<input type="email" name="from_email"   className="field" placeholder="Your Email" required/>
				<input type="tel" name="from_phone" className="field" placeholder="Phone"/>
				<textarea name="message" placeholder="Message" className="field2" required></textarea>
				<input type="submit" value="SEND" id="buttonsend" required />
        </form>
			</div>
    </div>
  )
}

export default Contactpocetna;

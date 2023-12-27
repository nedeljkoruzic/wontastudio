import React from 'react'
import ContactUsContactImg from '../slike/contactslike/Frame 158.webp'
import ContactUsContactmob from '../slike/contactslike/Frame 167.webp'
import './ContactImg.css'
function ContactUsContact() {
  return (
    <div>
    <img src={ContactUsContactImg} alt='contactusimg' className='contactimgs' />
    <img src={ContactUsContactmob} alt='contactusimgmob' className='contactimgsmob' />

    </div>
  )
}

export default ContactUsContact

import './ContactImg.css'
import WebDesignContactImg3 from '../slike/contactslike/Frame 156.webp'
import WebContactmob from '../slike/contactslike/Frame 165.webp'
function WebDesignContactImg() {
  return (
    <div>
    <img src={WebDesignContactImg3} alt='webdesigncontact' className='contactimgs'/>
    <img src={WebContactmob} alt='webdesigncontactmob' className='contactimgsmob'/>
    </div>
  )
}

export default WebDesignContactImg

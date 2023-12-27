import './ContactImg.css'
import GraphicContactImg3 from '../slike/contactslike/Frame 155.webp'
import GraphicContactmob from '../slike/contactslike/Frame 164.webp'
function GraphicContactImg() {
  return (
    <div>
      <img src={GraphicContactImg3} alt='graphiccontact' className='contactimgs'/>
      <img src={GraphicContactmob} alt='graphiccontactmob' className='contactimgsmob'/>
    </div>
  )
}

export default GraphicContactImg

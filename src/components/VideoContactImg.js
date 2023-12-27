import './ContactImg.css'
import VideoContactImg3 from '../slike/contactslike/Frame 157.webp'
import VideoContactmob from '../slike/contactslike/Frame 166.webp'
function VideoContactImg() {
  return (
    <div>
            <img src={VideoContactImg3} alt='videocontact' className='contactimgs'/>
            <img src={VideoContactmob} alt='graphiccontactmob' className='contactimgsmob'/>

    </div>
  )
}

export default VideoContactImg

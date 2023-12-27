import HoverVideoPlayer from "react-hover-video-player";
import './CetiriVidea2.css';
import prvivideo from '../video/SERVICES VIDEO/1.mp4';
import drugivideo from '../video/SERVICES VIDEO/2.mp4';
import trecivideo from '../video/SERVICES VIDEO/3.mp4';
import cetvrtivideo from '../video/SERVICES VIDEO/4.mp4';
function CetiriVidea2() {
  return (
    <div className='row'> 
        <div className='kolone'>
          <HoverVideoPlayer videoSrc={prvivideo}
           controls
           controlsList="nodownload nofullscreen "
           loop
           />
        </div>
        <div className='kolone'>
        <HoverVideoPlayer videoSrc={drugivideo}
         controls
         controlsList="nodownload nofullscreen"
         />
        </div>
        <div className='kolone'>
        <HoverVideoPlayer videoSrc={trecivideo}
        controls
        controlsList="nodownload nofullscreen"
         />
        </div>
        <div className='kolone'>
        <HoverVideoPlayer videoSrc={cetvrtivideo}
        controls
        controlsList="nodownload nofullscreen"
         />
        </div>
    </div>
  
  )
}

export default CetiriVidea2

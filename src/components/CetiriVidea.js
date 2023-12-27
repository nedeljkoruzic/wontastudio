import HoverVideoPlayer from "react-hover-video-player";
import './CetiriVidea.css';
import prvivideo from '../video/services/1.mp4';
import drugivideo from '../video/services/2.mp4';
import trecivideo from '../video/services/3.mp4';
import cetvrtivideo from '../video/services/4.mp4';
function CetiriVidea() {
  return (
    <div className='row'> 
        <div className='column'>
          <HoverVideoPlayer videoSrc={prvivideo}
           restartOnPaused
           loop
           />
        </div>
        <div className='column'>
        <HoverVideoPlayer videoSrc={drugivideo}
         restartOnPaused
         loop
         />
        </div>
        <div className='column'>
        <HoverVideoPlayer videoSrc={trecivideo}
        restartOnPaused
        loop
         />
        </div>
        <div className='column'>
        <HoverVideoPlayer videoSrc={cetvrtivideo}
        restartOnPaused
        loop
         />
        </div>
    </div>
  
  )
}

export default CetiriVidea;

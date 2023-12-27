import React from 'react'
import './Flexbox3.css'
import TextSpan from './TextSpan';
import HoverVideoPlayer from "react-hover-video-player";
import vert1 from '../video/6 kom/vert1.mp4';
import vert2 from '../video/6 kom/vert2.mp4';
import hor1 from '../video/6 kom/hor1.mp4';
import hor2 from '../video/6 kom/hor2.mp4';
import hor3 from '../video/6 kom/hor3.mp4';
import hor4 from '../video/6 kom/hor4.mp4';
function Flexbox3() {
  const web = "video".split("");
  const dsgn = "editing".split("");
  return (
    
     <div>
        <div>
         {web.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='levo'>
       {dsgn.map((letter,index)=> {
      return (
        <TextSpan key={index} >
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      )
     })}
     </div>
     <div className='row2'>
        <div className='column2'>
          <HoverVideoPlayer videoSrc={vert1}
           restartOnPaused
           loop
           controls
           
         
           />
        </div>
        <div className='column3'>
        <HoverVideoPlayer videoSrc={hor1}
        restartOnPaused
        loop
        controls
        playbackRangeStart={0.2}
         />
          <HoverVideoPlayer videoSrc={hor2}
        restartOnPaused
        loop
        playbackRangeStart={0.1}
        controls
         />
        </div>
        <div className='column3'>
        <HoverVideoPlayer videoSrc={hor3}
        restartOnPaused
        loop
        controls
         />
         <HoverVideoPlayer videoSrc={hor4}
        restartOnPaused
        loop
        controls
        playbackRangeStart={0.1}
         />
        </div>
       
        <div className='column2'>
        <HoverVideoPlayer videoSrc={vert2}
         restartOnPaused
         loop
         controls
         />
        </div>
    </div>
    </div>
  )
}

export default Flexbox3

import React from 'react'
import './Flexbox.css'
import TextSpan from './TextSpan'
import prvaslika from '../slike/graphicdesign/1.webp'
import drugaslika from '../slike/graphicdesign/2.webp'
import trecaslika from '../slike/graphicdesign/3.webp'
import cetvrtaslika from '../slike/graphicdesign/4.webp'
import petaslika from '../slike/graphicdesign/5.webp'
import sestaslika from '../slike/graphicdesign/6.webp'
import sedmaslika from '../slike/graphicdesign/7.webp'
import osmaslika from '../slike/graphicdesign/8.webp'
import devetaslika from '../slike/graphicdesign/9.webp'
import desetaslika from '../slike/graphicdesign/10.webp'



function Flexbox() {
    const graphicc = "graphic".split("");
  const dsgn = "design".split("");
  return (
    
    <div className='main'>
        <div >
{graphicc.map((letter,index)=> {
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
     <div className='rowww'> 
        <div className='kolumnn'>
          <img src={prvaslika} alt='prvaslika' className='levaslika'/>
        </div>
        <div className='kolumnnn' >
        <img src={trecaslika} alt='trecaslika' className='dvesrednjeslike'/>
        <div className='dveukoloni'>
        <img src={petaslika} alt='petaslika' className='dvesrednjeslike2' />
        <img src={drugaslika} alt='drugaslika' className='dvesrednjeslike2'/>
        </div>
        </div>
       
        <div className='kolumnn'>
        <img src={devetaslika} alt='devetaslika' className='desnaslika'/>
        </div>
        </div>
        <div className='rowww'> 
        <div className='kolumnn'>
          <img src={desetaslika} alt='desetaslika' className='levaslika'/>
        </div>
        <div className='kolumnnn'>
        <div className='dveukoloni'>
        <img src={sedmaslika} alt='sedmaslika' className='dvesrednjeslike3' />
        <img src={sestaslika} alt='sestaslika' className='dvesrednjeslike3'/>
        </div>
        <img src={osmaslika} alt='osmaslika' className='dvesrednjeslike'/>
        </div>
       
        <div className='kolumnn'>
        <img src={cetvrtaslika} alt='cetvrtaslika' className='desnaslika'/>
        </div>
        
    </div>
    </div>
  )
}

export default Flexbox

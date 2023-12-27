import React from 'react'
import './Flexbox2.css'
import TextSpan from './TextSpan'
import auto1 from '../slike/web design/Auto Parts & Car Accessories Store Shopify Theme 1.webp'
import clean2 from '../slike/web design/c254aa89326661 1.webp'
import currentcy3 from '../slike/web design/curen-01 1.webp'
import naocare4 from '../slike/web design/sunglasses06 1.webp'
import avion5 from '../slike/web design/avion2-01 2.webp'
import hotel6 from '../slike/web design/hotel02 1.webp'
import jeep7 from '../slike/web design/jeep2-01 1.webp'
import travel8 from '../slike/web design/travel1-01 1.webp'

function Flexbox2() {
   const web = "web".split("");
  const dsgn = "design".split("");
  return (
    <div className='glavni'>
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
     <div className='rowww'> 
        <div className='columnn'>
          <img src={auto1} alt='autoslika' className='levaslika'/>
        </div>
        <div className='columnnn'>
        <img src={hotel6} alt='hotelslika' className='dvesrednjeslike'/>
        <img src={jeep7} alt='jeepslika' className='dvesrednjeslikedonja'/>
        </div>
       
        <div className='columnn'>
        <img src={clean2} alt='cleanslika' className='desnaslika' />
        </div>
    </div>
    <div className='rowww'> 
        <div className='columnn'>
          <img src={naocare4} alt='naocareslika' className='levaslika'/>
        </div>
        <div className='columnnn'>
        <img src={avion5} alt='avionslika' className='dvesrednjeslike'/>
        <img src={travel8} alt='travelslika' className='dvesrednjeslikedonja'/>
        </div>
       
        <div className='columnn'>
        <img src={currentcy3} alt='currentcyslika' className='desnaslika' />
        </div>
    </div>
    </div>
  )
}

export default Flexbox2

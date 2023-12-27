import React from 'react'
import './Bloghero.css'
import coomingsoon from '../slike/coming soon stranica-01-01 1.webp'
import coomingsoonmob from '../slike/blogmob.webp'
function Bloghero() {
  return (
    <div>
      <img src={coomingsoon} alt='coomingsoon' className='bloghero' />
      <img src={coomingsoonmob} alt='coomingsoonmob' className='blogheromob' />

    </div>
  )
}

export default Bloghero

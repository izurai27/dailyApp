import React from 'react'
// import bg from '../images/background1.jpg'
import './hero.css'
// import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='herobg'>
      {/* <img src={bg} alt="bg-illustration" /> */}
      <div className='caption'>
        <h1 >Selamat datang di daily Recipe</h1>
        <p>Selamat menjelajah, semoga bermanfaat! </p>
        {/* <p>untuk lebih mengenal tentang website ini, <Link to='about'>klik link ini</Link></p> */}

      </div>
      
    </div>
   
  )
}

export default Hero
import React from 'react';
import hero from '../src/Asset/hero.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-content'>
            <h1>Get the power to influence 15,00,000+ kiranas of India</h1>
            <p>Kirana Club is India's largest kirana community and your only media channel to win kirana mindshare</p>
            <button className='btn'>Schedule a Demo</button>
        </div>
        <div>
            <img src={hero}/>
        </div>
    </div>
  )
}

export default Hero
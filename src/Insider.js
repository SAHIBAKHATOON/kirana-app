import React from 'react';
import './Insider.css'
import club from '../src/Asset/club.png';
import right from '../src/Asset/right.svg'
const Insider = () => {
  return (
    <div className='inside-section'> 
       <div className='join-sec'>
        <h2>Join 1000+ FMCG professionals getting the latest insights through the Kirana Club Insider</h2>
       </div>
       <div className='flex-item'>
       <div className='club-img'>
        <img src={club} />
        </div>
        <div className='right-sec'>
            <img src={right} /> 
             <p>One report per month in your inbox</p>
             <img src={right} /> 
           <p>5-Minute reads packed with quality insights</p>
             <img src={right} /> 
            <p>Detailed deep dive into all things retail & FMCG</p>
             <img src={right} />
             <p>Free Forever, Zero Spam</p> 
             <input type='text' placeholder='Enter Your E-mail.....'/>
             <button className='subscribe'>Subscribe</button>
        </div>
        
        </div>
       
       </div>
    
    
  )
}

export default Insider
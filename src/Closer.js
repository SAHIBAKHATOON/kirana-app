import React from 'react'
import './Closer.css';
import agarbatti from '../src/Asset/agarbatti.png';
import spice from '../src/Asset/spice.png';
import oats from '../src/Asset/oats.png'
 
const Closer = () => {
  return ( 
    <div className=' closer-section'>  
    <div className='heading-section-1'>
    <div className='closer-sec'>
        <h1>Take a closer look at the impact Kirana Club can deliver.</h1>
        <p>View all  <i class="fa-solid fa-arrow-up-right-from-square"></i></p>
    </div>
    </div>
       <div className='flex-1'> 
        <div className='card-1'>       
            <img src={agarbatti}/>            
            <p>How a South strong incense stick brand built kirana preference in the non-South states</p>
            <button>Read Case Study</button>           
        </div>
        <div className='card-1'>
            <img src={spice}/>      
            <p>How a pasta brand made a mark in the kirana channel which otherwise preferred selling loose pasta</p>
            <button>Read Case Study</button>
        </div>
        <div className='card-1'>
            <img src={oats}/>
            <p>How Kirana Club enabled a leading oats brand gain increased share of shelf in three metro markets</p>
            <button>Read Case Study</button>
        </div>      
       </div> 
    </div>
    
  
  )
}

export default Closer
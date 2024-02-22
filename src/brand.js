import React from 'react'
import erfetti from '../src/Asset/erfetti.png';
import  unibic from '../src/Asset/unibic.png';
import wipro from '../src/Asset/wipro.png';
import madhvik from '../src/Asset/madhvik.png';
import tvs from '../src/Asset/tvs.png';
import daawat from '../src/Asset/daawat.png';
import coca from  '../src/Asset/coca.png';
import './Brand.css'
const brand = () => {
  return (
    <div className='brand-sec'> 
        <div>
            <h1>Top brands are partnering with Kirana Club to digitally influence the GT channel</h1>
        </div>
        <div className='img-sec'>
         
           <img src={erfetti}/>
            <img src={unibic} />
            <img src={wipro} />
            <img src={madhvik} className='images_1'/>
            <img src={tvs} className='images_1'/>
            <img src={daawat} className='images_1'/>
            <img src={coca} className='images_1'/>
        </div>
    </div>
   
  )
}

export default brand
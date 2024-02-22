 import React from 'react';
 import './footer.css';
import logo from '../src/Asset/logo.png'
import linkedin1 from '../src/Asset/in1.svg';
import youtube from '../src/Asset/youtube.svg';
import x1 from '../src/Asset/X1.svg'
 const footer = () => {
   return (
     <div className='footer-section'> 
     <div className='kirana-club'>
       <div className='logo'>
       <img src={logo} />
       <div className='para'> 
        <p>Copyright © Kirana Club</p>
       </div>
       </div>

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Case Studies</li>
        </ul>
        <ul>
        <li>Carrers</li>
        <li>For Brands</li>
        <li>In The News</li>
        </ul>
        <ul> 
        <li>Kirana Club Insider</li>
        <li>Kirana Conversations Tracker</li>
       </ul>
      
<div className='image-flex'>
<img src={ linkedin1} />
<img src={youtube} />
<img src={x1} />  
</div>
     </div>
    </div>
 
   )
 }
 
 export default footer;
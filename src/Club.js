import React from 'react';
import './Club.css';
import  onboard from '../src/Asset/onboard.png';
import pincode from '../src/Asset/pincode.png';
import spent from '../src/Asset/spent.png'
const Club = () => {
  return (
    <div className='club-section'>
        <div className='kirana-sec'>
            <h2>Kirana Club is able to deliver impact on the back of scale it has achieved</h2>
        </div>
        <div className='img-section'>
        <img src={onboard} />
        <img src={pincode} />
        <img src={spent} />
        </div>
    </div>
    
  )
}

export default Club
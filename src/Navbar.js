import React from 'react'
import logo from '../src/Asset/logo.png';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-section'>
        <div>
          <img src={logo} />
        </div>
        <i class="fa-solid fa-bars"></i>
        <div className='list-section'>
          <ul>
            <li>Home</li>
            <li>About Us <i class="fa-solid fa-caret-down"></i></li>
            <li>For Brands</li>
            <li>Resources <i class="fa-solid fa-caret-down"></i></li>
            <button className='schedule'>Schedule a Demo</button>
          </ul>
         
        </div>

      </div>
    </div>
  )
}

export default Navbar
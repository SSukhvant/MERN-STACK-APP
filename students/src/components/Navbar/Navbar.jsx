import React from 'react';
import './Navbar.scss';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='app__navbar'>

      <h2>TUNICALABS MEDIA</h2>
      
      <ul>
      <li><IoMdNotifications/></li>
      <li><FaRegUserCircle/> User</li>
      </ul>
    </div>
  )
}

export default Navbar

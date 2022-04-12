import React from 'react';
import './Sidebar.scss';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosPeople, IoIosPersonAdd } from 'react-icons/io'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
    <div className='app__sidebar-header'>
    <h2>Student</h2>
    <FiChevronDown />
    </div> 
      <div className='app__sidebar-links'>
      <NavLink to="/" className="app__sidebar-link"><IoIosPeople/> View Student</NavLink><br/>
      <NavLink to="/NewStudent" className="app__sidebar-link"><IoIosPersonAdd/> Add Student</NavLink>
      </div>
      <div/>
    </div>
  )
}

export default Sidebar

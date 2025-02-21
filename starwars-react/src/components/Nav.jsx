import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../componentsStyles/nav.css';

export default function Nav () {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
  <div className='navbar'>
    <Link to='#' className='menu-bars'>
      <FaIcons.FaBars onClick={showSidebar}/>
    </Link>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
    <Link to='#' className='menu-bars'><AiIcons.AiOutlineClose /></Link>
    </li>
    <Link to='/' className='nav-text'> Home </Link>
    <Link to='/starshiplist' className='nav-text'> Starships </Link>
    <Link to='/filmlist' className='nav-text'> Films </Link>
    <Link to='/planetslist' className='nav-text'> Planets </Link>
    <Link to='/characterslist' className='nav-text'> Characters </Link>
    </ul>
    </nav>
  </div>
  )
}
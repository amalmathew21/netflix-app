import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>

        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_logo" srcset="" />
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New & Popular</a></li>
          <li><a href="#">My List</a></li>
        </ul>
        <div className="search-notification">
          <button className="icon-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faBell} />
          </button>
       
          <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" srcset="" />
        </div>
        
        <FontAwesomeIcon icon="fa-sharp fa-light fa-bell" />
        
    </div>
  )
}

export default Navbar
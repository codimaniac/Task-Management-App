import React from 'react'
import './topbar.css'
import { FaSearch, FaRegBell } from 'react-icons/fa'

const TopBar = () => {
  return (
    <nav className='topbar'>
      <div className="topbar-container">
        <div className="logo">
          <h1>To-Do List</h1>
        </div>
        <div className="search-bar">
          <input className='search-input' id='search-text' type="text" placeholder="Search..." />
          <span className='search-icon'><FaSearch color='white'/></span>
        </div>
        <div className="notifications">
          <FaRegBell className='notification-icon' />
          <span className="notification-count">3</span>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
import React, { useState } from 'react'
import './topbar.css'
import SideNavToggle from '../side-nav-toggle/SideNavToggle'
import { FaSearch, FaRegBell } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'
import Notification from '../notification/Notification'
import { Link } from 'react-router-dom'

const TopBar = ({isOpen, toggleSideNav}) => {
  const [isNotificationVisible, setNotificationVisibility] = useState(false)
  const toggleNotification = () => setNotificationVisibility(!isNotificationVisible)
  const today = new Date()
  const dayName = today.toLocaleDateString("en-US", {weekday: "long"})
  const date = String(today.getDate()).padStart(2, "0")
  const month = String(today.getMonth()).padStart(2, "0")
  const year = String(today.getFullYear())
  const formattedDate = `${date}/${month}/${year}`

  return (
    <nav className='topbar'>
      <div className="topbar-container">
        <SideNavToggle isOpen={ isOpen } toggleSideNav={ toggleSideNav } />
        <div className="logo">
          <h1>To-Do List</h1>
        </div>
        {/* <div className="search-bar">
          <input className='search-input' id='search-text' type="text" placeholder="Search..." />
          <span className='search-icon'><FaSearch color='white'/></span>
        </div> */}
        <div className="profile">
          <Link to="/profile"><MdAccountCircle className='profile-icon'/></Link>
        </div>
        <div className="notifications" onClick={toggleNotification}>
          <FaRegBell className='notification-icon' />
          <span className="notification-count">3</span>
        </div>
        <div className="date">
          <span className="day">{ dayName }</span>
          <span className="date">{ formattedDate }</span>
        </div>
        <div className={`notification-list ${ isNotificationVisible ? 'show-notification' : '' }`}>
          {/* <p className="no-notification">No available notification</p> */}
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </nav>
  )
}

export default TopBar
import React from 'react'
import './sidebar.css'
import profilePic from '../../assets/Oscar Piastri Side Profile.jpeg'
import { MdDashboard, MdLogout, MdOutlineChecklist, MdOutlineDone, MdOutlineUpcoming } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { HiMiniShieldExclamation } from 'react-icons/hi2'

const SideBar = ({ isOpen, toggleSideNav }) => {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="sidebar-container">
                <div className="account-info">
                    <img src={profilePic} alt="User PFP" className="account-pfp" />
                    <p className="account-name">Oscar Piastri</p>
                    <p className="account-email">oscarpiastri@mail.com</p>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/" onClick={ toggleSideNav } ><div className={`nav-item ${ pathname === '/' ? 'active' : '' }`}><MdDashboard size={24} /> Dashboard</div></Link>
                    <Link to="/tasks" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/tasks' ? 'active' : '' }`}><MdOutlineChecklist size={24} /> Tasks</div></Link>
                    <Link to="/vital" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/vital' ? 'active' : '' }`}><HiMiniShieldExclamation size={24} /> Vital</div></Link>
                    <Link to="/upcoming" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/upcoming' ? 'active' : '' }`}><MdOutlineUpcoming size={24} /> Upcoming</div></Link>
                    <Link to="/completed" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/completed' ? 'active' : '' }`}><MdOutlineDone size={24} /> Completed</div></Link>
                </nav>
                <div className="sidebar-footer">
                    <Link to="/login" onClick={ toggleSideNav }><div className="nav-item"><MdLogout size={24} /> Logout</div></Link>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
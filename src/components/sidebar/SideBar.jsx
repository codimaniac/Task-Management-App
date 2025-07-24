import React from 'react'
import './sidebar.css'
import profilePic from '../../assets/Oscar Piastri Side Profile.jpeg'
import { MdDashboard, MdLogout, MdOutlineChecklist, MdOutlineDone, MdOutlineUpcoming } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { HiMiniShieldExclamation } from 'react-icons/hi2'

const SideBar = () => {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <aside className='sidebar'>
            <div className="sidebar-container">
                <div className="account-info">
                    <img src={profilePic} alt="User PFP" className="account-pfp" />
                    <p className="account-name">Oscar Piastri</p>
                    <p className="account-email">oscarpiastri@mail.com</p>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/" ><div className={`nav-item ${ pathname === '/' ? 'active' : '' }`}><MdDashboard size={24} /> Dashboard</div></Link>
                    <Link to="/tasks" ><div className={`nav-item ${ pathname === '/tasks' ? 'active' : '' }`}><MdOutlineChecklist size={24} /> Tasks</div></Link>
                    <Link to="/vital" ><div className={`nav-item ${ pathname === '/vital' ? 'active' : '' }`}><HiMiniShieldExclamation size={24} /> Vital</div></Link>
                    <Link to="/upcoming" ><div className={`nav-item ${ pathname === '/upcoming' ? 'active' : '' }`}><MdOutlineUpcoming size={24} /> Upcoming</div></Link>
                    <Link to="/completed" ><div className={`nav-item ${ pathname === '/completed' ? 'active' : '' }`}><MdOutlineDone size={24} /> Completed</div></Link>
                </nav>
                <div className="sidebar-footer">
                    <Link to="/logout" ><div className="nav-item"><MdLogout size={24} /> Logout</div></Link>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
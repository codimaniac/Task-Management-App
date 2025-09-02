import { useState, useEffect } from 'react'
import './sidebar.css'
import { auth } from '../../utils/firebaseConfig'
import defaultPFP from '../../assets/default-pfp-copy.jpg'
import { MdDashboard, MdLogout, MdOutlineChecklist, MdOutlineDone, MdOutlineUpcoming } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { HiMiniShieldExclamation } from 'react-icons/hi2'
import { handleSignOut } from '../../utils/firebaseConfig'

const SideBar = ({ isOpen, toggleSideNav }) => {
    const location = useLocation()
    const pathname = location.pathname
    const [currentUser, setCurrentUser] = useState(null);
    const [userInfo, setUserInfo] = useState({
        fullname: 'Loading...',
        userEmail: 'Loading...',
        profilePic: defaultPFP
    });

    useEffect(() => {
        setTimeout(() => {
            setCurrentUser(() => {
                return (auth.currentUser)
            });
        }, 2000);
        if (currentUser) {
            setUserInfo({
                fullname: currentUser?.displayName,
                userEmail: currentUser?.email,
                profilePic: currentUser.photoURL
            });
        }
        
        return clearTimeout()
    }, [currentUser]);

    return (
        <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="sidebar-container">
                <div className="account-info">
                    <img src={userInfo.profilePic ? userInfo.profilePic : defaultPFP} alt="User PFP" className="account-pfp" />
                    <p className="account-name">{userInfo.fullname ? userInfo.fullname : userInfo.userEmail.split("@")[0]}</p>
                    <p className="account-email">{userInfo.userEmail}</p>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/" onClick={ toggleSideNav } ><div className={`nav-item ${ pathname === '/' ? 'active' : '' }`}><MdDashboard size={18} /> Dashboard</div></Link>
                    <Link to="/tasks" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/tasks' ? 'active' : '' }`}><MdOutlineChecklist size={18} /> Tasks</div></Link>
                    <Link to="/vital" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/vital' ? 'active' : '' }`}><HiMiniShieldExclamation size={18} /> Vital</div></Link>
                    <Link to="/upcoming" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/upcoming' ? 'active' : '' }`}><MdOutlineUpcoming size={18} /> Upcoming</div></Link>
                    <Link to="/completed" onClick={ toggleSideNav }><div className={`nav-item ${ pathname === '/completed' ? 'active' : '' }`}><MdOutlineDone size={18} /> Completed</div></Link>
                </nav>
                <div className="sidebar-footer">
                    <Link to="/login" onClick={ handleSignOut }><div className="nav-item"><MdLogout size={18} /> Logout</div></Link>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
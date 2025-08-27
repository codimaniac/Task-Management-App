import { useState, useEffect } from 'react'
import './profile.css'
import defaultPFP from '../../assets/default-pfp-copy.jpg'
import { MdEdit, MdLogout, MdSave } from 'react-icons/md'
import { auth, handleSignOut } from '../../utils/firebaseConfig'

const Profile = () => {
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState({
      fullname: 'Loading...',
      userEmail: 'Loading...',
      profilePic: defaultPFP
  });

  useEffect(() => {
      setCurrentUser(() => {
          return (auth.currentUser)
      });
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
    <div className="profile-container">
      <div className="header">        
          <h1 className="profile-title">Profile</h1>
          <p className="profile-description">Manage your account settings and preferences.</p>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img src={userInfo.profilePic ? userInfo.profilePic : defaultPFP} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-info">
          <div className="profile-details">
            <div className="profile-item">
              <label className="profile-label">First Name:</label>
              {!editing && <span className="profile-value">{userInfo.fullname ? userInfo.fullname.split(" ")[0] : ""}</span>}
              {editing && <input type="text" name="firstname" id="firstname" value={userInfo.fullname ? userInfo.fullname.split(" ")[0] : ""}/>}
            </div>
            <div className="profile-item">
              <label className="profile-label">Last Name:</label>
              {!editing && <span className="profile-value">{userInfo.fullname ? userInfo.fullname.split(" ")[1] : ""}</span>}
              {editing && <input type="text" name="lastname" id="lastname" value={userInfo.fullname ? userInfo.fullname.split(" ")[1] : ""}/>}
            </div>
            {/* <div className="profile-item">
              <label className="profile-label">Username:</label>
              {!editing && <span className="profile-value">JohnDoe</span>}
              {editing && <input type="text" name="username" id="username" value="JohnDoe"/>}
            </div> */}
            <div className="profile-item">
              <label className="profile-label">Email:</label>
              {!editing && <span className="profile-value">{userInfo.userEmail}</span>}
              {editing && <input type="email" name="email" id="email" value={userInfo.userEmail}/>}
            </div>
            <div className="profile-item">
              <label className="profile-label">{!editing ? "Password:" : "New Password:"}</label>
              {!editing && <span className="profile-value">**********</span>}
              {editing && <input type="password" name="oldPassword" id="oldPassword" />}
            </div>
            {editing && <div className="profile-item">
              <label className="profile-label">Confirm Password:</label>
              <input type="password" name="oldPassword" id="oldPassword" placeholder=""/>
            </div>}
          </div>
          {/* Additional profile content can be added here */}
          <div className="profile-actions">
            <button className="edit-profile-button" onClick={() => setEditing(!editing)}>{!editing ? <MdEdit /> : <MdSave />} {!editing ? "Edit Profile" : "Save Changes"}</button>
            {!editing && <button className="logout-button" onClick={handleSignOut}><MdLogout /> Logout</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
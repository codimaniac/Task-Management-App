import React, { useState } from 'react'
import './profile.css'
import ProfilePic from '../../assets/default-pfp-copy.jpg'
import { MdEdit, MdLogout, MdSave } from 'react-icons/md'

const Profile = () => {
  const [editing, setEditing] = useState(false)

  return (
    <div className="profile-container">
      <div className="header">        
          <h1 className="profile-title">Profile</h1>
          <p className="profile-description">Manage your account settings and preferences.</p>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-info">
          <div className="profile-details">
            <div className="profile-item">
              <label className="profile-label">First Name:</label>
              {!editing && <span className="profile-value">John</span>}
              {editing && <input type="text" name="firstname" id="firstname" value="John"/>}
            </div>
            <div className="profile-item">
              <label className="profile-label">Last Name:</label>
              {!editing && <span className="profile-value">Doe</span>}
              {editing && <input type="text" name="lastname" id="lastname" value="Doe"/>}
            </div>
            <div className="profile-item">
              <label className="profile-label">Username:</label>
              {!editing && <span className="profile-value">JohnDoe</span>}
              {editing && <input type="text" name="username" id="username" value="JohnDoe"/>}
            </div>
            <div className="profile-item">
              <label className="profile-label">Email:</label>
              {!editing && <span className="profile-value">johndoe@mail.com</span>}
              {editing && <input type="email" name="email" id="email" value="johndoe@mail.com"/>}
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
            {!editing && <button className="logout-button"><MdLogout /> Logout</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
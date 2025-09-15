import { useState, useEffect, useRef } from 'react'
import './profile.css'
import defaultPFP from '../../assets/default-pfp-copy.jpg'
import { MdEdit, MdLogout, MdSave } from 'react-icons/md'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { auth, handleSignOut, handleUpateProfile, handleUpdatePassword } from '../../utils/firebaseConfig'
import { updateProfile } from 'firebase/auth'
import { updatePofileData } from '../../utils/profileManager'

const Profile = () => {
  const profileForm = useRef(null)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
  const [userInfo, setUserInfo] = useState({
    fullname: 'Loading...',
    userEmail: 'Loading...',
    profilePic: defaultPFP
  });
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })
  const formik = useFormik({
    initialValues: {
      current_password: '',
      new_password: '',
      confirm_password: ''
    },
    onSubmit: (values) => {
      if (values.current_password && values.new_password) {
        handleUpdatePassword(values.current_password, values.new_password)
      }
    },
    validationSchema: Yup.object({
      current_password: Yup.string()
        .min(6, "Password must be at least 6 character long"),
      new_password: Yup.string()
        .min(6, "Password must be at least 6 character long"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    })
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserInfo({
      ...updatedUserInfo,
      [name]: value
    });
  };

  useEffect(() => {
    if (!editing) {
      console.log("Updated User Info:", updatedUserInfo);
      console.log("Formik Values:", formik.values);
    }
  }, [editing, formik.values]);

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

  useEffect(() => {
    if (editing) {
      const profile = profileForm.current
      updatePofileData(profile, userInfo)
    }
  }, [editing])

  const saveChanges = () => {
    const fullname = `${updatedUserInfo.firstname !== "" ? updatedUserInfo.firstname : userInfo.fullname.split(" ")[0]} ${updatedUserInfo.lastname !== "" ? updatedUserInfo.lastname : userInfo.fullname.split(" ")[1]}`.trim();
    if (fullname !== " " && fullname !== userInfo.fullname) {
      handleUpateProfile(fullname)
      setUserInfo(prevState => ({
        ...prevState,
        fullname: fullname
      }));
    }

    formik.handleSubmit()

    setEditing(!editing)
  }

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
          <div className="profile-details" ref={profileForm}>
            <div className="profile-item">
              <label className="profile-label">First Name:</label>
              {!editing && <span className="profile-value">{userInfo.fullname ? userInfo.fullname.split(" ")[0] : null}</span>}
              {editing && <input type="text" name="firstname" id="firstname" onChange={handleChange}/>}
            </div>
            <div className="profile-item">
              <label className="profile-label">Last Name:</label>
              {!editing && <span className="profile-value">{userInfo.fullname ? userInfo.fullname.split(" ")[1] : null}</span>}
              {editing && <input type="text" name="lastname" id="lastname" onChange={handleChange}/>}
            </div>
            {/* <div className="profile-item">
              <label className="profile-label">Username:</label>
              {!editing && <span className="profile-value">JohnDoe</span>}
              {editing && <input type="text" name="username" id="username" value="JohnDoe"/>}
            </div> */}
            <div className="profile-item">
              <label className="profile-label">Email:</label>
              {!editing && <span className="profile-value">{userInfo.userEmail}</span>}
              {editing && <input type="email" name="email" id="email"/>}
            </div>
            {editing && <div className="profile-item">
              <label className="profile-label">Current Password:</label>
              <input type="password" name="current_password" id="current-password" onBlur={formik.handleBlur} onChange={formik.handleChange}/>
            </div>}                        
            {formik.touched.current_password && formik.errors.current_password ? (
              <div className="error-message text-right">{formik.errors.current_password}</div>
            ) : null}
            <div className="profile-item">
              <label className="profile-label">{!editing ? "Password:" : "New Password:"}</label>
              {!editing && <span className="profile-value">**********</span>}
              {editing && <input type="password" name="new_password" id="new-password" onBlur={formik.handleBlur} onChange={formik.handleChange}/>}
            </div>                        
            {formik.touched.new_password && formik.errors.new_password ? (
              <div className="error-message text-right">{formik.errors.new_password}</div>
            ) : null}
            {editing && <div className="profile-item">
              <label className="profile-label">Confirm Password:</label>
              <input type="password" name="confirm_password" id="confirm-password" onBlur={formik.handleBlur} onChange={formik.handleChange}/>
            </div>}                        
            {formik.touched.confirm_password && formik.errors.confirm_password ? (
              <div className="error-message text-right">{formik.errors.confirm_password}</div>
            ) : null}
          </div>
          {/* Additional profile content can be added here */}
          <div className="profile-actions">
            {!editing && <button className="edit-profile-button" onClick={() => setEditing(!editing)}><MdEdit /> Edit Profile</button>}
            {editing && <button className="edit-profile-button" type="submit" onClick={saveChanges}><MdSave /> Save Changes</button>}
            {!editing && <button className="logout-button" onClick={handleSignOut}><MdLogout /> Logout</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
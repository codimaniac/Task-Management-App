import React from 'react'
import './signup.css'
import PersonalData from "../../assets/personal-data.svg";
import { Link } from 'react-router-dom';
import { PreviousPage } from '../../components';

const SignUp = () => {
  return (
    <div className="signup">
      <PreviousPage />
      <div className="signup-container">
        <div className="signup-form">
          <h1>SignUp</h1>
          <form method="POST">
            <div className="input-flex-container">
              <div className="input-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="input-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            
            
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              placeholder="Enter Email"
            />
            <div className="input-flex-container">
              <div className="input-group">
                <label htmlFor="user_password">Password</label>
                <input
                  type="text"
                  name="user_password"
                  id="user_password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm_user_password">Confirm Password</label>
                <input
                  type="text"
                  name="confirm_user_password"
                  id="confirm_user_password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <label htmlFor="agree_to_term">
              <input
                type="checkbox"
                name="agree_to_term"
                id="agree_to_term"
              />
              I agree to all term
            </label>
            <input type="submit" value="Register" />
            <span className="call-to-login">
              Already have an account? 
              <Link to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
        <div className="signup-image">
          <img src={PersonalData} alt="Task Brief" />
        </div>
      </div>
      <span className="terms-and-conditions">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </span>
    </div>
  )
}

export default SignUp
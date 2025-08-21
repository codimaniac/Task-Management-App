import React from "react";
import "./login.css";
import TaskBrief from "../../assets/task-brief.svg";
import Calendar from "../../assets/calendar.svg";
import { Link } from "react-router-dom";
import { PreviousPage } from "../../components";

const Login = () => {
  return (
    <div className="login">
      <PreviousPage />
      <div className="login-container">
        <div className="login-form">
          <h1>Welcome to Taskly</h1>
          <p className="catch-phrase">Stay sharp, stay Taskly!</p>
          {/* <h2>Login</h2> */}
          {/* <p>Enter your email and password to access your account</p> */}
          <form method="POST">
            <label htmlFor="user_email">E-mail Address</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter Email"
            />
            <div className="password-container">
              <label htmlFor="user_password">Password</label>
              <a href="#" id="forgot-password">
                Forgotten password?
              </a>
            </div>
            <input
              type="password"
              name="user_password"
              id="user_password"
              placeholder="Enter Password"
            />
            <label htmlFor="stay_signed_in">
              <input
                type="checkbox"
                name="stay_signed_in"
                id="stay_signed_in"
              />
              Remember me
            </label>
            <input type="submit" value="Login" />
            <span className="call-to-sign-up">
              Don't have an account?
              <Link to="/signup">
                Sign Up
              </Link>
            </span>
          </form>
        </div>
        {/* <div className="login-image">
          <img src={Calendar} alt="Task Brief" />
        </div> */}
      </div>
      <span className="terms-and-conditions">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </span>
    </div>
  );
};

export default Login;

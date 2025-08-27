import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import TaskBrief from "../../assets/task-brief.svg";
import Calendar from "../../assets/calendar.svg";
import { Link } from "react-router-dom";
import { PreviousPage } from "../../components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSignInWithPassword, handleSignInWithGoogle } from "../../utils/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      user_email: "",
      user_password: "",
      stay_signed_in: false,
    },
    onSubmit: (values) => {
      const email = values.user_email
      const password = values.user_password

      handleSignInWithPassword(email, password, toast, navigate)
    },
    validationSchema: Yup.object({
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      user_password: Yup.string()
        .min(4, "Password must be at least 4 character long")
        .required("Password is equired"),
    }),
  });

  const handleSubmitViaProvider = () => {
    handleSignInWithGoogle(navigate)
  }

  console.log(formik.errors)

  return (
    <div className="login">
      <PreviousPage />
      <ToastContainer />
      <div className="login-container">
        <div className="login-form">
          <h1>Welcome to Taskly</h1>
          <p className="catch-phrase">Stay sharp, stay Taskly!</p>
          {/* <h2>Login</h2> */}
          {/* <p>Enter your email and password to access your account</p> */}
          <form method="POST" onSubmit={formik.handleSubmit}>
            <label htmlFor="user-email">E-mail Address</label>
            <input
              type="email"
              name="user_email"
              id="user-email"
              placeholder="Enter Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.user_email}
            />
            {formik.touched.user_email && formik.errors.user_email ? (
              <div className="error-message">{formik.errors.user_email}</div>
            ) : null}
            <div className="password-label-container">
              <label htmlFor="user-password">Password</label>
              <a href="#" id="forgot-password">
                Forgotten password?
              </a>
            </div>
            <div className="password-input-container">
              <input
                type={!passwordVisible ? "password" : "text"}
                name="user_password"
                id="user-password"
                placeholder="Enter Password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.user_password}
              />
              <button
                type="button"
                className="password-visibility"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {!passwordVisible ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </button>
            </div>            
            {formik.touched.user_password && formik.errors.user_password ? (
              <div className="error-message">{formik.errors.user_password}</div>
            ) : null}
            <label htmlFor="stay_signed_in">
              <input
                type="checkbox"
                name="stay_signed_in"
                id="stay_signed_in"
                onChange={formik.handleChange}
                value={formik.values.stay_signed_in}
              />
              Remember me
            </label>
            <input type="submit" value="Login" id="submit-button" />
            <div className="divider">
              <span>OR</span>
            </div>
            <button type="button" className="google-sign-in" onClick={handleSubmitViaProvider}>
              <FcGoogle size={18} />
              Sign in with Google
            </button>
            <span className="call-to-sign-up">
              Don't have an account?
              <Link to="/signup">Sign Up</Link>
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

import './signup.css'
import PersonalData from "../../assets/personal-data.svg";
import { Link, useNavigate } from 'react-router-dom';
import { PreviousPage } from '../../components';
import { FcGoogle } from 'react-icons/fc';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { handleCreateUser, handleSignInWithGoogle } from '../../utils/firebaseConfig';

const SignUp = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      user_email: "",
      user_password: "",
      confirm_user_password: ""
    },
    onSubmit: (values) => {
      const email = values.user_email
      const password = values.user_password

      handleCreateUser(email, password, navigate)
    },
    validationSchema: Yup.object({
      user_email: Yup.string().email("Invalid email format").required("Email is required"),
      user_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirm_user_password: Yup.string()
        .oneOf([Yup.ref('user_password'), null], "Passwords must match")
        .required("Please confirm your password")
    })
  })

  const handleSubmitViaProvider = () => {
    handleSignInWithGoogle(navigate)
  }

  return (
    <div className="signup">
      <PreviousPage />
      <div className="signup-container">
        <div className="signup-form">
          <h1>Create Taskly Account</h1>
          <p>Sign up to get started!</p>
          <form method="POST" onSubmit={formik.handleSubmit}>
            {/* <div className="input-flex-container">
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
            </div> */}
            <div className="input-flex-container">
              {/* <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                />
              </div> */}
              <div className="input-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="text"
                  name="user_email"
                  id="user_email"
                  placeholder="Enter Email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.user_email}
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                  <div className="error-message">{formik.errors.user_email}</div>
                ) : null} 
              </div>
            </div>
            <div className="input-flex-container">
              <div className="input-group">
                <label htmlFor="user_password">Password</label>
                <input
                  type="password"
                  name="user_password"
                  id="user_password"
                  placeholder="Enter Password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.user_password}
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm_user_password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_user_password"
                  id="confirm_user_password"
                  placeholder="Confirm Password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.confirm_user_password}
                />
              </div>
            </div>
            <div className="input-flex-container error">
              {formik.touched.user_password && formik.errors.user_password ? (
                <div className="error-message">{formik.errors.user_password}</div>
              ) : null}
              {formik.values.user_password && formik.touched.confirm_user_password && formik.errors.confirm_user_password ? (
                <div className="error-message">{formik.errors.confirm_user_password}</div>
              ) : null}
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
            <div className="divider">
              <span>OR</span>
            </div>
            <button type="button" className="google-sign-in" onClick={handleSubmitViaProvider}>
              <FcGoogle size={18}/>
              Sign up with Google
            </button>
            <span className="call-to-login">
              Already have an account? 
              <Link to="/login">
                Login
              </Link>
            </span>
          </form>
        </div>
        {/* <div className="signup-image">
          <img src={PersonalData} alt="Task Brief" />
        </div> */}
      </div>
      <span className="terms-and-conditions">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </span>
    </div>
  )
}

export default SignUp
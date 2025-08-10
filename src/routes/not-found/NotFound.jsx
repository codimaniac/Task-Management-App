import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

const NotFound = () => {
  return (
    <div className="container">
        <div className="not-found">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Please check the URL or return to the <Link to="/" >home page</Link>.</p>
        </div>
    </div>
  )
}

export default NotFound
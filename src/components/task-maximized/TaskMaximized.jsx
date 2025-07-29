import React from 'react'
import './task-maximized.css'
import BirthdayPics from '../../assets/birthday.jpg'

const TaskMaximized = () => {
  return (
    <div className='task-maximized-container'>
      <div className="task-maximized-header">
        <img src={ BirthdayPics } alt="Birthday Picture" />
        <div className="key-details">
          <h2>Attend Nischal’s Birthday Party</h2>
          <div className="task-meta">
            <p className="priority">Priority: <span className="moderate">Moderate</span></p>
            <p className="status">Status: <span className="not-started">Not Started</span></p>
            <p className="created">Created on: 20/06/2023</p>
          </div>  
        </div>
      </div>
      <div className="task-detailed-description">
        <p>
          <b>Objective: </b>
          Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)</p>
        <p>
          <b>Task Description: </b>
          Join Nischal and friends for a fun and memorable birthday celebration! This event is an opportunity to relax, enjoy great food, and connect with others in a lively and joyful setting. Be sure to bring a gift and a cheerful spirit!
        </p>

        <p>
          <b>Checklist: </b>
          <ul>
            <li>Confirm the number of guests attending.</li>
            <li>Bring candles, matches/lighter, and a cake knife.</li>
            <li>Prepare a birthday card for Nischal.</li>
            <li>Coordinate with others for group gift contributions.</li>
            <li>Arrive at least 15 minutes early to help with setup.</li>
          </ul>
        </p>
        <p>
          <b>Notes: </b>
          Remember to take lots of photos and enjoy the moment!
        </p>
        <p>
          <b>Deadline: </b>
          20/06/2023, 6:00 PM
        </p>
      </div>
    </div>
  )
}

export default TaskMaximized
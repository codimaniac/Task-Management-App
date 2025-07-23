import React from 'react'
import './task-minimized.css'
import BirthdayPics from '../../assets/birthday.jpg'
import HollowMoreHoriz from '../more-hollow-horiz/HollowMoreHoriz'

const TaskMinimized = () => {
  return (
    <div className="task-minimized">
        <div className="circle-outline"></div>
        <div class="task-details">
          <h2>Attend Nischal’s Birthday Party</h2>
          <div className="task-desc-container">
            <p class="description">
              Buy gifts on the way and pick up cake from the bakery.
              <span class="time-location">(6 PM | Fresh Elements)</span>
            </p>
            <img className='detailed-pics' src={ BirthdayPics } alt="Birthday Picture" />
          </div>
          <div class="meta">
            <span class="priority">Priority: <span class="moderate">Moderate</span></span>
            <span class="status">Status: <span class="not-started">Not Started</span></span>
            <span class="created">Created on: 20/06/2023</span>
          </div>
        </div>
        <HollowMoreHoriz className='more-icon' />
        {/* <div className="task-actions">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div> */}
    </ div>
  )
}

export default TaskMinimized
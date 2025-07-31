import React from 'react'
import './task-minimized.css'
import BirthdayPics from '../../assets/Birthday.jpg'
import HollowMoreHoriz from '../more-hollow-horiz/HollowMoreHoriz'

const TaskMinimized = () => {
  return (
    <div className="task-minimized">
        <div className="circle-outline"></div>
        <div className="task-details">
          <h2>Attend Nischal’s Birthday Party</h2>
          <div className="task-desc-container">
            <p className="description">
              Buy gifts on the way and pick up cake from the bakery.
              <span className="time-location">(6 PM | Fresh Elements)</span>
            </p>
            <img className='detailed-pics' src={ BirthdayPics } alt="Birthday Picture" />
          </div>
          <div className="meta">
            <span className="priority">Priority: <span className="moderate">Moderate</span></span>
            <span className="status">Status: <span className="not-started">Not Started</span></span>
            <span className="created">Created on: 20/06/2023</span>
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
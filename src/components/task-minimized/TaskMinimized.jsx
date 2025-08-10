import { React, useState } from 'react'
import './task-minimized.css'
import BirthdayPics from '../../assets/Birthday.jpg'
import HollowMoreHoriz from '../more-hollow-horiz/HollowMoreHoriz'
import { Link } from 'react-router-dom'

const TaskMinimized = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ToggleActions = () => {
    setIsOpen(!isOpen)
  }

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
        <div className='more-icon-container' onClick={ ToggleActions }><HollowMoreHoriz /></div>
        <div className={`task-actions ${ isOpen ? 'flex' : '' }`}>
          <button className="action"><Link to="/edittask">Edit</Link></button>
          <button className="action">Delete</button>
          <button className="action">Finish</button>
        </div>
    </ div>
  )
}

export default TaskMinimized
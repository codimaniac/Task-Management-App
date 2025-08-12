import { React, useState } from 'react'
import './task-minimized.css'
import BirthdayPics from '../../assets/Birthday.jpg'
import HollowMoreHoriz from '../more-hollow-horiz/HollowMoreHoriz'
import { Link } from 'react-router-dom'

const TaskMinimized = ({title, objective, priority, status, datecreated }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ToggleActions = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="task-minimized">
        <div className={`circle-outline ${ status=="Not Started" ? "not-started" : `${ status=="Completed" ? "completed" : `${ status=="In Progress" ? "in-progress" : "" }`}` }`}></div>
        <div className="task-details">
          <h2>{ title }</h2>
          <div className="task-desc-container">
            <p className="objective">
              { objective }
            </p>
            {/* <img className='detailed-pics' src={ BirthdayPics } alt="Birthday Picture" /> */}
          </div>
          <div className="meta">
            <span className="priority">Priority: <span className={`${ priority=="High" ? "high" : `${ priority=="Moderate" ? "moderate" : `${ priority=="Low" ? "low" : "" }` }` }`}>{ priority }</span></span>
            <span className="status">Status: <span className={`${ status=="Not Started" ? "not-started" : `${ status=="Completed" ? "completed" : "in-progress"}` }`}>{ status }</span></span>
            <span className="created">Created on: { datecreated }</span>
          </div>
        </div>
        <div className='more-icon-container' onClick={ ToggleActions }><HollowMoreHoriz /></div>
        <div className={`task-actions ${ isOpen ? 'flex' : '' }`}>
          <Link to="/edittask"><button className="action">Edit</button></Link>
          <button className="action">Delete</button>
          <button className="action">Finish</button>
        </div>
    </ div>
  )
}

export default TaskMinimized
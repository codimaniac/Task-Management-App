import { React, useState } from 'react'
import './task-minimized.css'
import HollowMoreHoriz from '../more-hollow-horiz/HollowMoreHoriz'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteTask, finishTask, startTask } from '../../utils/taskManager'

const TaskMinimized = ({id, title, objective, priority, status, datecreated, completed }) => {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const ToggleActions = () => {
    setIsOpen(!isOpen)
  }

  const handleDelete = () => deleteTask(id)
  const handleStart = () => startTask(id)
  const handleFinish = () => finishTask(id)
  const handleEdit = () => {
    navigate("/edittask", {state: id})
  }
  const handleDetails = () => {
    navigate(pathname, {state: id})
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
          {pathname!=='/' && <button className="action" onClick={handleDetails}>Details</button>}
          {!completed && <button className="action" onClick={handleEdit}>Edit</button>}
          <button className="action" onClick={handleDelete}>Delete</button>
          {status == "Not Started" && <button className="action" onClick={handleStart}>Start</button>}
          {status == "In-progress" && <button className="action" onClick={handleFinish}>Finish</button>}
        </div>
    </ div>
  )
}

export default TaskMinimized
import React from 'react'
import './task-maximized.css'
import ChecklistImg from '../../assets/checklist.png'
import { MdDelete, MdEdit } from 'react-icons/md'

const TaskMaximized = ({id, title, objective, description, checklist, priority, status, datecreated, dueDate, dueTime}) => {
  if (!title) {
    return(
      <div className="task-maximized-container" style={{alignItems: "center", justifyContent: "center", height: "50vh"}}>
        <p className="default-content">Click on Details to view more task details</p>
      </div>
    )
  }
  
  return (
    title && <div className='task-maximized-container'>
      <div className="task-maximized-header">
        <img src={ ChecklistImg } alt="Birthday Picture" />
        <div className="key-details">
          <h2>{title}</h2>
          <div className="task-meta">
            <p className="priority">Priority: <span className={priority=="High" ? "high" : `${priority=="Moderate" ? "moderate" : "low"}`}>{priority}</span></p>
            <p className="status">Status: <span className={status=="Completed" ? "completed" : `${status=="In-progress" ? "in-progress" : "not-started"}`}>{status}</span></p>
            <p className="created">Created on: {datecreated}</p>
          </div>  
        </div>
      </div>
      <div className="task-detailed-description">
        <p>
          <b>Objective: </b>
          {objective}</p>
        <p>
          <b>Task Description: </b>
          {description}
        </p>

        <p>
          <b>Checklist: </b>
        </p>
        <ul>
          {
            checklist.map((list, key) => {
              return (
                <li key={key}>{list}</li>
              )
            })
          }
        </ul>
        {/* <p>
          <b>Notes: </b>
          Remember to take lots of photos and enjoy the moment!
        </p> */}
        <p>
          <b>Deadline: </b>
          {dueDate} {dueTime}
        </p>
      </div>
      <div className="maximized-actions">
        <div className="edit-action"><MdEdit /></div>
        <div className="delete-action"><MdDelete /></div>
      </div>
    </div>
  )
}

export default TaskMaximized
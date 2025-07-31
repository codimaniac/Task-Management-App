import React from 'react'
import './task-list.css'
import { MdToday } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import TaskMinimized from '../task-minimized/TaskMinimized'
import { useLocation } from 'react-router-dom'

const TaskList = () => {
  const location = useLocation()
  const path = location.pathname
  const showAddTask = path === '/tasks'

  return (
    <div className="to-do-list">
        <span className="to-do-list-header">
          <div className="to-do-list-header-title">
              <MdToday className='dashboard-header-icons' />
              To-Do List
          </div>
          { showAddTask && <div className="add-task">
              <FaPlus className='add-task-icon' />
              <span className='add-task-text'>Add Task</span>
          </div> }
        </span>
        <TaskMinimized />
        <TaskMinimized />
        <TaskMinimized />
    </div>
  )
}

export default TaskList
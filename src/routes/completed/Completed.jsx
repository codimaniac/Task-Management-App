import React from 'react'
import './completed.css'
import TaskList from '../../components/task-list/TaskList'
import TaskMaximized from '../../components/task-maximized/TaskMaximized'

const Completed = () => {
  return (
    <div className="container">
      <h1>Completed Task</h1>
      <div className="content">
        <TaskList />
        <TaskMaximized />
      </div>
    </div>
  )
}

export default Completed
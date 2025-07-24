import React from 'react'
import './vital.css'
import TaskList from '../../components/task-list/TaskList'
import TaskMaximized from '../../components/task-maximized/TaskMaximized'

const Vital = () => {
  return (
    <div className="vital-container">
      <h1>Vital's Tasks</h1>
      <div className="dashboard-content">
        <TaskList />
        <TaskMaximized />
      </div>
    </div>
  )
}

export default Vital
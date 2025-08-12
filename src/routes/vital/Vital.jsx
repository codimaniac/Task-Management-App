import React from 'react'
import './vital.css'
import TaskList from '../../components/task-list/TaskList'
import TaskMaximized from '../../components/task-maximized/TaskMaximized'

const Vital = () => {
  return (
    <div className="container">
      <h1>Vital Tasks</h1>
      <div className="content">
        <TaskList sortby="priority" value="High"/>
        <TaskMaximized />
      </div>
    </div>
  )
}

export default Vital
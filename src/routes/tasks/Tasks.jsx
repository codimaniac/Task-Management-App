import React from 'react'
import './tasks.css'
import { TaskList, TaskMaximized } from '../../components'

const Tasks = () => {
  return (
    <div className="container">
      <h1>My Task</h1>
      <div className="content">
        <TaskList />
        <TaskMaximized />
      </div>
    </div>
  )
}

export default Tasks
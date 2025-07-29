import React from 'react'
import './upcoming.css'
import { TaskList, TaskMaximized } from '../../components'

const Upcoming = () => {
  return (
    <div className="container">
      <h1>Upcoming Task</h1>
      <div className="content">
        <TaskList />
        <TaskMaximized />
      </div>
    </div>
  )
}

export default Upcoming
import React from 'react'
import './tasks.css'
import { TaskList, TaskMaximized } from '../../components'
import { useLocation } from 'react-router-dom'
import { useFetchTask } from '../../hooks/useFetchTasks'

const Tasks = () => {
  const {state} = useLocation()
  const [task] = useFetchTask(state)

  state!==null && console.log(state)
  return (
    <div className="container">
      <h1>My Task</h1>
      <div className="content">
        <TaskList />
        <TaskMaximized
          id = {task.id}
          title = {task.title}
          objective = {task.objective}
          description = {task.description}
          checklist = {task.checklist}
          priority = {task.priority}
          status = {task.status}
          datecreated = {task.datecreated}
          dueDate = {task.dueDate}
          dueTime = {task.dueTime}        
        />
      </div>
    </div>
  )
}

export default Tasks
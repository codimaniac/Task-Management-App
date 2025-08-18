import React from 'react'
import './vital.css'
import TaskList from '../../components/task-list/TaskList'
import TaskMaximized from '../../components/task-maximized/TaskMaximized'
import { useLocation } from 'react-router-dom'
import { useFetchTask } from '../../hooks/useFetchTasks'

const Vital = () => {
  const {state} = useLocation()
  const [task] = useFetchTask(state)
  
  return (
    <div className="container">
      <h1>Vital Tasks</h1>
      <div className="content">
        <TaskList sortby="priority" value="High"/>
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

export default Vital
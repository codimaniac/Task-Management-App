import React, { useEffect, useState } from 'react'
import TaskMinimized from "./task-minimized/TaskMinimized";
import useFetchTasks from '../hooks/useFetchTasks'

const SortedTask = ({ sortby, value }) => {
  const { tasks, loading, error } = useFetchTasks();

  return (
    <div className='sorted-list'>
        {loading && <p className="loading-task">Loading Tasks....</p>}
        {error && <p className="error-loading">Error: {error}</p>}
        {tasks.map((task) => {
            //check if task[sortby] equals value
            if (task[sortby] == value) {
            return (
                <TaskMinimized
                key={task.id}
                title={task.title}
                objective={task.objectives}
                priority={task.priority}
                status={task.status}
                datecreated={task.datecreated}
                />
            )
            }
        })}
        {tasks.length === 0 && !loading && <p className="default-msg">No tasks available.</p>}
    </div>
  )
}

export default SortedTask
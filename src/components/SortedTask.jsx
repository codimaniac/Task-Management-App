import { useEffect, useState } from 'react'
import TaskMinimized from "./task-minimized/TaskMinimized";
import { useFetchTasks } from '../hooks/useFetchTasks'

const SortedTask = ({ sortby, value }) => {
  const [tasks, loading, error] = useFetchTasks();
  const [filterCount, setFilterCount] = useState(0)

  return (
    <div className='sorted-list'>
        {loading && <p className="loading-task">Loading Tasks....</p>}
        {error && <p className="error-loading">Error: {error}</p>}
        {tasks.map((task) => {
            //check if task[sortby] equals value
            if (task[sortby] == value) {
              setFilterCount(filterCount + 1)
              return (
                  <TaskMinimized
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  objective={task.objective}
                  priority={task.priority}
                  status={task.status}
                  datecreated={task.datecreated}
                  completed={task.completed}
                  />
              )
            }
        })}
        {filterCount === 0 && !loading && !error && <p className="default-msg">No tasks available.</p>}
    </div>
  )
}

export default SortedTask
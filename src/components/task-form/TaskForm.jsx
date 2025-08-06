import React from 'react'
import './taskform.css'
import { MdClose } from 'react-icons/md'

const TaskForm = () => {
  return (
    <div className="task-form">
        <div className="task-form-container">
            <div className="input-flex-container">
                <h3>Add New Task</h3>
                <MdClose />
            </div>
            <form action="#">
                <input type="text" name="title" id="title" placeholder='Enter Title' />
                <textarea name="description" id="description" placeholder="Task Description"></textarea>
                <select name="priority" id="priority">
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <input type="date" name="dueDate" id="dueDate" />
                <input type="file" name="attachment" id="attachment" />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    </div>
  )
}

export default TaskForm
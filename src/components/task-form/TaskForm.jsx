import { React, useEffect, useState } from "react";
import "./taskform.css";
import { createTask, editTask, updateTask } from "../../utils/taskManager";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ title, submitTitle }) => {
  const navigate = useNavigate();
  const [editing, setEditingTask] = useState(null)

  const createNewTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const newTask = updateTask(formData);
    
    // POST newTask to the server
    createTask(newTask);

    // Reset the form after submission
    e.target.reset();

    // Navigate to the tasks page after creating a task
    navigate('/tasks');
  }

  const editExistingTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const editedTask = updateTask(formData)

    // PUT editedTask to the server
    editTask(editedTask);

    // Reset the form after submission
    e.target.reset(); 

    // Navigate to the tasks page after editing a task
    navigate('/tasks');
  }



  return (
    <div className="task-form">
      <div className="task-form-container">
        <div className="input-flex-container">
          <h3>{title}</h3>
        </div>
        <form method="POST" onSubmit={createNewTask}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            required
          />
          <textarea
            name="objective"
            id="objective"
            placeholder="Objective"
            required
          ></textarea>
          <textarea
            name="description"
            id="description"
            placeholder="Task Description"
            required
          ></textarea>
          <textarea
            name="checklist"
            id="checklist"
            placeholder="Checklist (Press Enter to start a new checklist item)"
          ></textarea>
          <div className="input-flex-container">
            <select name="priority" id="priority">
              <option value="Low">Low Priority</option>
              <option value="Moderate">Moderate Priority</option>
              <option value="High">High Priority</option>
            </select>
            <input type="datetime-local" name="dueDateTime" id="dueDateTime" />
            {/* <input type="file" name="attachment" id="attachment" /> */}
          </div>
          <input type="submit" value={submitTitle} />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

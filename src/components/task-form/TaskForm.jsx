import { React, useEffect } from "react";
import "./taskform.css";
import useFetchTasks from "../../hooks/useFetchTasks";
import { updateTask } from "../../utils/createTask";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ title, submitTitle }) => {
  const [tasks] = useFetchTasks()
  const navigate = useNavigate();

  const createNewTask = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const newTask = updateTask(formData);
    
    // POST newTask to the server
    if (newTask.title !== "") {
      fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
      .then(res => res.json())
      .then(data => console.log("Task created:", data))
      .catch(error => console.error("Error creating task:", error));   
    }

    e.target.reset(); // Reset the form after submission
    navigate('/tasks'); // Navigate to the tasks page after creating a task
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

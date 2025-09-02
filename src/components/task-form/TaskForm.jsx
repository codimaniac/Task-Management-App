import { useEffect, useRef } from "react";
import "./taskform.css";
import { createNewTask, createTask, createTaskInFirestore, editTask, updateEditForm, updateTask } from "../../utils/taskManager";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchTask } from "../../hooks/useFetchTasks";


const TaskForm = ({ title, submitTitle }) => {
  const navigate = useNavigate();
  const formRef = useRef(null)
  const { state } = useLocation()
  const [task] = useFetchTask(state)

  // Input task details into edit form on page load
  useEffect(() => {
    if(title == "Edit Task") {
      const form = formRef.current
      updateEditForm(form, task)
    }

  }, [task.title])

  const onSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const taskData = title === "Add New Task" ? createNewTask(formData) : updateTask(formData)

    if (title === "Add New Task") {
      // POST newTask to the server
      // createTask(taskData);
      createTaskInFirestore(taskData);

      // Reset the form after submission
      // e.target.reset();

      // Navigate to the tasks page after creating a task
      // navigate('/tasks');
    } else if (title === "Edit Task") {
      // PUT editedTask to the server
      editTask(state, taskData);

      // Reset the form after submission
      e.target.reset(); 

      // Navigate to the tasks page after editing a task
      navigate('/tasks');
    }
  }

  return (
    <div className="task-form">
      <div className="task-form-container">
        <div className="input-flex-container">
          <h3>{title}</h3>
        </div>
        <form method="POST" onSubmit={onSubmitHandle} ref={formRef}>
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

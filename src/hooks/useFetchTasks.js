import { useState, useEffect } from 'react';

export function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not locate resource");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [tasks.length]);

  // Return the tasks, loading state, and error state
  return [tasks, loading, error]
}

export function useFetchTask(id) {
  const [task, setTask] = useState({}) 

  if (id!==null) {
    fetch(`http://localhost:5000/tasks/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not locate resource");
        }
        return response.json();
      })
      .then((data) => {
        setTask(data)
      })
      .catch((error) => {
        console.error(error)
      });
  }

  // Return the tasks
  return [task]
}
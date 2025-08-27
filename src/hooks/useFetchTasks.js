import { useState, useEffect } from 'react';
import { API } from '../utils/globalVariables';
import { useRefresh } from '../contexts/RefreshContext';

export function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { refreshFlag } = useRefresh();

  useEffect(() => {
    fetch(`${API}/tasks`)
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
  }, [refreshFlag]);

  // Return the tasks, loading state, and error state
  return [tasks, loading, error]
}

export function useFetchTask(id) {
  const [task, setTask] = useState({}) 

  if (id!==null) {
    fetch(`${API}/tasks/${id}`)
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
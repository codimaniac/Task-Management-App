import { useState, useEffect } from 'react';
import { API } from '../utils/globalVariables';
import { useRefresh } from '../contexts/RefreshContext';
import { auth, db } from "../utils/firebaseConfig";
import { onSnapshot, doc, collection, getDoc } from 'firebase/firestore';

const userId = auth.currentUser ? auth.currentUser.uid : null;

export function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { refreshFlag } = useRefresh();

  useEffect(() => {
    // fetch(`${API}/tasks`)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Could not locate resource");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setTasks(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   });
    if (userId !== null) {
      const subscribe = onSnapshot(collection(db, "users", userId, "tasks"), (snapshot) => {
        setTasks(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })))

        tasks.length !== 0 && console.log("Current tasks: ", tasks)
        setLoading(!loading)
      }, (error) => {
        setError(error.message)
      })

      return subscribe
    }
  }, [refreshFlag]);

  // Return the tasks, loading state, and error state
  return [tasks, loading, error]
}

export function useFetchTask(id) {
  const [task, setTask] = useState({}) 

  useEffect(() => {
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
  }, [id]);

  // Return the tasks
  return [task]
}
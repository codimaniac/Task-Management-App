import { useState, useEffect } from 'react';
import { useRefresh } from '../contexts/RefreshContext';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../utils/firebaseConfig';

export function useFetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { refreshFlag } = useRefresh();
  const userID = auth.currentUser.uid

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (userID) {
          const docsSnapshot = await getDocs(collection(db, "users", userID, "tasks"))
          setLoading(false)
          setTasks(docsSnapshot.docs.map(doc => ({ 
            id: doc.id, 
            ...doc.data()
          })))
        }
      }
      catch (err) {
        setLoading(false)
        setError(err.message)
        console.error("Error fetching tasks: ", err)
      }
    }

    fetchTasks()
  }, [refreshFlag]);

  // Return the tasks, loading state, and error state
  return [tasks, loading, error]
}

export function useFetchTask(id) {
  const [task, setTask] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const userID = auth.currentUser.uid

  useEffect(() => {
    if (id!==null) {
      const fetchTask = async () => {
        try {
          if (userID) {
            const docSnapshot = await getDoc(doc(db, "users", userID, "tasks", id))
            setLoading(false)
            setTask({id: docSnapshot.id, ...docSnapshot.data()})
          }
        }
        catch (err) {
          setLoading(false)
          setError(err.message)
          console.error("Error fetching task: ", err)
        }
      }

      fetchTask()
    }

  }, [id]);

  // Return the tasks
  return [task, loading, error]
}
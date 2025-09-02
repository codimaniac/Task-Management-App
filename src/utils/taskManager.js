import { API } from "./globalVariables";
import { v4 as uuidv4 } from 'uuid';
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, addDoc, collection, updateDoc } from "firebase/firestore";

const userId = auth.currentUser ? auth.currentUser.uid : null;

// Function to set the new task
export const createNewTask = (formData) => {
    const newTask = {
        // id: uuidv4(),
        title: formData.get('title'),
        objective: formData.get('objective'),
        description: formData.get('description'),
        checklist: formData.get('checklist').split('\n'),
        priority: formData.get('priority'),
        status: "Not Started",
        datecreated: new Date().toISOString().split("T")[0],
        dueDate: formData.get('dueDateTime').split("T")[0],
        dueTime: formData.get('dueDateTime').split("T")[1],
        completed: false
    }

    return newTask;
}

//function to update an existing task
export const updateTask = (formData) => {
    const updatedTask = {
        title: formData.get('title'),
        objective: formData.get('objective'),
        description: formData.get('description'),
        checklist: formData.get('checklist').split('\n'),
        priority: formData.get('priority'),
        dueDate: formData.get('dueDateTime').split("T")[0],
        dueTime: formData.get('dueDateTime').split("T")[1]
    }

    return updatedTask;
}

export const updateEditForm = (form, prevTaskData) => {
    prevTaskData.title && `${ form.title.value = prevTaskData.title }`
    prevTaskData.objective && `${ form.objective.value = prevTaskData.objective }`
    prevTaskData.description && `${ form.description.value = prevTaskData.description }`
    prevTaskData.checklist && `${ form.checklist.value = prevTaskData.checklist.join('\n') }`
    prevTaskData.priority && `${ form.priority.value = prevTaskData.priority }`
    prevTaskData.dueDate && `${ form.dueDateTime.value = prevTaskData.dueDate + "T" + prevTaskData.dueTime }`
}

// Function to reset the new task to its initial state
export const resetTask = () => {
    const newTask = {
        title: "",
        objective: "",
        description: "",
        checklist: "",
        priority: "",
        status: "Not Started",
        datecreated: new Date().toISOString().split("T")[0],
        dueDate: "",
        dueTime: "",
        completed: false
    }

    return newTask;
}

// function to create task in firestore

export const createTaskInFirestore = async (newTask) => {
    try {
        if (userId !== null) {
            console.log("Creating task in Firestore: ", newTask);
            await addDoc(collection(db, "users", userId, "tasks"), newTask);
            console.log("Task created in Firestore with ID: ", newTask.title);
        }
    } catch (error) {
        console.error("Error adding document: ", error.message);
    }
}

// CRUD operations for tasks using REST API

export const createTask = (newTask) => {
    if (newTask.title !== "") {
        fetch(`${API}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error("Couldn't create task")
                }
                console.log("Task Created Successfully!")
                return res.json()
            })
            .then(data => console.log("Task created:", data))
            .catch(error => console.error("Error creating task:", error));
    }
}

// Edit task in firestore 

export const updateTaskInFirestore = async (id, updatedTask) => {
    try {
        await updateDoc(collection(db, userId, "tasks", id), updatedTask)
        console.log("Task updated successfully in Firestore!")
    }
    catch (err) {
        console.log("Error updating task: ", err)
    }
}

export const editTask = (id, updatedTask) => {
    fetch(`${API}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    })
    .then(res => {
        if(!res.ok) {
            throw new Error("Couldn't fetch task")
        }
        console.log("Task edited successfully!")
        return res.json()
    })
    .then(data => console.log("Edited Task: ", data))
    .catch(error => console.error(error))
}

export const deleteTask = (id) => {
    fetch(`${API}/tasks/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to delete task")
            }
            
            console.log('Task deleted successfully!')
            return res.json()
        })
        .then(data => console.log("Deleted Task: ", data))
        .catch(error => console.error("Error delating task: ", error))
}

export const startTask = (id) => {
    fetch(`${API}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: "In-progress"
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Couldn't update task data")
            }
            
            return res.json()
        })
        .then(data => console.log("Started ", data.title))
        .catch(error => console.error(error))
}

export const finishTask = (id) => {
    fetch(`${API}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: "Completed",
            completed: true
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Couldn't update task data")
            }

            return res.json()
        })
        .then(data => console.log("Finished ", data.title))
        .catch(error => console.error(error))
}

export const countTaskByValue = (tasks, sortBy, value) => {
    let count = 0
    let sortedTaskId = []

    tasks.map((task) => {
        if(task[sortBy] == value) {
            count+=1
            sortedTaskId.push(task.id)
        }
    })

    return [count, sortedTaskId]
}

export const showDetails = (id) => {
    console.log(id)
}
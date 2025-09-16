import { API } from "./globalVariables";
import { v4 as uuidv4 } from 'uuid';
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

// Function to set the new task
export const createNewTask = (formData) => {
    const newTask = {
        id: uuidv4(),
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

export const createTask = (newTask) => {
    if (newTask.title !== "") {
        const userID = auth.currentUser.uid

        setDoc(doc(db, "users", userID, "tasks", newTask.id), newTask)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
}

export const editTask = (id, updatedTask) => {
    const userID = auth.currentUser.uid

    setDoc(doc(db, "users", userID, "tasks", id), updatedTask, { merge: true})
    .catch((error) => {
        console.error("Error updating document: ", error);
    });   
}

export const deleteTask = (id) => {
    const userID = auth.currentUser.uid

    deleteDoc(doc(db, "users", userID, "tasks", id))
    .catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export const startTask = (id) => {
    const userID = auth.currentUser.uid

    setDoc(doc(db, "users", userID, "tasks", id), {
        status: "In-progress"
    }, { merge: true})
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
}

export const finishTask = (id) => {
    const userID = auth.currentUser.uid

    setDoc(doc(db, "users", userID, "tasks", id), {
        status: "Completed",
        completed: true
    }, { merge: true })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
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
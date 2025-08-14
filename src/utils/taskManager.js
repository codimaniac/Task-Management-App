// Function to set the new task
export const updateTask = (formData) => {
    const newTask = {
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
        fetch('http://localhost:5000/tasks', {
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
                return res.json()
            })
            .then(data => console.log("Task created:", data))
            .catch(error => console.error("Error creating task:", error));
    }
}

export const editTask = (id, newTask) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
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
    fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to delete task")
            }
            
            console.log('Task deleted successfully!')
            window.location.reload()
            return res.json()
        })
        .then(data => console.log("Deleted Task: ", data))
        .catch(error => console.error("Error delating task: ", error))
}

export const startTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
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
            
            window.location.reload()
            return res.json()
        })
        .then(data => console.log("Started ", data.title))
        .catch(error => console.error(error))
}

export const finishTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
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

            window.location.reload()
            return res.json()
        })
        .then(data => console.log("Finished ", data.title))
        .catch(error => console.error(error))
}
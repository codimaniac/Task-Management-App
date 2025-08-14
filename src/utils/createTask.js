// Function to set the new task
export const updateTask = (formData) => {
    const newTask ={
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
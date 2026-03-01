const tasksModel = require('../model/tasks_model');

// get all tasks
getAllTasks = async () => {
    const tasks = await tasksModel.getAllTasks();
    return tasks;
}

getTaskById = async (id) => {
    const task = await tasksModel.getTaskById(id);

    if (!task) {
        throw new Error('Task not found');
    }

    return task;
}

createTask = async ({ title, description, status }) => {

    const allowedStatuses = ['pending', 'in progress', 'completed'];

    const cleanTitle = title?.trim();
    const cleanDescription = description?.trim();
    const cleanStatus = status?.trim().toLowerCase();

    if (!cleanTitle || !cleanDescription) {
        throw new Error("Title and description are required");
    }

    if (cleanStatus && !allowedStatuses.includes(cleanStatus.toLowerCase())) {
        throw new Error("Invalid status value");
    }

    const task = await tasksModel.createNewTask({
        title: cleanTitle,
        description: cleanDescription,
        status: cleanStatus
    });

    if (!task) {
        throw new Error("Failed to create task");
    }
    return task;
}

// update 
updateTask = async (id, { title, description, status }) => {
    const task = await tasksModel.updateTask(id, { title, description, status });

    if (!task) {
        throw new Error('Task not found');
    }

    return task;

}


// delete 
deleteTask = async (id) => {
    const task = await tasksModel.deleteTask(id);

    if (!task) {
        throw new Error('Task not found');
    }

    return task;
}


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}

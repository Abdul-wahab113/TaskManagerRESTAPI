const taskModel = require('../models/tasks_model');

const allowedStatuses = ['pending', 'in_progress', 'completed'];

const getAll = async () => {
    return await taskModel.getAllTasks();
};

const getById = async (id) => {
    const task = await taskModel.getTaskById(id);

    if (!task) {
        const error = new Error('Task not found');
        error.statusCode = 404;
        throw error;
    }

    return task;
};

const create = async ({ title, description, status }) => {

    const cleanTitle = title?.trim();
    const cleanDescription = description?.trim();
    const cleanStatus = status?.trim().toLowerCase();

    if (!cleanTitle || !cleanDescription) {
        const error = new Error('Title and description are required');
        error.statusCode = 400;
        throw error;
    }

    if (!allowedStatuses.includes(cleanStatus)) {
        const error = new Error('Invalid status value');
        error.statusCode = 400;
        throw error;
    }

    return await taskModel.createNewTask({
        title: cleanTitle,
        description: cleanDescription,
        status: cleanStatus
    });
};

const update = async (id, { title, description, status }) => {

    const updatedTask = await taskModel.updateTask(id, {
        title,
        description,
        status
    });

    if (!updatedTask) {
        const error = new Error('Task not found');
        error.statusCode = 404;
        throw error;
    }

    return updatedTask;
};

const remove = async (id) => {

    const deletedTask = await taskModel.deleteTask(id);

    if (!deletedTask) {
        const error = new Error('Task not found');
        error.statusCode = 404;
        throw error;
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
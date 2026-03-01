const taskService = require('../service/tasks_service');

const getAllTasks = async (req, res, next) => {

    try {
        const tasks = await taskService.getAllTasks();
        if (!tasks || tasks.length === 0) {
            return res.status(404).json({
                error: 'No tasks found'
            });
        }
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }

}

const getTaskById = async (req, res, next) => {

    try {
        const id = req.validatedId;
        const task = await taskService.getTaskById(id);

        if (!task) {
            return res.status(404).json({
                error: 'Task not found'
            });
        }

        res.status(200).json(task);

    } catch (error) {
        next(error);
    }

}

const createNewTask = async (req, res, next) => {
    try {
        const { title, description, status } = req.body;

        const task = await taskService.createTask({
            title,
            description,
            status
        });

        res.status(201).json(task);

    } catch (error) {
        next(error);
    }

}

const updateTask = async (req, res, next) => {

    try {
        const id = req.validatedId;
        const { title, description, status } = req.body;

        if (!title || !description || !status) {
            return res.status(400).json({
                error: "Title, description, and status are required for PUT"
            });
        }

        const task = await taskService.updateTask(id, {
            title,
            description,
            status
        });

        res.status(200).json(task);

    } catch (error) {
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try {
        const id = req.validatedId;

        const deletedTask = await taskService.deleteTask(id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(
            {
                message: 'Task deleted successfully',
                task: deletedTask
            });

    } catch (error) {
        next(error);
    }
}




module.exports = {
    getAllTasks,
    getTaskById,
    createNewTask,
    updateTask,
    deleteTask
}
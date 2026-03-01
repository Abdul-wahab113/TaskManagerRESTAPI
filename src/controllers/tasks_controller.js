const taskService = require('../services/tasks_service');

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAll();

        return res.status(200).json({
            success: true,
            data: tasks
        });

    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const id = req.validatedId;

        const task = await taskService.getById(id);

        return res.status(200).json({
            success: true,
            data: task
        });

    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const { title, description, status } = req.body;

        const task = await taskService.create({
            title,
            description,
            status
        });

        return res.status(201).json({
            success: true,
            data: task
        });

    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.validatedId;
        const { title, description, status } = req.body;

        const task = await taskService.update(id, {
            title,
            description,
            status
        });

        return res.status(200).json({
            success: true,
            data: task
        });

    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const id = req.validatedId;

        await taskService.remove(id);

        return res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllTasks,
    getById,
    create,
    update,
    remove
};
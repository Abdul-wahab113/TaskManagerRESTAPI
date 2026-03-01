const taskController = require('../controller/tasks_controller');
const express = require('express');
const router = express.Router();
const validateId = require('../middleware/validateId');


router.get('/',taskController.getAllTasks);
router.get('/:id', validateId, taskController.getTaskById); 
router.post('/', taskController.createNewTask);
router.put('/:id', validateId, taskController.updateTask);
router.delete('/:id', validateId, taskController.deleteTask);


module.exports = router;
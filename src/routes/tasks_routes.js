const taskController = require('../controllers/tasks_controller');
const express = require('express');
const router = express.Router();
const validateId = require('../middlewares/validateId');


router.get('/',taskController.getAllTasks);
router.get('/:id', validateId, taskController.getById); 
router.post('/', taskController.create);
router.put('/:id', validateId, taskController.update);
router.delete('/:id', validateId, taskController.remove);


module.exports = router;
const express = require('express');
const idHandler = require('./middlewares/idHandler');
const titleHandler = require('./middlewares/titleHandler');
const taskController = require('./controllers/taskController');

const router = express.Router();

router.get('/tasks/:id', taskController.getById);

router.get('/tasks', taskController.getAll);

router.post('/tasks', idHandler, titleHandler, taskController.addOne);

router.put('/tasks/:id', idHandler, taskController.putById);

router.delete('/tasks/:id', taskController.deleteById);

module.exports = router;

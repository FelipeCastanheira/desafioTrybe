const express = require('express');
// const idHandler = require('./middlewares/idHandler');
const titleHandler = require('./middlewares/titleHandler');
const taskController = require('./controllers/taskController');

const router = express.Router();

router.get('/tasks/:id', taskController.getById);

router.get('/tasks', taskController.getAll);

router.post('/tasks', titleHandler, taskController.addOne);

router.put('/tasks/:id', taskController.putById);

router.delete('/tasks/:id', taskController.deleteById);

module.exports = router;

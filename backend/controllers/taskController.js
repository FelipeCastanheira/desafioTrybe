const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  const tasks = await taskService.getAll();
  return res.status(200).json(tasks);
};

const getById = async (req, res) => {
  const id = +req.params.id;
  const task = await taskService.getById(id);
  if (!task) {
    return res.status(404).json({ message: 'task not found' });
  }
  return res.status(200).json(task);
};

const addOne = async (req, res) => {
  const task = await taskService.addOne(req.body);
  return res.status(201).json(task);
};

const putById = async (req, res) => {
  const id = +req.params.id;
  const task = await taskService.putById({ id, ...req.body });
  if (!task) {
    return res.status(404).json({ message: 'task not found' });
  }
  return res.status(200).json(task);
};

const deleteById = async (req, res) => {
  const id = +req.params.id;
  const task = await taskService.deleteById(id);
  if (!task) {
    return res.status(404).json({ message: 'task not found' });
  }
  return res.status(204).json(task);
};

module.exports = {
  getById,
  getAll,
  addOne,
  putById,
  deleteById,
};

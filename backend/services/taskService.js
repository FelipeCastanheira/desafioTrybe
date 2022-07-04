const formatDate = require('../helpers/formatDate');
const taskModel = require('../models/taskModel');

const getAll = async () => {
  const tasks = await taskModel.getAll();
  return tasks;
};

const getById = async (id) => {
  const task = await taskModel.getById(id);
  return task;
};

const addOne = async (body) => {
  const newDate = formatDate(new Date());
  const newTask = { ...body, date: newDate };
  await taskModel.addOne(newTask);
  return newTask;
};

const putById = async (body) => {
  const tasks = await taskModel.getAll();
  const sameId = ({ id }) => id === body.id;
  const taskExists = tasks.some(sameId);
  if (!taskExists) return false;
  await taskModel.putById(body);
  return body;
};

const deleteById = async (id) => {
  const tasks = await taskModel.getAll();
  const sameId = (data) => id === data.id;
  const taskExists = tasks.some(sameId);
  if (!taskExists) return false;
  await taskModel.deleteById(id);
  return true;
};

module.exports = {
  getAll,
  getById,
  addOne,
  putById,
  deleteById,
};

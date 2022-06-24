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
  const tasks = await taskModel.getAll();
  const sameName = ({ name }) => name === body.name;
  const taskExists = tasks.some(sameName);
  if (taskExists) return false;
  const id = tasks.length + 1;
  const response = await taskModel.addOne({ ...body, id });
  return response;
};

const putById = async (body) => {
  const tasks = await taskModel.getAll();
  const sameId = ({ id }) => id === body.id;
  const taskExists = tasks.some(sameId);
  if (!taskExists) return false;
  const response = await taskModel.putById(body);
  return response;
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

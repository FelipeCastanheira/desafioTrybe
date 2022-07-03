const connection = require('./connection');

// GET /tasks
const getAll = async () => {
  const [tasks] = await connection.execute(
    'SELECT * FROM TaskManager.tasks;',
  );
  return tasks;
};

// GET /tasks/:id
const getById = async (id) => {
  const [task] = await connection.execute(
    'SELECT * FROM TaskManager.tasks WHERE id = ?;',
    [id],
  );
  return task[0];
};

// POST /tasks
const addOne = async (body) => {
  const { title, date, type } = body;
  await connection.execute(
    'INSERT INTO TaskManager.tasks (title, date, type) VALUES (?, ?, ?);',
    [title, date, type],
  );
  return body;
};

// PUT /tasks/:id
const putById = async ({ id, type }) => {
  await connection.execute(
    `UPDATE TaskManager.tasks
    SET type = ?
    WHERE id = ?;`,
    [type, id],
  );
  return true;
};

// DELETE /tasks/:id
const deleteById = async (id) => {
  await connection.execute(
    'DELETE FROM TaskManager.tasks WHERE id = ?',
    [id],
  );
};

module.exports = {
  getAll,
  getById,
  addOne,
  putById,
  deleteById,
};

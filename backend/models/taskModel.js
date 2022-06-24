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
  const [product] = await connection.execute(
    'SELECT * FROM TaskManager.tasks WHERE id = ?;',
    [id],
  );
  return product[0];
};

// POST /tasks
const addOne = async (body) => {
  const { id, name, quantity } = body;
  await connection.execute(
    'INSERT INTO TaskManager.tasks (id, name, quantity) VALUES (?, ?, ?);',
    [id, name, quantity],
  );
  return body;
};

// PUT /tasks/:id
const putById = async ({ id, name, quantity }) => {
  await connection.execute(
    `UPDATE TaskManager.tasks
    SET id = ?, name = ?, quantity = ?
    WHERE id = ?;`,
    [id, name, quantity, id],
  );
  return { id, name, quantity };
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

const pool = require('../config/db');

const getAllTasks = async () => {
  const [rows] = await pool.query('SELECT * FROM tasks ORDER BY fecha_creacion DESC');
  return rows;
};

const getTaskById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
  return rows[0];
};

const createTask = async (task) => {
  const { titulo, descripcion, estado } = task;
  const [result] = await pool.query(
    'INSERT INTO tasks (titulo, descripcion, estado) VALUES (?, ?, ?)',
    [titulo, descripcion || null, estado || 'pendiente']
  );
  return { id: result.insertId, titulo, descripcion, estado: estado || 'pendiente' };
};

const updateTask = async (id, task) => {
  const { titulo, descripcion, estado } = task;
  await pool.query(
    'UPDATE tasks SET titulo = ?, descripcion = ?, estado = ? WHERE id = ?',
    [titulo, descripcion, estado, id]
  );
  return getTaskById(id);
};

const deleteTask = async (id) => {
  const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

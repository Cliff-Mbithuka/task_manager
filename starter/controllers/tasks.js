const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
 try {
   const tasks = await Task.find({ });
 } catch (error) {
  res.status(500).json({msg:error})
 }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({msg:error})
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

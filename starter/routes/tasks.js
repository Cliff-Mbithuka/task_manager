const express = require("express");
const task = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

task.route("/").get(getAllTasks).post(createTask);
task.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = task;

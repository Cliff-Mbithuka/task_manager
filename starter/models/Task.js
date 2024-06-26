const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide Name"],
    trim: true,
    maxlength: [20, "Name must not be more than 20 chracters"],
  },
  completed: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model("Task", TaskSchema);

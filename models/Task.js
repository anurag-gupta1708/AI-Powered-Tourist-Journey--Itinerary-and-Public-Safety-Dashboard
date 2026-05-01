const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  projectId: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Task", taskSchema);
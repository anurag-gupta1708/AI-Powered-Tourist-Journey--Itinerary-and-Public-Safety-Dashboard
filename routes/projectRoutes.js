const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Create project
router.post("/", async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
});

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
const Project = require("../config/models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.json(project);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate("members");
  res.json(projects);
};
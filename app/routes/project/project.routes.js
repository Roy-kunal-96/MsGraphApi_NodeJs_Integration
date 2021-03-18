const router = require("express").Router();
const Project = require("../../controllers/projectControllers/project.controller");
const project = new Project();
router.post("/", project.createProject);
router.get("/",project.getAllProjects);
router.delete("/", project.deleteProject);
router.put("/", project.updateProject);
router.post("/archive", project.archiveProject);
module.exports = router;
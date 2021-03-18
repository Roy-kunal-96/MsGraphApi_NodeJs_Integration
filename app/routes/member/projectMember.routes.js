const router = require("express").Router();
const ProjectMemeber = require("../../controllers/members/projectMembers.controller");

// middleware
const checkToken = require('../../middlewares/checkToken.middleware')


const projectMembers = new ProjectMemeber();

/**
 * @type Express.Router
 *
 * @api - /api/v1/examples/create @method - POST
 */




router.post("/", [checkToken], projectMembers.createProjectMembers)
router.get("/:teamId", [checkToken], projectMembers.getprojectMembers)




module.exports = router;

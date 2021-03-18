const router = require("express").Router();
const UserLicenses = require("../../controllers/userLicenses/licenses.controller");

// middleware
const checkToken = require('../../middlewares/checkToken.middleware')


const userLicenses = new UserLicenses();

/**
 * @type Express.Router
 *
 * @api - /api/v1/examples/create @method - POST
 */





router.get("/getUserLicenses", [checkToken], userLicenses.getUserLicenses);
router.get("/assignUserLicense", [checkToken], userLicenses.assignUserLicense);
router.get("/revokeUserLicense", [checkToken], userLicenses.assignUserLicense);




module.exports = router;

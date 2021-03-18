const router = require("express").Router();
const AccessToken = require("../../controllers/accessTokenController/accessToken.controller");

// middleware


const accessToken = new AccessToken();

/**
 * @type Express.Router
 *
 * @api - /api/v1/examples/create @method - POST
 */




router.get("/", accessToken.createAccessToken)




module.exports = router;

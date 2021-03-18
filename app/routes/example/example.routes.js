const router = require("express").Router();
const Example = require("../../controllers/exampleControllers/example.controller");

// middleware


const example = new Example();

/**
 * @type Express.Router
 *
 * @api - /api/v1/examples/create @method - POST
 */


router.post("/", example.createExample);

router.get("/", example.getAllExamples)


router.get("/:id", example.getOneExample)

router.put("/:id", example.getOneExampleAndUpdate)

router.delete("/:id", example.getOneExampleAndRemove)



module.exports = router;

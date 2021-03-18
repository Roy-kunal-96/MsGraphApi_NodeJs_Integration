const validate = require('../../validators/example.validator')


/**
 * @class - Example class containing all the controllers
 */

class Example {
  /**
   * @function - Get all the registered examples from the db
   *
   * @param - Express.req , Express.res
   *
   * @returns - List of registered examples
   */

  async getAllExamples(req, res) {



    res.status(200).send({
      status: true,
      examples: [],
    });
  }

  async getOneExample(req, res) {


    res.status(200).send({
      status: true,
      examples: example,
    });

  }

  async getOneExampleAndUpdate(req, res) {


    let { error } = validate.validate(req.body)
    if (error) {
      return res.status(400).send({
        message: "failed",
        result: error
      })
    }


    res.status(200).send({
      status: true,
      examples: [],
    });

  }

  async getOneExampleAndRemove(req, res) {

    res.status(200).send({
      status: status,
      example: [],
    });

  }

  async createExample(req, res) {
    // throw new Error("could not create a example")
    let { error } = validate.validateExample(req.body)
    if (error) {
      return res.status(400).send({
        message: "failed",
        result: error
      })
    }

    return res.status(200).send({
      message: "example Created",
      result: []
    });
  }




}

module.exports = Example;

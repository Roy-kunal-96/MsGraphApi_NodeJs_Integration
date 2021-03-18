const Joi = require('@hapi/joi');

function validate(user) {
    let schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().max(255),
        phone: Joi.number(),
        username: Joi.string().min(3).max(50).required(),

    })
    let result = schema.validate(user)
    console.log(result);
    return result
}



module.exports.validate = validate



const Joi = require('@hapi/joi');

function validateProjectMember(member) {
    let schema = Joi.object({
        groupId: Joi.string().max(40).required(),
        userId: Joi.string().max(40).required(),
        ownerRole: Joi.boolean()
    })
    let result = schema.validate(member)
    console.log(result);
    return result
}



module.exports.validateProjectMember = validateProjectMember



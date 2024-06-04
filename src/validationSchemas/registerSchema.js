const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().min(8).max(30).required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(5).max(30).required(),
    isActive: Joi.boolean(),
    isDeleted: Joi.boolean(),
})

module.exports = {
    registerSchema
}
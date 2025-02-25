
const Joi = require('joi');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        console.log('ERROR:', error);
      return res.status(400).send(error.details[0].message);
    }
    next();
  };
};

module.exports = {validate};
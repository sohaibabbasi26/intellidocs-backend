const express = require('express');
const router = express.Router();
const {loginSchema} = require('../validationSchemas/loginSchema');
const {registerSchema} = require('../validationSchemas/registerSchema');
const {validate} = require('../helpers/joi');
const {registerHandler,loginHandler} = require('../handlers/handler')

router.use(express.json());
router.post('/register',validate(registerSchema), registerHandler);
router.post('/login',validate(loginSchema), loginHandler);

module.exports = router;

const {
    registerService,
    loginService
} = require('../service/service');


const registerHandler = async (req, res) => {
    try {
        const { email, password, name, isActive, isDeleted } = req?.body;
        const result = await registerService({ email, password, name, isActive, isDeleted });
        console.log('result of registering a user:', result);
        res.status(201).send(result);

    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'Error registering user'});
    }
};

const loginHandler = async (req, res) => {
    try {
        const {email, password} = req?.body;
        const result = await loginService({email, password});
        console.log('result of login:', result);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({message: 'Error while logging in'});
    }
};

module.exports = {
    registerHandler,
    loginHandler
}
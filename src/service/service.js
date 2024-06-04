const db = require('../models/config/pgsqlConnect');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerService = async ({ email, password, name, isActive, isDeleted }) => {
    try{
        const check = await db.users.findOne({
            where: {
                email: email
            }
        })
        if (check){
            return "User with the provided email already exists!"
        } else {

            const hashedPassword = await bcrypt.hash(password, 10);

            const save = await db.users.create({
                email: email,
                password: hashedPassword,
                name: name,
                isActive: isActive,
                isDeleted: isDeleted
            });

            const payload = { user: save?.dataValues?.user_id , role: 'User' };
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(payload, secret, { expiresIn: '1h' }, );
            console.log("item saved:", save);
            return {token: token , message: 'User is registered!'}
        }
    } catch (err) {
        console.log('User Registration Error:',err);
        return 'Internal Server Error';
    }
}

const loginService = async ({email, password}) => {
    try{
        const extractedInfo = await db.users.findOne({
            where: {
                email: email
            }
        });

        const extractedPassword = extractedInfo?.dataValues?.password;
        if(extractedInfo && extractedInfo?.dataValues?.password){
            const bool = await bcrypt.compare(password, extractedPassword || extractedInfo?.dataValues?.password);
            if (bool === true){
                const payload = { userId: extractedInfo?.dataValues?.user_id  , role: 'User'} ;
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
                return {token: token, message: 'Login was successful!'};
            } else {
                return "Password doesn't match";
            }
        } else {
            return `User with email: ${email} doesn't exists.`;
        }

    }  catch(err){
        console.log('Error while logging in:',err);
        return 'Interal Server Error';
    } 
}

module.exports = {
    registerService,
    loginService
}
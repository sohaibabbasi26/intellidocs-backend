const express = require('express');
const authRouter = require('../routes/routes');
const cors = require('cors')
require('dotenv').config();

const serverListen = async () => {

    const corsOptions = {
        origin: process.env.CORS_ALLOWED_PATH, 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: [
            'Content-Type', 
            'Authorization',
            'Accept', 
            'Origin', 
            'User-Agent', 
            'X-Requested-With', 
            'X-HTTP-Method-Override', 
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Credentials', 
            'Access-Control-Allow-Headers', 
            'Access-Control-Allow-Methods' 
        ],
        optionsSuccessStatus: 204 
    };

    const app = express();
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(authRouter);

    //temporary route i created to check if the server is running, uncomment it when checking the server
    // app.get('/', (req, res) => {
    //     res.send('Hello from the server!');
    // })

    await app.listen(4000, () => {
        console.log('server is listening!!!!!!')
    })
}

module.exports = {serverListen};
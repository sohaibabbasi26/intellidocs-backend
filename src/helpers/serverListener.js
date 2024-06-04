const express = require('express');
const authRouter = require('../routes/routes');

const serverListen = async () => {
    const app = express();
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
const { dbInitialization } = require("./helpers/dbInit");
const { serverListen } = require("./helpers/serverListener");



const initiateServer = async () => {
    try {
        console.log(require('crypto').randomBytes(64).toString('hex'));
        await serverListen();
        await dbInitialization();
    } catch (err){
        console.log('ERROR:',err);
    }
}



module.exports = initiateServer;
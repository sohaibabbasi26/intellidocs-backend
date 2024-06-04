
const db = require('../models/config/pgsqlConnect');

// const dbInitialization = () => {
//     try{
//         sequelize.sync({ force: true }).then(() => {
//             console.log("Database and schemas synchronized")
//         });
//     } catch (err){
//         console.log('DB connection error:', err);
//     }
// }

const dbInitialization = async  () => {
    console.log("Password: ", process.env.DB_PASSWORD);
    db.sequelize.sync({ force: false })
        .then(() => {
            console.log("Database and schemas synchronized");
        })
        .catch((error) => {
            console.error("Error synchronizing database:", error);
        });
};

module.exports = {dbInitialization};
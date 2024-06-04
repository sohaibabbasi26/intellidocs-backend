const Sequelize = require('sequelize');
const db = {};
const path = require('path');
const basename = path.basename(__filename);
const fs = require('fs')
require('dotenv').config();


console.log("directory name:", __dirname);

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    "dialect": "postgres"
});
//path manipulation do not disturb this
const pathSegments = __dirname.split("\\");
pathSegments.pop();
const desiredPath = pathSegments.join("\\");
console.log("directory name:", desiredPath);

fs
    .readdirSync(desiredPath)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        try {
            const model = require(path.join(desiredPath, file))(sequelize, Sequelize.DataTypes);
            db[model.name] = model;
            console.log(`Model '${model.name}' loaded successfully.`);
        } catch (error) {
            console.error(`Error loading model from file '${file}':`, error);
        }
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

module.exports = db;
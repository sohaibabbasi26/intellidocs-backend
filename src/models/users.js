const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const users = sequelize.define('users',{
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type : DataTypes.STRING,
            allowNull: false
        },
        email: {
            type : DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isActive : {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return users;
}
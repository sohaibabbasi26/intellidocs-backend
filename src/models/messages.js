const {DataTypes} = require('sequelize');
const conversations = require('./conversations');

module.exports = (sequelize) => {
    const messages = sequelize.define('messages',{
        message_id : {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue : DataTypes.UUID,
            primaryKey: true
        },
        message: {
            type: DataTypes.STRING,
            allowNull : false
        },
        URL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        response : {
            type: DataTypes.STRING,
            allowNull : false
        },
        isActive : {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        conversation_id : {
            type: DataTypes.UUID,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    })

    return messages;
}
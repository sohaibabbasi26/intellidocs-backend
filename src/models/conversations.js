const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const users = sequelize.define('conversations',{
        conversation_id : {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue : DataTypes.UUID,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull : false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        isActive : {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    })

    return users;
}
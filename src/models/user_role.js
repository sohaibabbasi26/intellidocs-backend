const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const users = sequelize.define('user_role',{
        user_role_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        user_id: {
            type : DataTypes.UUID,
            allowNull: false
        },
        role_id: {
            type : DataTypes.UUID,
            allowNull: false
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
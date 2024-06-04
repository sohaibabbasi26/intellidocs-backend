const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const roles = sequelize.define('super_admin',{
        role_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type : DataTypes.STRING,
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
    return roles;
}
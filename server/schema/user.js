const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        zhName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        enName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        pwd: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        class_id:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER(20),
            allowNull: true,
        },
        sex:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        telephone:{
            type: DataTypes.INTEGER(20),
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD hh:mm:ss');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD hh:mm:ss');
            }
        }
    }, {
        freezeTableName: true
    })
}

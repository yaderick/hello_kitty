
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('attendance', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        date: {
            type:DataTypes.DATE,
            allowNull: true,
        },
        isAttend: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        classId:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        comment:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ana:{
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    })
}

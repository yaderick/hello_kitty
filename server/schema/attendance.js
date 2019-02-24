
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('attendance', {
        userName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        date: {
            type:DataTypes.DATE,
            allowNull: false,
        },
    }, {
        freezeTableName: true
    })
}

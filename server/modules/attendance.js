const moment = require('moment');
const sequelize= require('../config/db');
const Attendance = sequelize.import('../schema/attendance');
// 通过 sync 方法同步数据结构
// 即,创建表
Attendance.sync({force: false})


class AttendanceModel{
  /**
   * 打卡
   * @returns {Promise<boolean>}
  */
  static async create(username){
    let date = moment().format('YYYY-MM-DD hh:mm:ss')
    return await Attendance.create({
      username,
      date
    })
  }

}
module.exports =  AttendanceModel
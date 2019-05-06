const jwt = require('jsonwebtoken');
const util = require('util')
const verify = util.promisify(jwt.verify)
const bcrypt = require('bcryptjs');
const attendModel = require('../modules/attendance');
const statusCode = require('../utils/status-code');

class AttendanceController{
 
  static async create(ctx){
    const user = await AttendanceController.getUserInfo(ctx)
  }
   /**
     * 查询用户信息
     * @param ctx
     * @returns {Promise<void>}
     */
  static async getUserInfo(ctx){
     // 获取jwt
     console.log('哈哈');

     const token = ctx.header.authorization;
     console.log(token,'token');
     ctx.body = '啊哈'

     if (token) {
      let payload
      try {
          // 解密payload，获取用户名和ID
          payload = await verify(token.split(' ')[1], secret.sign)
          return payload

      } catch (err) {

          ctx.response.status = 412;
          ctx.body = statusCode.ERROR_412('查询失败，authorization error!')
      }
    }
  }

  static async update(ctx){
    const playoad = ctx.request.body

    await attendModel.update(playoad)
    ctx.response.status = 200;
    ctx.body = statusCode.SUCCESS_200('打卡成功')
  }

}

module.exports = AttendanceController
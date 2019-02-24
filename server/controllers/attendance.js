const jwt = require('jsonwebtoken');
const util = require('util')
const verify = util.promisify(jwt.verify)
const bcrypt = require('bcryptjs');

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

}

module.exports = AttendanceController
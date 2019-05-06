const sequelize= require('../config/db');
const User = sequelize.import('../schema/user');
const ClassModule = sequelize.import('../schema/class');

User.belongsTo(ClassModule, {foreignKey:'class_id'});  // 班级1:n学生的关系

// 通过 sync 方法同步数据结构
// 即,创建表
User.sync({force: false})


class UserModel{

  static async findUserByName(username){
    let [zhName, enName] = username.split('_')
    return await User.findAll({
      where:{
        zhName,
        enName
      },
      raw: true  // 直接返回js object对象
    })
  }

  /**
   * 创建用户
   * @param user
   * @returns {Promise<boolean>}
  */
  static async create(userInfo){
    let {zhName, enName, password, pwd, class_id, sex, telephone} = userInfo;
    return await User.create({
      zhName,
      enName,
      password,
      pwd,
      class_id,
      sex,
      telephone
    })
  }
  static async findAllUserList(){
    return  await User.findAll({
      attributes: ['id', 'zhName', 'enName','ana'],
      include: [{
        model:ClassModule,
      }],
    })
  }
}
module.exports =  UserModel
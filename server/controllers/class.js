
const classModel = require('../modules/class');
const statusCode = require('../utils/status-code');

class ClassController {
  static async create(ctx, next){
    const { className } = ctx.request.body;
    if(className) {

      let classN = await classModel.findClassByName(className);
      classN.map(x => x.get({plaint:true}))

      if(classN && classN.length!=0) {

        ctx.response.status = 200;
        ctx.body = {msg:'班级名已存在,请尝试创建新的班级',code:405}

      }else {

        await classModel.create(className)

        ctx.response.status = 200;
        ctx.body = statusCode.SUCCESS_200('创建成功', {
            className,
        })
      }
    }else {

      ctx.body = statusCode.ERROR_400('缺少参数className字端')
    }

  }
  static async getClassList(ctx){
    const classList = await classModel.fincClasslist();

    ctx.response.status = 200;
    ctx.body = statusCode.SUCCESS_200('查询成功', {
      classList,
    })
  }
}

module.exports = ClassController
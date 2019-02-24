const router = require('koa-router')()
const ClassController = require('../controllers/class')


router.prefix('/class')

/**
 * 班级接口
 */

// 创建班级
router.post('/register', ClassController.create);
// 查询班级
router.get('/list', ClassController.getClassList);

module.exports = router;
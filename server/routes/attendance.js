const router = require('koa-router')()
const AttendanceController = require('../controllers/attendance')


router.prefix('/attendance')

/**
 * 打卡接口
 */

// 打卡插入数据
router.post('/update', AttendanceController.update);


module.exports = router;
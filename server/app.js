const Koa = require('koa')
const app = new Koa()  // 第一步:创建实例
const cors = require('koa-cors');
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const attendance = require('./routes/attendance')
const classRouter = require('./routes/class')
const users = require('./routes/users')

// error handler
onerror(app)

app.use(cors());

// middlewares 第二步:app.use()传入中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(attendance.routes(), attendance.allowedMethods())
app.use(classRouter.routes(), classRouter.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app



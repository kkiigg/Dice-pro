const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onError = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
require('module-alias/register');
import  initRouter from './routes/index' 

require('./plugins/db')


// error handler
onError(app)

// middlewares
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
app.use(async (ctx:any,next:any)=>  {

  const start = new Date().getTime()
  await next()
  const end = new Date().getTime()
  const ms=end - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
// app.use(users.routes(), users.allowedMethods())
// app.use(index.routes(), index.allowedMethods())
initRouter(app)

// error-handling
app.on('error', (err:any, ctx:any) => {
  console.error('server error', err, ctx)
});



export default app

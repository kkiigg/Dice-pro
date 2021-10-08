const router = require('koa-router')()
const {query}=require('@/plugins/db')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/login', async (ctx, next) => {
  ctx.body = {
    status: 200,
  }
})

module.exports = router

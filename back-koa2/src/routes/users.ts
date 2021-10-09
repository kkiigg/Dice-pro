const router = require('koa-router')()
const {getUserList,deleteById,updateInfo,getUserByUsername}=require('@/dao/UserDao')
// const {querySQL,drop,update,query}=require('@/plugins/db')
const {ResEntity}=require('../entity/Base')

router.prefix('/user')

router.get('/userList', async function (ctx:any, next:any) {
  const res= await getUserList()
  console.log('res',res)
  ctx.body = ResEntity(true,res)
})

router.post('/deleteById', async function (ctx:any, next:any) {
  let {id}=ctx.request.body
  const res= await deleteById(id)
  ctx.body = ResEntity(true,res)
})

router.post('/update', async function (ctx:any, next:any) {
  let {id,wechat,phone,password,gender,age}=ctx.request.body
  const res= await updateInfo("USER",{id,wechat,phone,password,gender,age})
  console.log('res',res)
  ctx.body = ResEntity(true,res)
})

export default router

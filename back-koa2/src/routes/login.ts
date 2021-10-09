const  Router  =require('koa-router') 
const router=new Router()

import  {ResEntity} from '../entity/Base'
// import  {ResEntity} from '@/entity/Base.js'
const Bcrypt =require('bcrypt') ;
const saltRounds = 10;
import {createToken} from "../utils/jwt";
import {insert} from '../plugins/db'
import {getUserByUsername} from '../dao/UserDao'

router.post('/login', async (ctx:any, next:any) => {
  let {username,password} =ctx.request.body

  let queriedUser=await getUserByUsername(username,"id,gender,wechat,phone,age")
  console.log('queriedUser=>',queriedUser)

  if(!queriedUser || !queriedUser.length){
    ctx.response.body=ResEntity(false,{},'user is not exist')
    return 
  }

  if(Bcrypt.compare(password, queriedUser[0].password)){
    //登录成功
    let token=createToken(username)

    ctx.body = ResEntity(true,{
      user:queriedUser[0],
      token
    },'success')
  }else{
    ctx.response.body=ResEntity(false,{},'password is not correct')
  }

  
})
router.post('/regist', async (ctx:any, next:any) => {
  console.log(ctx.request.body)
  let {username,password} =ctx.request.body
  
  let queriedUser=await getUserByUsername(username,"id")
  console.log('queriedUser=>',queriedUser)
  if(queriedUser && queriedUser.length){
    ctx.response.body=ResEntity(false,{},'user is exist')
    return 
  }

  //密码加密
  const salt = Bcrypt.genSaltSync(saltRounds);
	const psdHash = Bcrypt.hashSync(password, salt);

  await insert('user',{
    username,password:psdHash
  })
  ctx.body = ResEntity(true,{},'success')
})

export default router

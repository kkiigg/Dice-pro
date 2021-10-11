/*
 * @Author: zw
 * @Date: 2021-10-09 11:05:58
 * @LastEditors: zw
 * @LastEditTime: 2021-10-11 18:33:46
 * @Description: 
 */
const  Router  =require('koa-router') 
const router=new Router()
import {post} from '../plugins/axios'
 
import  {ResEntity} from '../entity/Base'
// import  {ResEntity} from '@/entity/Base.js'
const Bcrypt =require('bcrypt') ;
const saltRounds = 10;
import {createToken} from "../utils/jwt";
import {insert} from '../plugins/db'
import {getUserByUsername} from '../dao/UserDao'
import config from '../config'
import {decode} from '../utils/kkSecret'

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

//wxlogin
router.post('/getWxSessionKey',async(ctx:any, next:any)=>{
  console.log(ctx.request.body)
  let {code} =ctx.request.body
  let appid=config.wx.appId
  let secret=decode(config.wx.appSecret,config.wx.kixSecretKey)

  let url=`https://api.weixin.qq.com/sns/jscode2session`

  let requestData={
    appid,
    secret,
    js_code:code,
    grant_type:'authorization_code'
  }
  console.log('requestData-->',requestData)
  try{

    //{"session_key":"xUOV4G4soVXaJBJ9SPRouA==","openid":"ooR4D5PLGowivQlEL1FWPyUHUwG4"} 类似这样
    interface wxLoginResponse {
      session_key:string
      openid:string
    }

    let res:wxLoginResponse=await post({
      url,//请求路径
      params: requestData   //post参数字符串
      //body: JSON.stringify(requestData)//post参数字符串
    })
    console.log('res-->',res)  
    ctx.body = ResEntity(true,{openid:res.openid},'success')
  }catch(e){
    console.log('error->',e)
    ctx.body = ResEntity(false,{},'success')
  }
  
})

export default router

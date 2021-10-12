/*
 * @Author: zw
 * @Date: 2021-10-09 11:05:58
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 18:45:26
 * @Description: 
 */
const  Router  =require('koa-router') 
const router=new Router()
import {post} from '../plugins/axios'
 
import  {ResEntity} from '../entity/Base'
// import  {ResEntity} from '@/entity/Base.js'



router.post('/createWx', async (ctx:any, next:any) => {
 
    ctx.response.body=ResEntity(true,{},'success')
  
})


export default router

/*
 * @Author: zw
 * @Date: 2021-10-09 11:05:58
 * @LastEditors: zw
 * @LastEditTime: 2021-10-11 18:46:23
 * @Description: 
 */
const {querySQL,drop,update,query}=require('../plugins/db')

//获取所有用户列表
export async function getUserList(){
  const res= await querySQL('select * from USER')
  console.log('res',res)
  return res
}

//删除
export async function deleteById(id:number){
  const res= await drop("USER",{id})
  console.log('res',res)
  return res
}

//更新信息
export async function updateInfo({id,wechat,phone,password,gender,age}:any){
  const res= await update("USER",id,{wechat,phone,password,gender,age})
  console.log('res',res)
  return res
}

//查找用户
export async function getUserByUsername(username:string,field:string){
  const res= await query("USER",{username},field)
  return res
}

// module.exports={
//   getUserList,
//   deleteById,
//   updateInfo,
//   getUserByUsername
// }
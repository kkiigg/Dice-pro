import config from  '../config/index'
const {jsonToStringJoinComma}=require( '@/utils/sqlUtil')

var mysql = require('mysql');

const dbConfig={
  ...config.database,
  database : 'dice'
}
console.log('dbConfig==>',dbConfig)
var pool  = mysql.createPool(dbConfig);

export async function querySQL(sql:string){
  let res=await executeSql(sql)
  return res
}

//1 table 2 参数json 3 筛选字段
export async function query(table:string,paramsJson:Object,field:string){

  let sql=""
  if(field){
    sql=`SELECT ${field} FROM ${table}`
  }else{
    sql=`SELECT * FROM `+table
  }
  if(paramsJson){
    sql+=` WHERE `
    let params=jsonToStringJoinComma(paramsJson)
    sql+=params
  }
  let res=await executeSql(sql)
  return res
}


export async function insert(table:string,paramsJson:any){
    let sql=`INSERT INTO `+table

    let tempK=[],tempV=[]
    for (let k in paramsJson){
      tempK.push(k)
      var val=paramsJson[k]
      if(typeof val=='string'){
        val='"'+val+'"'
      }
      tempV.push(val)
    }
    
    sql+=` (`+tempK.join(',')+`) `+`VALUES (`+tempV.join(',')+`)`
    let res=await  executeSql(sql)
  return res
 
}
export async function update(table:string,id:number,paramsJson:Object){
  let sql=`UPDATE `+table+` SET `

  let params=jsonToStringJoinComma(paramsJson)
    
    
    sql+=params
    sql+=` WHERE ID=`+id
    console.log('sql =>'+sql)
  let res=await  executeSql(sql)
  return res
 
}
export async function drop(table:string,paramsJson:object){
  let sql=`DELETE FROM `+table+` WHERE `

  let params=jsonToStringJoinComma(paramsJson)
  
  sql+=params
  console.log('sql =>'+sql)
  let res=await  executeSql(sql)
  return res
 
}

function executeSql(sql:string){
  return new Promise(function(resolve,reject){
    try{
      pool.query(sql,function (error:any, results:any, fields:any) {
        if (error) throw error;
        console.log('The solution is: ', results);
        // console.log('The solution is: ', results[0].solution);
        resolve(results)
      })
      
    }catch(e){
      console.log('error is =>',e)
      reject(e)
    }
   })
}
// module.exports={
//   querySQL,
//   query,
//   insert,
//   update,
//   drop
// }
//  querySQL=querySQL
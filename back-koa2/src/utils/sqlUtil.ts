export function jsonToStringJoinComma(json:any){
  let res="",firstFlag=true

  for (let k in json){
    let val=json[k]
    if(!val) continue;
    if(!firstFlag){
      res+=','
    }
    firstFlag=false
    if(typeof val=="string"){
      res+=k+'="' + val + '"'
    }else{
      res+=k+'=' + val
    }
  }
  return res  
}
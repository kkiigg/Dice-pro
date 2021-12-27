/*
 * @Author: zw
 * @Date: 2021-10-12 18:44:54
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 19:00:12
 * @Description: 
 */
import { gameMember, room, yatxyGameRecord } from '../../types/game'
import {createRandomId,getDateStr} from './gemeUtil'
import Websocket from '../../plugins/websocket'

export class DiceGame{
    //房间
    rooms: Map<String,room<yatxyGameRecord>> = new Map();


    /**
     * @name: 进入|创建房间
     */
    joinRoom( MemberObj: gameMember,roomId?: string) {
        // rooms.members.push(member)
        
        let rooms=this.rooms
        //查看是否存在房间
        if(!roomId || !rooms[roomId]  ){
          //不存在
          let newId:string=createRandomId()
          let newRoom:room<yatxyGameRecord>={
            id:newId,
            roomname:"testName",
            members:[],
            gameData:[MemberObj],
            createDataTime:getDateStr(),
          }
          rooms.set(newId,newRoom)

          //加入socket wwwwwwwwwwwwwwwwww
        }else{
            //存在
            rooms[roomId].members.push(MemberObj)
            
            //加入socket wwwwwwwwwwwwwwwwww
        }
        
    }
    /**
     * @name: 添加房间成员
     */    
    addMember(){
        
    }

    /**
     * @name: 成员操作发送数据
     */    
    conductCallback(data){
      console.log(data)
    }

    /**
     * @name: 离开游戏
     */    
    leaveGame(roomId:string,userId:string){
      let rooms=this.rooms
      //查看是否存在房间
      if(!roomId || !rooms[roomId] ){
        console.warn('%%找不到房间',roomId)
        return 
      }
      
      let membersArr=rooms[roomId].members
      if(!membersArr.length ){
        console.warn('%%找不到玩家',roomId)
        return
      }
      let leaveFlag=false
      for(let i=0;i<membersArr.length;i++){
        if(membersArr[i].id==userId){
          membersArr.splice(i,1)
          leaveFlag=true
        }
      }
      if(!leaveFlag) console.warn('%%找不到玩家',roomId);
    }

    /**
     * @name:邀请好友 
     */    
    inviteFriend(){

    }

    
}


export function initServer(server:any){
  //server 放入koa
  let diceGame=new DiceGame()
  const websocket=new Websocket()
  websocket.init({
    server,
    // onDisconnect?:any
    onMessage:diceGame.conductCallback,
    onLeave:diceGame.leaveGame,
    onConnection:diceGame.joinRoom
  })
}
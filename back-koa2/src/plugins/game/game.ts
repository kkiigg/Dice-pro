/*
 * @Author: zw
 * @Date: 2021-10-12 18:44:54
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 19:00:12
 * @Description: 
 */
import { gameMember, room, yatxyGameRecord } from '../../type/game'


export default class DiceGame{
    //房间
    rooms: Map<String,room<yatxyGameRecord>> = new Map();


    /**
     * @name: 进入|创建房间
     */
    joinRoom(roomId: string, MemberObj: gameMember) {
        // rooms.members.push(member)
        
        //查看是否存在房间
        for(let rommid in this.rooms){
            //不存在
    
            //存在
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
    conductCallback(){

    }

    /**
     * @name: 离开游戏
     */    
    leaveGame(){

    }

    /**
     * @name:邀请好友 
     */    
    inviteFriend(){

    }

    
}
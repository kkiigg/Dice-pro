/*
 * @Author: zw
 * @Date: 2021-10-12 18:33:02
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 18:57:17
 * @Description: 
 */
//准备状态
export enum member_ready_status{
    waiting,
    ready
}

//房间玩家
export type gameMember={
    id:string
    name:string
    avatar:string
    status:member_ready_status
    rank?:string
}

//房间
export type room<T>={
    id:string
    roomname:string
    members:gameMember[]
    gameData:T[]
    createDataTime:Date
}

//游戏记录
export type yatxyGameRecord={
    
}
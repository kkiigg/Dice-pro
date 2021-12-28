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
    status?:member_ready_status
    rank?:string
}

//房间
export type room<T>={
    id:string
    roomname:string
    members:gameMember[]
    gameData:T[]
    createDataTime:string
}

//游戏记录
export type yatxyGameRecord={
    
}

//骰子分数种类
export enum diceScoreType{
    num_1='num_1',
    num_2='num_2',
    num_3='num_3',
    num_4='num_4',
    num_5='num_5',
    num_6='num_6',
    shunzi_4='shunzi_4',
    shunzi_5='shunzi_5',
    hulu='hulu',
    same_4='same_4',
    same_5='same_5',
    all='all',
}
export enum SoccerTypeEnum {
    all = 1,//所有数字之和
    num = 2, //固定分数
    numPick = 3 //只选择特定数字，如色数为2的总数，4个2就是8
}
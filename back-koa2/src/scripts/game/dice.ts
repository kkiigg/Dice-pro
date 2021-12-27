import {diceScoreType,SoccerTypeEnum} from '../../types/game'

interface TypediceScoreTypeData {
    id: symbol,
    name: string,
    scoreType: number,
    score?: number
}
function DiceResTypeEntity(name: string, scoreType: number, score?: number): TypediceScoreTypeData {
    return {
        id: Symbol(),
        name,
        scoreType,
        score,
    }
}
const diceScoreTypeData = {
    [diceScoreType.num_1]: DiceResTypeEntity("点数一", SoccerTypeEnum.numPick),
    [diceScoreType.num_2]: DiceResTypeEntity("点数二", SoccerTypeEnum.numPick),
    [diceScoreType.num_3]: DiceResTypeEntity("点数三", SoccerTypeEnum.numPick),
    [diceScoreType.num_4]: DiceResTypeEntity("点数四", SoccerTypeEnum.numPick),
    [diceScoreType.num_5]: DiceResTypeEntity("点数五", SoccerTypeEnum.numPick),
    [diceScoreType.num_6]: DiceResTypeEntity("点数六", SoccerTypeEnum.numPick),
    [diceScoreType.shunzi_4]: DiceResTypeEntity("小顺", SoccerTypeEnum.num, 15),
    [diceScoreType.shunzi_5]: DiceResTypeEntity("大顺", SoccerTypeEnum.num, 25),
    [diceScoreType.hulu]: DiceResTypeEntity("葫芦", SoccerTypeEnum.all),
    [diceScoreType.same_4]: DiceResTypeEntity("四色同花", SoccerTypeEnum.all),
    [diceScoreType.same_5]: DiceResTypeEntity("快艇", SoccerTypeEnum.num, 50),
    [diceScoreType.all]: DiceResTypeEntity("全选", SoccerTypeEnum.all),
}
//返回1～6
export function getDiceNum() {

    return parseInt(String(Math.random() * 6)) + 1

}

//摇一次
export function shakeOnce(shakeNum: number) {
    let res = []
    for (let i = 0; i < shakeNum; i++) {
        res.push(getDiceNum())
    }
    return res
}
//排序
export function diceNumOrder(arr: number[]) {
    return arr.sort((x, y) => x - y)
}
//传入从小到大的数组 返回各个分数总类的集合
//5骰子玩法(TODO: 写的有点垮 之后优化下)
function typeCheck(sortedArr: number[]) {
    // let res = {
    //     [diceScoreTypeData.num_one.id]: 0,
    //     [diceScoreTypeData.num_two.id]: 0,
    //     [diceScoreTypeData.num_three.id]: 0,
    //     [diceScoreTypeData.num_four.id]: 0,
    //     [diceScoreTypeData.num_five.id]: 0,
    //     [diceScoreTypeData.num_six.id]: 0,
    //     [diceScoreTypeData.shunzi_4.id]: 0,
    //     [diceScoreTypeData.shunzi_5.id]: 0,
    //     [diceScoreTypeData.hulu.id]: 0,
    //     [diceScoreTypeData.same_4.id]: 0,
    //     [diceScoreTypeData.same_5.id]: 0,
    // }
    let res={}
    //初始化数据 （ 0 ）
    for (let k in diceScoreTypeData) {
        res[diceScoreTypeData[k]['id']] = 0
    }

    //点数
    for(let item of sortedArr){
        //点数判断
        res[diceScoreTypeData['num_'+item]['id']]+=item
    }

    let arrSet=new Set(sortedArr)
    if(arrSet.size==2 ){
        let filtedArr=sortedArr.filter(item=>item==sortedArr[0])
        //葫芦
        if(filtedArr.length==2 || filtedArr.length==3){
            let oData=diceScoreTypeData[diceScoreType.hulu]
            res[oData.id]=oData.score
        }
        //四色
        if(filtedArr.length==1 || filtedArr.length==4){
            let oData=diceScoreTypeData[diceScoreType.same_4]
            res[oData.id]=oData.score
        }
    }   
    //快艇
    if(arrSet.size==1){
        let oData=diceScoreTypeData[diceScoreType.same_5]
        res[oData.id]=oData.score
    }

    let strArr=sortedArr.join('')
    //大顺
    if(strArr=='12345' ){
        let shunzi_5Data=diceScoreTypeData[diceScoreType.shunzi_5]
        res[shunzi_5Data.id]=shunzi_5Data.score
    }
    //小顺
    if(strArr=='1234'|| strArr=='2345'){
        let shunzi_4Data=diceScoreTypeData[diceScoreType.shunzi_4]
        res[shunzi_4Data.id]=shunzi_4Data.score
    }

    return res
}
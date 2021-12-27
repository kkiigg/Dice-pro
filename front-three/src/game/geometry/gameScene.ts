/*
        sec1  ############
        sec2  #          #  sec3 
        sec4  ############
              ############
              ############
              ############
*/
// import * as THREE from 'three';
import { BoxBufferGeometry, Group, MeshLambertMaterial, MeshNormalMaterial,Mesh ,PlaneGeometry,MeshStandardMaterial} from "three";
import diceConfig from "../../config/diceConfig";
import stageConfig from "../../config/stageConfig";
const DICE_SIZE = diceConfig.size;
const DICE_NUMBER = diceConfig.diceNum;

const windowW = window.innerWidth;
/****
 *舞台*
 ****/
const STAGE_PAD=50
let stageGroup = new Group();
let stageWidth=windowW-STAGE_PAD*2; //舞台宽度
if (windowW < 324) {
  stageWidth = 300;
} else if (windowW > 1000) {
  stageWidth = 800;
}
const stageHeight = stageConfig.stageHeight; //舞台长度
//底层
//舞台厚度 涉及到一些凹槽
const stageTopDepth = 10;
const stageBotDepth = 40;
// const stageMaterial = new MeshLambertMaterial({ color: 0xd88c00 });
let stageMaterial = new MeshNormalMaterial();

let stageBot = new BoxBufferGeometry(stageWidth, stageHeight, stageBotDepth/2);
let stageBotMesh = new Mesh(stageBot, stageMaterial);
stageBotMesh.position.set(0, 0, 0);
stageGroup.add(stageBotMesh);

const stagePadTop = 40;
let stageTopSec1 = new BoxBufferGeometry(
  stageWidth,
  stagePadTop,
  stageTopDepth
);

const boxPad = 20;
//舞台宽度减去n个骰子的宽度 再减去骰子的间隙
const leftBorderSize =
  stageWidth - DICE_SIZE * DICE_NUMBER - boxPad * (DICE_NUMBER + 1);
console.log('leftBorderSize',leftBorderSize)
let stageTopSec2 = new BoxBufferGeometry(
  leftBorderSize,
  DICE_SIZE + boxPad * 2,
  stageTopDepth
);

let stageTopSec3 = stageTopSec2.clone()

let stageTopSec4 = new BoxBufferGeometry(
  stageWidth,
  stageHeight - DICE_SIZE + boxPad * 2 - stagePadTop,
  stageTopDepth
);

let stageTopMesh1 = new Mesh(stageTopSec1, stageMaterial);
let stageTopMesh2 = new Mesh(stageTopSec2, stageMaterial);
let stageTopMesh3 = new Mesh(stageTopSec3, stageMaterial);
let stageTopMesh4 = new Mesh(stageTopSec4, stageMaterial);
stageTopMesh1.receiveShadow = true;
stageTopMesh2.receiveShadow = true;
stageTopMesh3.receiveShadow = true;
stageTopMesh4.receiveShadow = true;
//todo 未完成
stageTopMesh1.position.set(0,-1*stageHeight,stageBotDepth/2)
stageTopMesh2.position.set(-200,stagePadTop,stageBotDepth/2)
stageTopMesh3.position.set(-400,stagePadTop,stageBotDepth/2)
stageTopMesh4.position.set(600,0,stageBotDepth/2)

stageGroup.add(stageTopMesh1)


// stageGroup.add(stageTopMesh2)
// stageGroup.add(stageTopMesh3)
// stageGroup.add(stageTopMesh4)




//  export default stageTopMesh1
 export default stageGroup
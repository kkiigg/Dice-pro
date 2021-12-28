import {
  BoxBufferGeometry,
  MeshLambertMaterial,
  Mesh,
  Group,
  KeyframeTrack,
  AnimationClip,
  AnimationMixer
} from "three";

import scene from "../scene/index";
// 创建门
const door = new BoxBufferGeometry(10, 20, 0.5);
const doorMaterial = new MeshLambertMaterial({ color: 0xd88c00 });
const doorMesh = new Mesh(door, doorMaterial);
// 实现门围绕特定轴旋转
const group = new Group(); // 外层对象
group.position.set(5, 10, 0); // 设置外层对象的中心为原本想要旋转的位置
group.add(doorMesh); // 把'门'添加进外层对象中
doorMesh.position.set(-5, 0, 0); // 调整门在外层对象中的相对位置
group.name = "door"; // 外层网格模型命名为door

const times = [0, 3]; // 关键帧时间数组，单位'秒'
const rotationValues = [0, -Math.PI / 2]; // 需要转动的角度
// 创建关键帧轨道
const rotationTrack = new KeyframeTrack(
  "door.rotation[y]", // 指定对象中的变形目标为Y轴旋转属性
  times, // 关键帧的时间数组
  rotationValues // 与时间数组中的时间点相关的值组成的数组
);

const duration = 3; // 持续时间，单位'秒'
// 动画剪辑
const clip = new AnimationClip(
  "open", // 此剪辑的名称
  duration, // 如果传入负数，持续时间将会从传入的数组中计算得到
  [rotationTrack] // 一个由关键帧轨道（KeyframeTracks）组成的数组。
);

const mixer = new AnimationMixer(group); // 动画混合器
const AnimationAction = mixer.clipAction(clip); // 返回所传入的剪辑参数的AnimationAction
AnimationAction.timeScale = 1; // 可以调节播放速度，默认是1。为0时动画暂停。值为负数时动画会反向执行。
AnimationAction.play(); // 开始播放

scene.add(group);

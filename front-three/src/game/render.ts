import * as THREE from "three";
import {
  Mesh,
  BoxGeometry,
  MeshNormalMaterial,
  MeshBasicMaterial,
  WebGLRenderer,
  
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import '../utils/gui'


import "./light/index";

import scene from "./scene/index";

import camera from "./camera/index";

let renderer: any;

import {getTestModelOIbj,getTestTexture,getTestNesh,getTestSprite2} from '../test/testCode'
import '../test/multipleQube'

export function init() {
  
  //test code 
  // getTestTexture(scene)
  // getTestNesh(scene)
  // getTestSprite2(scene)
  // getTestModelOIbj(scene)

  renderer = new WebGLRenderer({ antialias: true });
  var controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
  controls.addEventListener("change", render); //监听鼠标、键盘事件
  render();

  // renderer.setAnimationLoop(render); //动画·
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio)
  // renderer.setClearColor(0xffffff, 1);
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = PCFSoftShadowMap
  document.body.appendChild(renderer.domElement);

  render();
}

function render() {
  // function render(time: number) {
  // mesh.rotation.x = time / 2000;
  // mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}

window.onresize=function(){
  camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix ();

  renderer.setSize(window.innerWidth, window.innerHeight);
}



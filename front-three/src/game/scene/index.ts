// import * as THREE from 'three';
import {AxesHelper,DirectionalLightHelper,Scene} from 'three'
import gameScene from '../geometry/gameScene'
import ground from '../geometry/ground'

const scene = new Scene();
// scene.add(gameScene)
// scene.add(ground)

//dev
scene.add(new AxesHelper(1000))


export default scene
import {AmbientLight,DirectionalLight,DirectionalLightHelper} from 'three';

import scene from '../scene/index'
let  ambient = new AmbientLight(0x444444);
scene.add(ambient);//环境光对象添加到scene场景中

// export default {}

var directionalLight = new DirectionalLight(0xffffff, 1);
// var directionalLight = new DirectionalLight(0x0079cd, 1);
// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
directionalLight.position.set(600, 600, 600);
// 方向光指向对象网格模型mesh2，可以不设置，默认的位置是0,0,0
// directionalLight.target = mesh2;
directionalLight.castShadow = true;
// 设置计算阴影的区域，最好刚好紧密包围在对象周围
// 计算阴影的区域过大：模糊  过小：看不到或显示不完整
// directionalLight.shadow.camera.near = 0.1;
// directionalLight.shadow.camera.far = 1000;
// directionalLight.shadow.camera.left = 100;
// directionalLight.shadow.camera.right = 100;
// directionalLight.shadow.camera.top = 100;
// directionalLight.shadow.camera.bottom = 100;

scene.add(directionalLight);

scene.add(new DirectionalLightHelper(directionalLight,1000))


// SpotLightHelper
// PointLightHelper
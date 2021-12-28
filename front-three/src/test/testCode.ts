import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import {
    Mesh,
    BoxGeometry,
    MeshNormalMaterial,
    Sprite,
    TextureLoader,
    MeshLambertMaterial,
    SpriteMaterial,
    
  } from "three";
export function getTestTexture(scene:any){
    //只能加载public下的吗？
    new TextureLoader().load('./texture.png',texture=>{
      let material=new MeshLambertMaterial({
        map:texture
      })
      let testGeometry=new BoxGeometry(500, 500, 500);
      let mesh=new Mesh(testGeometry,material)
      scene.add(mesh);
    })
  }
  
  export function getTestNesh(scene:any){
    let geometry = new BoxGeometry(500, 500, 500);
    let material = new MeshNormalMaterial();
    // let material = new MeshBasicMaterial({
    //   color:0x0079cd
    // });
    let mesh
    mesh = new Mesh(geometry, material);
    mesh.position.x = 600;
    mesh.castShadow = true;
    
    scene.add(mesh);
  }

  export function getTestSprite2(scene:any){
    // 加载树纹理贴图
    new TextureLoader().load("./tree.png",textureTree=>{
      // 批量创建表示一个树的精灵模型
      for (let i = 0; i < 100; i++) {
        var spriteMaterial = new SpriteMaterial({
          map:textureTree,//设置精灵纹理贴图
        });
        // 创建精灵模型对象
        var sprite = new Sprite(spriteMaterial);
        scene.add(sprite);
        // 控制精灵大小,
        sprite.scale.set(100, 100, 1); //// 只需要设置x、y两个分量就可以
        var k1 = Math.random() - 0.5;
        var k2 = Math.random() - 0.5;
        // 设置精灵模型位置，在xoz平面上随机分布
        sprite.position.set(1000 * k1, 50, 1000 * k2)
      }
    });
    
  }
  
  export function getTestModelOIbj(scene:any){
    var loader = new OBJLoader();
    // 没有材质文件，系统自动设置Phong网格材质
    loader.load('./Weapon_1.obj',(obj) =>{
        // 控制台查看返回结构：包含一个网格模型Mesh的组Group
        console.log('obj is',obj);
        obj.children[0].scale.set(200,200,50);
    //   obj.children[0].material.map=material
        // 查看加载器生成的材质对象：MeshPhongMaterial
        // console.log(obj.children[0].material);
        scene.add(obj);
    })
  }

  
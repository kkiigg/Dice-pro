import { Object3D, MeshPhongMaterial, Mesh, SphereGeometry,BoxGeometry} from "three";
import scene from "../game/scene";

let object = new Object3D();
const geometry = new SphereGeometry(1, 1, 1);
const geometry2 = new BoxGeometry(1, 4, 4);

for (let i = 0; i < 500; i++) {
  const material = new MeshPhongMaterial({
    color: 0x888888 + Math.random() * 0x888888,
    flatShading: true,
  });

//   let geo=Math.random()>0.5?geometry:geometry2

  const mesh = new Mesh(geometry, material);

  //-0.5很秀
  mesh.position
    .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
    .normalize();
  mesh.position.multiplyScalar(Math.random() * 400);
  //为啥*2
  mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
  mesh.scale.x = mesh.scale.y = mesh.scale.z = 10 + Math.random() * 40;
  object.add(mesh);
}

scene.add(object);

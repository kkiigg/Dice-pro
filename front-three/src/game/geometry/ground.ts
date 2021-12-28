/****
 *地面*
 ****/
 import { Mesh ,PlaneGeometry,MeshStandardMaterial} from "three";

 const planeGeometry = new PlaneGeometry( 1000,1000,1000,1000 );
 const planeMaterial = new MeshStandardMaterial( { color: 0x00ff00 } )
//  const planeMaterial = new MeshStandardMaterial( { color: 0xffffff } )
 const plane = new Mesh( planeGeometry, planeMaterial );
 plane.receiveShadow = true;

        

//  export default stageTopMesh1
 export default plane
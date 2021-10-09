import * as THREE from 'three';

import scene from './scene/index'
// import light from 'light/index'
import camera from './camera/index'

let mesh:any,renderer:any;

export function init() {
  let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  let material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
	document.body.appendChild( renderer.domElement );
}

  function animation( time:number ) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
  
    renderer.render( scene, camera );
  
  }
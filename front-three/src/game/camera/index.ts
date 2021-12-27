import * as THREE from 'three';
let camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 2000 );
	// camera.position.x = 1000;
	camera.position.y = 1000;
	camera.position.z = 1000;
	camera.lookAt(0,0,0)
export default camera




//
// camera.lookAt( 0, 0, 0 );
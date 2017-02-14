var THREE;
var scene=new THREE.Scene();

var width=600;
var height=400;
var fov=60;
var aspect=width / height;
var near=1;
var far=1000;
var camera=new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.set(0,0,50);

var renderer=new THREE.WebGLRenderer();
renderer.setSize(width,height);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

var directionalLight=new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0,0.7,0.7);
scene.add(directionalLight);

var geometry=new THREE.CubeGeometry(20,5,30);
geometry.vertices[0].x *= 0.8;
geometry.vertices[0].z *= 0.8;
geometry.vertices[1].x *= 0.8;
geometry.vertices[1].z *= 0.8;
geometry.vertices[4].x *= 0.8;
geometry.vertices[4].z *= 0.8;
geometry.vertices[5].x *= 0.8;
geometry.vertices[5].z *= 0.8;
var material=new THREE.MeshStandardMaterial({color:0x4E2E28});
var mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);

renderer.render(scene,camera);

(
	function renderLoop(){
		requestAnimationFrame(renderLoop);
		mesh.rotation.set(0,mesh.rotation.y + 0.01,mesh.rotation.z + 0.01);
		renderer.render( scene, camera );
	}
)();
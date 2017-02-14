var scene=new THREE.Scene();

var width=600;
var height=400;
var fov=60;
var aspect=width/height;
var near=1;
var far=1000;
var cameraA=new THREE.PerspectiveCamera(fov,aspect,near,far);
cameraA.position.set(0,0,40);
cameraA.rotation.order='XYZ';
cameraA.rotation.y=0.2;
var cameraB=new THREE.PerspectiveCamera(fov,aspect,near,far);
cameraB.position.set(0,0,40);
cameraB.rotation.order='XYZ';
cameraB.rotation.y=0.1;

var rendererA=new THREE.WebGLRenderer();
rendererA.setSize(width,height);
rendererA.setClearColor(0xffffff);
document.body.appendChild(rendererA.domElement);

var rendererB=new THREE.WebGLRenderer();
rendererB.setSize(width,height);
rendererB.setClearColor(0xffffff);
document.body.appendChild(rendererB.domElement);

var directionalLight=new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(0,0.7,0.7);
scene.add(directionalLight);

var geometry=new THREE.CubeGeometry(20,5,30);
geometry.vertices[0].x*=0.8;
geometry.vertices[0].z*=0.8;
geometry.vertices[1].x*=0.8;
geometry.vertices[1].z*=0.8;
geometry.vertices[4].x*=0.8;
geometry.vertices[4].z*=0.8;
geometry.vertices[5].x*=0.8;
geometry.vertices[5].z*=0.8;
var material=new THREE.MeshStandardMaterial({color:0xD2691E});
var mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);

rendererA.render(scene,cameraA);
rendererB.render(scene,cameraB);

(
	function renderLoop(){
		requestAnimationFrame(renderLoop);
		mesh.rotation.set(0,mesh.rotation.y+0.01,mesh.rotation.z+0.01);
		rendererA.render(scene,cameraA);
		rendererB.render(scene,cameraB);
	}
)();
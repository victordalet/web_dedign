let scene , camera , renderer ;
const position = [
  [
    [-15,-15],[15,-15]
  ],
  [
    [-15,-15],[0,10]
  ],
  [
    [15,-15],[0,10]
  ],
  [
    [-190,-150],[-15,-15]
  ],
  [
    [190,-150],[15,-15]
  ],
  [
    [0,150],[0,10]
  ]
]


function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
  camera.position.z = 1050;
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  for (let nb_depth = 0 ; nb_depth < 10 ; nb_depth++) {
    for (let nb_line = 0 ; nb_line < 6 ; nb_line++) {
      for (let nb_width = 0 ; nb_width < 4 ; nb_width++ ) {
            var geometry = new THREE.Geometry();
            if (nb_line == 0) {
              geometry.vertices.push(
            new THREE.Vector3(position[nb_line][0][0], position[nb_line][0][1]-nb_width/20, 0 + (100*nb_depth)),
            new THREE.Vector3(position[nb_line][1][0], position[nb_line][1][1]-nb_width/20, 0 + (100*nb_depth)));
            }
            else {
              geometry.vertices.push(
              new THREE.Vector3(position[nb_line][0][0]-nb_width/10, position[nb_line][0][1], 0 + (100*nb_depth)),
              new THREE.Vector3(position[nb_line][1][0]-nb_width/10, position[nb_line][1][1], 0 + (100*nb_depth)));
            }
            scene.add(new THREE.Line(geometry, new THREE.LineBasicMaterial({
                color: 0x03185A,
            })));
      }

    }
  }

}

function animate() {
  requestAnimationFrame(animate);
  window.addEventListener('wheel',animation);
  renderer.render( scene, camera );
}

function animation() {
  camera.position.z -= 1;
}

init();
animate();
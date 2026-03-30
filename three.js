import * as THREE from "https://unpkg.com/three@0.128.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.128.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.128.0/examples/jsm/loaders/GLTFLoader.js";
import { EXRLoader } from "https://unpkg.com/three@0.128.0/examples/jsm/loaders/EXRLoader.js";

const scene = new THREE.Scene();
const loaderEnvironment = new EXRLoader();
loaderEnvironment.load("studio_kominka_04_4k.exr", function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
});

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 3, 8);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.setClearColor(0x000000, 0);

const canvas = renderer.domElement;

const container = document.querySelector(".coffeeMachine");

if (container) {
  container.style.position = "relative";
  container.style.width = "50vw";
  container.style.height = "50vw";
  container.style.overflow = "hidden";
  container.style.margin = "0";
  container.style.padding = "0";

  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";

  container.innerHTML = "";
  container.appendChild(canvas);

  const updateSize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  updateSize();
  window.addEventListener("resize", updateSize);
} else {
  console.warn("Контейнер .coffeeMachine не найден, добавляем в body");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "1000";
  document.body.appendChild(canvas);

  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.maxDistance = 100;
controls.maxPolarAngle = Math.PI / 2;
controls.minAzimuthAngle = -0.1;
controls.maxAzimuthAngle = Math.PI / 2;

const loader = new GLTFLoader();
const modelPath = "./coffeeMachine.glb";

loader.load(modelPath, function (gltf) {
  const model = gltf.scene;
  model.rotation.y = Math.PI * 1.4;
  model.position.set(0, -2.5, 0);
  model.scale.set(0.65, 0.65, 0.65);

  model.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  scene.add(model);

  model.traverse(function (node) {
    if (node.isMesh && node.material) {
      const matName = node.material.name.toLowerCase();

      if (matName.includes("glass") || matName.includes("стекло")) {
        node.material.transparent = true;
        node.material.opacity = 0.3;
        node.material.roughness = 0.1;
        node.material.metalness = 0.0;
        node.material.ior = 1.5;
        node.material.transmission = 0.95;
        node.material.thickness = 0.5;
        node.material.envMapIntensity = 1.5;
      }
    }
  });
  console.log("Модель загружена и добавлена в сцену!", model);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

<template>
  <div>
    <div id="container" ref="container"></div>
        <div id="frame" hidden></div>
  </div>
</template>

<script>
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

  export default {
    mounted() {
      this.init();
    },
    methods: {
      async loadAvatar(url) {
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync(url);

        const model = gltf.scene;

        this.scene.add(model);

        model.traverse(function (object) {
          if (object.isMesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 0.3;
          }
        });

        this.animationGroup.add(model);

        return model;
      },
      filterAnimation(animation) {
        animation.tracks = animation.tracks.filter((track) => {
          const name = track.name;
          return name.endsWith("Hips.position") || name.endsWith(".quaternion");
        });
        return animation;
      },
      async init() {
        const container = this.$refs.container;

        this.camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          1000
        );
        this.camera.position.set(-2, 1, 3);
        this.camera.lookAt(0, 1, 0);

        this.clock = new THREE.Clock();
        this.animationGroup = new THREE.AnimationObjectGroup();
        this.mixer = new THREE.AnimationMixer(this.animationGroup);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xa0a0a0);
        this.scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 20, 0);
        this.scene.add(hemiLight);

        const dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(-3, 10, -10);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = -2;
        dirLight.shadow.camera.left = -2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 40;
        this.scene.add(dirLight);

        new RGBELoader().load("/brown_photostudio_01.hdr", (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          this.scene.environment = texture;
        });

        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(100, 100),
          new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
        );
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        this.scene.add(mesh);

        await this.loadAvatar("/model.glb");

        const loader = new GLTFLoader();
        loader.load("/animation.glb", (gltf) => {
          const clip = this.filterAnimation(gltf.animations[0]);
          const action = this.mixer.clipAction(clip);
          this.walkAction = action;
          this.walkAction.play();
        });

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        container.appendChild(this.renderer.domElement);

        window.addEventListener("resize", this.onWindowResize);

        const frame = document.getElementById("frame");
        frame.hidden = true;

        this.animate();
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      animate() {
        requestAnimationFrame(this.animate);

        let mixerUpdateDelta = this.clock.getDelta();

        if (this.singleStepMode) {
          mixerUpdateDelta = this.sizeOfNextStep;
          this.sizeOfNextStep = 0;
        }

        this.mixer.update(mixerUpdateDelta);

        this.renderer.render(this.scene, this.camera);
      },
      openIframe() {
        // Logique pour ouvrir l'iframe
      },
      closeIframe() {
        // Logique pour fermer l'iframe
      },
      subscribe() {
        // Logique pour abonner à l'événement
      },
    },
  };
</script>

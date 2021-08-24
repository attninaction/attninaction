exports.id = 676;
exports.ids = [676];
exports.modules = {

/***/ 887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(409);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(293);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(217);








class ThreeScene extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    var mouse = new three__WEBPACK_IMPORTED_MODULE_4__.Vector2(0, 0);
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const colors = [0x181c4d, 0x122620, 0x140f0d];
    const chosen = colors[Math.floor(Math.random() * colors.length)];
    const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();
    scene.background = new three__WEBPACK_IMPORTED_MODULE_4__.Color(chosen); //indigo 0x181c4d
    //green 0x122620
    // dark blue 0x0f0a2e
    //red 0x57000c

    const camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(50, width / height, 1, 100);
    scene.fog = new three__WEBPACK_IMPORTED_MODULE_4__.FogExp2(0x23264a, 0.2);
    const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({
      antialias: true
    });
    const light = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0x5161f0, 600, 0.8);
    light.position.set(4, 4, 8);
    scene.add(light);
    renderer.setSize(width, height);
    camera.position.set(5, -1, 9);
    var wallMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.MeshStandardMaterial({
      //material to for disco ball
      metalness: 1,
      roughness: 0.1,
      color: 0x111111
    });
    wallMaterial.side = three__WEBPACK_IMPORTED_MODULE_4__.DoubleSide;
    const gltfloader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__/* .GLTFLoader */ .E(); // Load a glTF resource

    gltfloader.load( // resource URL
    '/assets/forestlarger.gltf', // called when the resource is loaded
    function (gltf) {
      gltf.scene.position.set(5.5, -2, 4);
      scene.add(gltf.scene);
      gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          child.material = wallMaterial;
        }
      });
    }, // called while loading is progressing
    function (xhr) {
      console.log(xhr.loaded / xhr.total * 100 + '% loaded');
    }, // called when loading has errors
    function (error) {
      console.log('An error happened');
    });
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.mount.appendChild(this.renderer.domElement);
    this.start();
    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('mousemove', onMouseMove, false);

    function onMouseMove(e) {
      e.preventDefault();
      mouse.x = e.clientX / window.innerWidth * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1; // Make the sphere follow the mouse

      var vector = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(mouse.x, mouse.y, 0);
      vector.unproject(camera);
      light.position.x = vector.x;
      light.position.y = vector.y;
    }

    var red = false;
    window.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        if (!red) {
          light.color.set(0x57000c);
          red = true;
        } else {
          light.color.set(0x5161f0);
          red = false;
        }
      }
    });
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().fullscreen),
      ref: mount => {
        this.mount = mount;
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeScene);

/***/ }),

/***/ 409:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"fullscreen": "Home_fullscreen__S5ixo",
	"floatcontainer": "Home_floatcontainer__1vbnJ",
	"sideBar": "Home_sideBar__2H4al",
	"sideContent": "Home_sideContent__24szm",
	"credits": "Home_credits__1uof9"
};


/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;
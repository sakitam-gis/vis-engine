## [1.0.1](https://github.com/sakitam-gis/vis-engine/compare/v1.0.0...v1.0.1) (2023-01-28)

# 1.0.0 (2023-01-28)


### Features

* **animation:** clock impl ([edef1cd](https://github.com/sakitam-gis/vis-engine/commit/edef1cdda437fa32dc1aed508aef0adadb63f827))
* **animation:** raf impl ([79ab5c2](https://github.com/sakitam-gis/vis-engine/commit/79ab5c244783cb76f100f1f3f3a382b09c5a1ed1))
* **cameras:** base camera ([649b8ec](https://github.com/sakitam-gis/vis-engine/commit/649b8ec031f685f857189c4c2fbb05651ee0d042))
* **cameras:** OrthographicCamera ([22a7771](https://github.com/sakitam-gis/vis-engine/commit/22a7771a7023cbfe125bf219129d0b3c3d93b6c4))
* **cameras:** PerspectiveCamera ([0445307](https://github.com/sakitam-gis/vis-engine/commit/04453076c6819603d9fd93c7a55c68bd980fc3a1))
* **core:** add Program renderState options ([b0fa078](https://github.com/sakitam-gis/vis-engine/commit/b0fa078eb7355972ef4c2c023e1d149e5d09b07f))
* **core:** BufferAttribute ([35b7339](https://github.com/sakitam-gis/vis-engine/commit/35b7339466920428a08d155b211fe99b65c2efa7))
* **core:** Context and Resource and Texture ([ced2dc8](https://github.com/sakitam-gis/vis-engine/commit/ced2dc88946d10d1bbd96c34a57e10c51c0e8d6b))
* **core:** core base ([ec5b2c4](https://github.com/sakitam-gis/vis-engine/commit/ec5b2c479ee5c65e4a4538619b76a824ca0cd042))
* **core:** EventEmitter ([96338c8](https://github.com/sakitam-gis/vis-engine/commit/96338c89c16691e90cff78a3974cd7d7b6f6fa4c))
* **core:** Geometry ([ec0de76](https://github.com/sakitam-gis/vis-engine/commit/ec0de7641e5c6a025714df83171e1d81de4ca1d8))
* **core:** Program ([e19164e](https://github.com/sakitam-gis/vis-engine/commit/e19164e11134b4cb087acea06b91dd51abd9f2d9))
* **core:** Program ([b4554c8](https://github.com/sakitam-gis/vis-engine/commit/b4554c80720dbbd2003a13a1322a0fbff513b724))
* **core:** RenderBuffer ([0ed53eb](https://github.com/sakitam-gis/vis-engine/commit/0ed53eb50107395f795e91206fe75de54ca5925f))
* **core:** Renderer ([cef381f](https://github.com/sakitam-gis/vis-engine/commit/cef381fb3f7802708f696e93cc86e9fcb4963844))
* **core:** RenderTarget ([eb073d1](https://github.com/sakitam-gis/vis-engine/commit/eb073d19b3445bec9d748292bee068185528a73f))
* **core:** Shader class ([8e6da19](https://github.com/sakitam-gis/vis-engine/commit/8e6da19b231ea644de51489c93264232d0fc11ad))
* **core:** support mesh wireframe render and update docs, add Box geometry ([1b3252b](https://github.com/sakitam-gis/vis-engine/commit/1b3252be396e82d5754bee68e974a36dd4eb18bd))
* **core:** Texture3D support ([acb3b6d](https://github.com/sakitam-gis/vis-engine/commit/acb3b6da380d609c9f6844d809ec8d299855d08b))
* **core:** update Context ([d08ccb9](https://github.com/sakitam-gis/vis-engine/commit/d08ccb958652e97ff2e624108a4ddc36244ea3b9))
* **core:** update Context to Renderer, update Resource and Texture ([658979b](https://github.com/sakitam-gis/vis-engine/commit/658979b2b6b53542d7a0b2e5d7a55786fd940f0b))
* **core:** webgl renderer state ([2ae446d](https://github.com/sakitam-gis/vis-engine/commit/2ae446d46474e015eca6be4156b92a8088325d1a))
* **math:** Color implementation ([458af7c](https://github.com/sakitam-gis/vis-engine/commit/458af7c8668215a4db1648c0433b0a79efb5c71c))
* **math:** Eular and Quaternion and Matrix4 Class ([73c3dda](https://github.com/sakitam-gis/vis-engine/commit/73c3dda4dfb6b22596a76000e9c1d27a532c418e))
* **math:** Matrix Base and Vector Base Class ([a6f7e68](https://github.com/sakitam-gis/vis-engine/commit/a6f7e685e349874367a87dddedf1f61962e48d45))
* **math:** Matrix3 and Vector2 Class ([ac4c120](https://github.com/sakitam-gis/vis-engine/commit/ac4c1203d8014022490ca479881de4676c8b2cc7))
* **math:** Vector3 and Vector4 Class ([50a19e2](https://github.com/sakitam-gis/vis-engine/commit/50a19e24629fbd3922b8607fce792299ac75dd9f))
* **object:** Mesh implementation ([1370e7a](https://github.com/sakitam-gis/vis-engine/commit/1370e7a43dfa86f9f1face33152adaf37df81fa7))
* **object:** Object3D and Scene ([7c64e63](https://github.com/sakitam-gis/vis-engine/commit/7c64e6347b5c8414e742c52e5596573b41d3d40a))
* **object:** Object3D and Scene ([188cf9e](https://github.com/sakitam-gis/vis-engine/commit/188cf9e80e9a6ffa7dd6bf3fe54c4127ddd5516e))
* **playground:** add demo and fixed docs ([566f929](https://github.com/sakitam-gis/vis-engine/commit/566f9296c1d308a6bad7ded8f7cd0e0d134eced0))


### Performance Improvements

* **core:** program render state update move to state ([6827107](https://github.com/sakitam-gis/vis-engine/commit/682710727e4738d65d4713335245f39bc8897732))
* **core:** Renderer request gl context, fixed default option ([7033101](https://github.com/sakitam-gis/vis-engine/commit/70331015e0870f8dc0dc4eff37ea1c04ad6faa1f))

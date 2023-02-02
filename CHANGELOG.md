# [1.2.0](https://github.com/sakitam-gis/vis-engine/compare/v1.1.1...v1.2.0) (2023-02-01)


### Features

* **math:** Add `highPrecision` method to solve the problem of floating point calculation_ ([48bd74f](https://github.com/sakitam-gis/vis-engine/commit/48bd74f2856c14e113a353d396edabacfc93b36c))

## [1.1.1](https://github.com/sakitam-gis/vis-engine/compare/v1.1.0...v1.1.1) (2023-02-01)


### Bug Fixes

* **pitch:** Matrix identity and update docs ([382abfd](https://github.com/sakitam-gis/vis-engine/commit/382abfdc74270ebcb7cccd601f6712a0fc82c73e))

# [1.1.0](https://github.com/sakitam-gis/vis-engine/compare/v1.0.4...v1.1.0) (2023-01-30)


### Bug Fixes

* **math:** Matrix3 subtract method and Matrix4 add/sub/multiply methods ([1f0fb3d](https://github.com/sakitam-gis/vis-engine/commit/1f0fb3d6065722a898ce3927626cffb3266d45dc))
* **math:** Matrix4 fromScale method ([0b6e49c](https://github.com/sakitam-gis/vis-engine/commit/0b6e49c32f3e085058c23a091aabdaa6b6b76de4))
* **no-release:** fix build docs script ([a04dd66](https://github.com/sakitam-gis/vis-engine/commit/a04dd66ce5270dce3e4eda5e4b14898da7a0cebd))
* **no-release:** plugin docusaurus webpack config to fix js resolve [webpack issues](https://github.com/webpack/webpack/issues/11467) ([ad9dd6a](https://github.com/sakitam-gis/vis-engine/commit/ad9dd6aef5c7d721fedae83dc7ce7ca6ad1f247d))
* **Renderer:** add initialize default width/height ([629c8a8](https://github.com/sakitam-gis/vis-engine/commit/629c8a80196b1701ae591d73c601272e87946259))


### Features

* **core:** add renderer resetState method ([4478e7f](https://github.com/sakitam-gis/vis-engine/commit/4478e7f98d8fb25d9bec41fc609e59f06ce00387))


### Performance Improvements

* **core:** initialize gl parameter with auto ([3d00ffd](https://github.com/sakitam-gis/vis-engine/commit/3d00ffd7b5b73ece2b7a2fc8e74dbdb48bf46318))

## [1.0.4](https://github.com/sakitam-gis/vis-engine/compare/v1.0.3...v1.0.4) (2023-01-28)


### Bug Fixes

* fix actions ci build docs dep ([0a428ef](https://github.com/sakitam-gis/vis-engine/commit/0a428ef362883d05772843973baa1d1f480e5dd6))

## [1.0.3](https://github.com/sakitam-gis/vis-engine/compare/v1.0.2...v1.0.3) (2023-01-28)


### Bug Fixes

* **patch:** fix actions ci build docs and refix external gl-matrix ([5ca130c](https://github.com/sakitam-gis/vis-engine/commit/5ca130cfcceb3bc6c0c857921b7d906991c6fd21))

## [1.0.2](https://github.com/sakitam-gis/vis-engine/compare/v1.0.1...v1.0.2) (2023-01-28)


### Bug Fixes

* **patch:** external gl-matrix and fixed docs build ([ce046f3](https://github.com/sakitam-gis/vis-engine/commit/ce046f364348dbfc78a8fe1f16d3f0cbf1cc6355))

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
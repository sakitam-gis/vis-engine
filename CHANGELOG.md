## [1.5.3](https://github.com/sakitam-gis/vis-engine/compare/v1.5.2...v1.5.3) (2024-03-23)


### Bug Fixes

* **patch:** fix semantic-release ([56c6063](https://github.com/sakitam-gis/vis-engine/commit/56c6063445eac7d3e5bcb38e526da8a136e2c9d7))
* **patch:** fix vitepress build error ([9cd8b81](https://github.com/sakitam-gis/vis-engine/commit/9cd8b81f49f15a205fc4c03745e96ec213fdccb0))
* **patch:** fix vitepress build error ([bc8c3ee](https://github.com/sakitam-gis/vis-engine/commit/bc8c3ee52bd9b61bebee3e272bd0d7d2ff08b854))
* **release-adapters:** fix getShaderName regex ([5f06306](https://github.com/sakitam-gis/vis-engine/commit/5f06306ff652bc231ea5c8ede9fbc9cb2c96b451))
* **skip-release:** bump ci node version ([3dace37](https://github.com/sakitam-gis/vis-engine/commit/3dace37e3bbd26baf029a2a48165c31f8d28bb2f))
* **skip-release:** dep ([77a44ea](https://github.com/sakitam-gis/vis-engine/commit/77a44ea82ece37fcb705136b0c39f86b02feecec))
* **skip-release:** fix ci ([4e982bd](https://github.com/sakitam-gis/vis-engine/commit/4e982bd17287eef0dbe4f20ea21cb828c790245e))

## [1.5.2](https://github.com/sakitam-gis/vis-engine/compare/v1.5.1...v1.5.2) (2024-01-17)


### Bug Fixes

* **patch:** fix getShaderName regex ([7b15dbb](https://github.com/sakitam-gis/vis-engine/commit/7b15dbb36da2fc36a7baf941bce4d09c6bebc79f))

## [1.5.1](https://github.com/sakitam-gis/vis-engine/compare/v1.5.0...v1.5.1) (2023-11-19)


### Bug Fixes

* **patch:** fix gl blend state set ([ad750b7](https://github.com/sakitam-gis/vis-engine/commit/ad750b7a054f09a3f75877a6eeed9f7513831bce))

# [1.5.0](https://github.com/sakitam-gis/vis-engine/compare/v1.4.9...v1.5.0) (2023-04-24)


### Bug Fixes

* **Mesh:** resolution use state viewport ([3ad53a3](https://github.com/sakitam-gis/vis-engine/commit/3ad53a332089a877a74fb7f725ffe87875a669a3))
* **patch:** lock ci pnpm version ([7aaaea7](https://github.com/sakitam-gis/vis-engine/commit/7aaaea74d678480c8f8be657c5c6c5d2c2c48be4))


### Features

* **Program:** support custom blending options ([4882d2b](https://github.com/sakitam-gis/vis-engine/commit/4882d2ba3e8d1039d44a24bfa844dcd56fb04f5f))

## [1.4.9](https://github.com/sakitam-gis/vis-engine/compare/v1.4.8...v1.4.9) (2023-03-25)


### Bug Fixes

* **patch:** state reset ([7adafcc](https://github.com/sakitam-gis/vis-engine/commit/7adafcc1213c61560c34bc6d73651394a4903687))

## [1.4.8](https://github.com/sakitam-gis/vis-engine/compare/v1.4.7...v1.4.8) (2023-03-19)


### Bug Fixes

* **patch:** check stencil state has key ([b9b4c84](https://github.com/sakitam-gis/vis-engine/commit/b9b4c845ec15bcbf64bbfc3623ebf801a5c8252a))
* **patch:** stencil func default ([8a6ee2a](https://github.com/sakitam-gis/vis-engine/commit/8a6ee2ae8b9decf18f4f3a5fe3c188f2fa8829c6))

## [1.4.7](https://github.com/sakitam-gis/vis-engine/compare/v1.4.6...v1.4.7) (2023-03-19)


### Performance Improvements

* **patch:** stencil state default setting and support `stencilOpSeparate` front and back ([eb639d8](https://github.com/sakitam-gis/vis-engine/commit/eb639d8c01ab80ea5869037c227b7f2cff753c5c))

## [1.4.6](https://github.com/sakitam-gis/vis-engine/compare/v1.4.5...v1.4.6) (2023-03-15)


### Bug Fixes

* **patch:** Texture add default `internalFormat` same to `format`, in webgl1, internalFormat must be the same as format ([1e824b1](https://github.com/sakitam-gis/vis-engine/commit/1e824b14dd94ac09cdaa77c679165ef4484ff546))

## [1.4.5](https://github.com/sakitam-gis/vis-engine/compare/v1.4.4...v1.4.5) (2023-03-14)


### Bug Fixes

* **patch:** Texture `internalFormat` option not set ([6ba4275](https://github.com/sakitam-gis/vis-engine/commit/6ba4275f536b0d9a44ae007053083d680597c2c3))

## [1.4.4](https://github.com/sakitam-gis/vis-engine/compare/v1.4.3...v1.4.4) (2023-03-14)


### Performance Improvements

* **core:** update Resource options type ([2dc689c](https://github.com/sakitam-gis/vis-engine/commit/2dc689cf0c15ed9042cf2fa5c5df8ad0e3d4c5cf))
* **patch:** Texture support `anisotropy` and `offset` ([a0c417a](https://github.com/sakitam-gis/vis-engine/commit/a0c417a0f25b9ee91184c875ac645080d1272e21))

## [1.4.3](https://github.com/sakitam-gis/vis-engine/compare/v1.4.2...v1.4.3) (2023-03-13)


### Features

* **patch:** support renderer extensions option ([c312699](https://github.com/sakitam-gis/vis-engine/commit/c3126997510bf5363e76a75eda8c119558551802))

## [1.4.2](https://github.com/sakitam-gis/vis-engine/compare/v1.4.1...v1.4.2) (2023-03-08)


### Bug Fixes

* **patch:** fix pnpm lock in ci  [release-adapters] ([2b0ddaa](https://github.com/sakitam-gis/vis-engine/commit/2b0ddaa2a05fc6f4aaad742a985c12051777bd58))


### Performance Improvements

* **patch:** perf Renderer clear params and add renderAttributes getter ([97cfc47](https://github.com/sakitam-gis/vis-engine/commit/97cfc47e49ee46ce797c32f6d1a694192c0a49ef))

## [1.4.1](https://github.com/sakitam-gis/vis-engine/compare/v1.4.0...v1.4.1) (2023-03-06)


### Bug Fixes

* **doc:** fix typedoc sourceLinkTemplate ([1777de1](https://github.com/sakitam-gis/vis-engine/commit/1777de182e54ea7f40099c1c5c3adec61693a2a2))
* **patch:** fixed ci [release-adapters] ([eebdf51](https://github.com/sakitam-gis/vis-engine/commit/eebdf5155a0b27a78eea9601e201e6af05380e2e))
* **patch:** fixed ci [skip-ve-release] [release-adapters] ([34dfdfc](https://github.com/sakitam-gis/vis-engine/commit/34dfdfc2534f54eeee8c12d023221cd7292b3d48))
* **patch:** renderer get `flipY` state ([fc9bf97](https://github.com/sakitam-gis/vis-engine/commit/fc9bf97e094d60a3850ff8fe946a69eba597499a))


### Performance Improvements

* **patch:** add mapbox adapter MeshLayer and export core module getPlaneBuffer method, fix demo [release-adapters] ([f3ee066](https://github.com/sakitam-gis/vis-engine/commit/f3ee066b368d99f55cf0848e1cc6b8286736ef24))

# [1.4.0](https://github.com/sakitam-gis/vis-engine/compare/v1.3.2...v1.4.0) (2023-02-07)


### Bug Fixes

* **core:** `Resource` subclass missing `removeStats` ([2a0e3f7](https://github.com/sakitam-gis/vis-engine/commit/2a0e3f7accb614204d3dec84cd3b8f2740d18a55))
* **patch:** disable adapters test ([04e16ce](https://github.com/sakitam-gis/vis-engine/commit/04e16ced0d9d704afd71ad56887cbb23d4646871))
* **utils:** gl util `isWebGL` and `isWebGL2` methods support maptalks grouplayer ([435f799](https://github.com/sakitam-gis/vis-engine/commit/435f79946d498ff8687cd3a5e293660a1e128f2f))


### Features

* **adapters:** add maptalks adapter support ([dd62cf5](https://github.com/sakitam-gis/vis-engine/commit/dd62cf5a37e10186c5543334f5a73c3e56854782))
* **core:** `Renderer` resetState support reset `vao` and add `clear` method ([15f3079](https://github.com/sakitam-gis/vis-engine/commit/15f30798be5f05d66f82785735bb66d20b6b27c3))
* **core:** `Resource` support `swapHandle` and `restoreHandle` method ([cfa3d4d](https://github.com/sakitam-gis/vis-engine/commit/cfa3d4da1f68d17339a71c35954855308ee4c242))


### Performance Improvements

* **adapters:** mapbox adapter default use high precision ([ff0b007](https://github.com/sakitam-gis/vis-engine/commit/ff0b007cf9b9b03f69763556a20d2249197912c0))
* **ci:** update ci script ([b5c3591](https://github.com/sakitam-gis/vis-engine/commit/b5c35914c4c62ef83d40186eb16bcc35c3c6e104))

## [1.3.2](https://github.com/sakitam-gis/vis-engine/compare/v1.3.1...v1.3.2) (2023-02-04)


### Bug Fixes

* **no-release:** fix mapbox adapter workspace version and add readme doc ([f608e53](https://github.com/sakitam-gis/vis-engine/commit/f608e53f8a6af0b98297019af3dbafdf8624a845))
* **patch:** update mapbox adapter version ([b0c5793](https://github.com/sakitam-gis/vis-engine/commit/b0c579367c1d92c52c0f2145003cf5efe1270205))

## [1.3.1](https://github.com/sakitam-gis/vis-engine/compare/v1.3.0...v1.3.1) (2023-02-04)


### Bug Fixes

* **core:** fix `Program` setStates method and update `Renderer` types def. ([a82fa00](https://github.com/sakitam-gis/vis-engine/commit/a82fa0079c37f097c95375656d27e7db5eea5452))
* **patch:** try release adapters in action ([1379d00](https://github.com/sakitam-gis/vis-engine/commit/1379d005e700109e37381f7bd2e8cc11a9e0a772))

# [1.3.0](https://github.com/sakitam-gis/vis-engine/compare/v1.2.0...v1.3.0) (2023-02-03)


### Bug Fixes

* **core:** fixed `Texture` magFilter state ([c10e56a](https://github.com/sakitam-gis/vis-engine/commit/c10e56ad9eb7e834f0fca59e1cdecdceec73e105))
* **math:** `Matrix` and `Vector`、`Euler`、`Quaternion` toString method ([3eb2433](https://github.com/sakitam-gis/vis-engine/commit/3eb243325d5a6e4aeecbcdcf08acc4d47e2f7c25))


### Features

* **map-adapters:** add mapbox-gl adapter support ([45edb33](https://github.com/sakitam-gis/vis-engine/commit/45edb33234be8c8180b5886eebe0a4ac8c00e778))


### Performance Improvements

* **core:** update `Geometry` computeBoundingBox and computeBoundingSphere method support external `vertices` params ([64d18bb](https://github.com/sakitam-gis/vis-engine/commit/64d18bba185867700caee5080f1207514b27fe36))
* **core:** update `State` reset method support `force` params ([98d0c58](https://github.com/sakitam-gis/vis-engine/commit/98d0c5825794ee9fe544e5a766811cdd2426c84f))
* **eslint:** format code ([89874ec](https://github.com/sakitam-gis/vis-engine/commit/89874ecb5b31e2d501bb5b639339acc143023d09))

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

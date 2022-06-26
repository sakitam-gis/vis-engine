import { getWireframeIndex, uid } from '../utils';
import Object3D from './Object3D';
import Vector2 from '../math/Vector2';
import Matrix3 from '../math/Matrix3';
import Matrix4 from '../math/Matrix4';
import Geometry from '../core/Geometry';
import Program from '../core/Program';
import Renderer from '../core/Renderer';
import RenderTarget from '../core/RenderTarget';

import PerspectiveCamera from '../cameras/PerspectiveCamera';
import OrthographicCamera from '../cameras/OrthographicCamera';

export interface MeshOptions {
  /**
   * `Mesh` 的`id`
   */
  id?: string;

  /**
   * 几何体`Geometry`对象
   */
  geometry: Geometry;

  /**
   * `Program` 对象
   */
  program: Program;

  /**
   * 渲染方式，默认值为`gl.TRIANGLES`。
   * 其他可用值如下：
   * - `gl.POINTS`: 绘制一系列点。
   * - `gl.LINE_STRIP`: 绘制一个线条。即，绘制一系列线段，上一点连接下一点。
   * - `gl.LINE_LOOP`: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连。
   * - `gl.LINES`: 绘制一系列单独线段。每两个点作为端点，线段之间不连接。
   * - `gl.TRIANGLE_STRIP`：绘制一个三角带。
   * - `gl.TRIANGLE_FAN`：绘制一个三角扇。
   * - `gl.TRIANGLES`: 绘制一系列三角形。每三个点作为顶点。
   */
  mode?: GLenum;

  /**
   * 是否启用视锥体剔除
   */
  frustumCulled?: boolean;

  /**
   * 指定`Mesh` 的渲染顺序值
   */
  renderOrder?: number;

  /**
   * 设置是否是网格渲染，默认是 `false`。当此值为 `true` 时，会去构建 `wireframeIndex` 索引。
   */
  wireframe?: boolean;
}

export interface MeshDrawOptions {
  /**
   * 渲染器
   */
  renderer: Renderer;

  /**
   * 相机
   */
  camera: PerspectiveCamera | OrthographicCamera;

  /**
   * 指定渲染目标 `RenderTarget`，常用于在多个 `RenderPass` 做流转，用来实现诸如后处理 `PostProcessing`。
   */
  target: RenderTarget;
}

/**
 * 网格渲染对象
 *
 * 代码示例：
 *
 * ```ts
 * const points = new Mesh(renderer, { mode: renderer.gl.POINTS, geometry, program });
 * points.setParent(scene);
 * points.position.set(-1, 1, 0);
 * ```
 */
export default class Mesh extends Object3D {
  public gl: WebGLRenderingContext | WebGL2RenderingContext;

  public modelViewMatrix: Matrix4;

  public normalMatrix: Matrix3;

  public renderOrder: number;

  public zDepth: number;

  public frustumCulled: boolean;

  public mode: GLenum;

  public renderer: Renderer;

  #id: string;

  #lastMode: GLenum;

  #geometry: Geometry;

  #program: Program;

  #wireframe: boolean;

  #wireframeGeometry: Geometry;

  /**
   * @param renderer 渲染器
   * @param options MeshOptions
   */
  constructor(renderer, options: MeshOptions = {} as MeshOptions) {
    super();
    const opts = Object.assign({}, {
      mode: renderer.gl.TRIANGLES,
      frustumCulled: true,
      renderOrder: 0,
    }, options);
    this.renderer = renderer;
    this.gl = this.renderer.gl;
    this.modelViewMatrix = new Matrix4();
    this.normalMatrix = new Matrix3();
    this.renderOrder = opts.renderOrder;
    this.frustumCulled = opts.frustumCulled;
    this.zDepth = 0;
    this.#id = opts.id || uid('mesh');
    this.#geometry = opts.geometry;
    this.#program = opts.program;
    this.#wireframe = Boolean(opts.wireframe);
    this.mode = opts.mode;
    this.#lastMode = opts.mode;

    if (this.#wireframe) {
      this.mode = this.gl.LINES;
      this.updateWireframeGeometry(this.#wireframe);
    }
  }

  /**
   * 获取当前 `Mesh` 的 `id`
   */
  get id() {
    return this.#id;
  }

  /**
   * 获取当前 `Mesh` 的几何体信息
   */
  get geometry() {
    return this.#wireframe ? this.#wireframeGeometry : this.#geometry;
  }

  /**
   * 获取当前 `Mesh` 的 `program` 对象
   */
  get program() {
    return this.#program;
  }

  /**
   * 设置是否是网格渲染
   * @param wireframe
   */
  set wireframe(wireframe: boolean) {
    this.mode = wireframe ? this.gl.LINES : this.#lastMode;

    this.#wireframe = wireframe;

    this.updateWireframeGeometry(this.#wireframe);
  }

  /**
   * 获取是否是网格渲染
   */
  get wireframe() {
    return this.#wireframe;
  }

  /**
   * 执行`Mesh` 的渲染，一般由`Renderer` 渲染器进行调度。
   * @param options
   */
  draw(options: MeshDrawOptions = {} as MeshDrawOptions) {
    const { camera, target } = options;
    const uniforms = {};
    if (camera) {
      Object.assign(uniforms, {
        projectionMatrix: camera.projectionMatrix,
        cameraPosition: camera.worldPosition,
        viewMatrix: camera.viewMatrix,
      });
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
    } else {
      this.modelViewMatrix.copy(this.worldMatrix);
    }

    Object.assign(uniforms, {
      resolution: new Vector2(this.gl.canvas.width, this.gl.canvas.height),
      modelMatrix: this.worldMatrix,
      modelViewMatrix: this.modelViewMatrix,
      normalMatrix: this.normalMatrix,
    });
    Object.keys(uniforms).forEach((key) => {
      if (!Object.hasOwn(this.program.uniforms, key)) {
        this.program.uniforms[key] = { value: null };
      }
      this.program.uniforms[key].value = uniforms[key];
    });
    if (target) target.bind();
    this.program.use();
    this.geometry.draw(this.program, this.mode);
    if (target) target.unbind();
  }

  /**
   * 更新网格几何体数据，主要是顶点索引数据
   * @param wireframe 是否更新索引数据为网格数据
   * @param force 是否强制更新
   */
  updateWireframeGeometry(wireframe, force = false) {
    if (this.#geometry && (force || !this.#wireframeGeometry)) {
      if (this.#wireframeGeometry) {
        this.#wireframeGeometry.destroy();
      }

      const attributesConfig = this.#geometry.attributesConfig;

      const positionArray = attributesConfig.position.data;
      const numIndices = attributesConfig.index?.data ? attributesConfig.index?.data.length : Math.floor(positionArray.length / 3);
      const index = [];

      if (attributesConfig.index) {
        const data = attributesConfig.index?.data;

        if (data) {
          getWireframeIndex(positionArray, index, numIndices, data as (Uint32Array | Uint16Array));
        }
      } else {
        getWireframeIndex(positionArray, index, numIndices);
      }

      const indices = index.length > 65536 ? new Uint32Array(index) : new Uint16Array(index);

      this.#wireframeGeometry = new Geometry(this.renderer, {
        ...this.#geometry.attributesConfig,
        index: {
          data: indices,
        }
      });
    }
  }

  /**
   * 更新几何体信息，如果开启了 `wireframe` 还需要更新 `WireframeGeometry`
   * @param geometry 几何体
   * @param destroy 是否销毁上一个几何体
   */
  updateGeometry(geometry, destroy = true) {
    if (destroy && this.#geometry) {
      this.#geometry.destroy();
    }
    this.#geometry = geometry;
    this.updateWireframeGeometry(this.#wireframe, true);
  }

  /**
   * 更新 `Program` 对象
   * @param program
   * @param destroy 是否销毁上一个 program
   */
  updateProgram(program, destroy = true) {
    if (destroy && this.#program) {
      this.#program.destroy();
    }
    this.#program = program;
  }

  /**
   * 销毁此 `Mesh`
   */
  destroy() {
    this.program.destroy();
    this.geometry.destroy();
  }

  /**
   * 克隆 `Mesh` 对象
   */
  clone() {
    return new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
      frustumCulled: this.frustumCulled,
      mode: this.mode,
      renderOrder: this.renderOrder,
    }).copy(this);
  }

  /**
   * 将给定的 `Mesh` 对象复制到此对象
   * @param mesh 源对象
   * @param recursive 设置是否复制子对象
   */
  copy(mesh, recursive = true) {
    super.copy(mesh, recursive);
    this.modelViewMatrix.copy(mesh.modelViewMatrix);
    this.normalMatrix.copy(mesh.normalMatrix);
    this.mode = mesh.mode;
    this.renderOrder = mesh.renderOrder;
    this.zDepth = mesh.zDepth;
    return this;
  }
}

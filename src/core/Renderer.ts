import State from './State';
import RenderTarget from './RenderTarget';
import Scene from '../objects/Scene';
import { isWebGL, isWebGL2, getContext } from '../utils';
import type { WithUndef } from '../types';

type ExtensionKeys = 'ANGLE_instanced_arrays' | 'OES_vertex_array_object';
type Extensions = ANGLE_instanced_arrays | OES_vertex_array_object;

export interface RendererOptions {
  /**
   * 指定 `devicePixelRatio`
   */
  dpr: number;

  /**
   * 指定是否开启自动清除
   */
  autoClear: boolean;

  /**
   * 指定是否开启深度检测
   */
  depth: boolean;

  /**
   * 指定画布是否包含alpha缓冲区，仅在传入的是 `canvas` 对象时有用
   */
  alpha: boolean;

  /**
   * 指定是否开启抗锯齿，仅在传入的是 `canvas` 对象时有用
   */
  antialias: boolean;

  /**
   * 指定是否开启模板缓冲区
   */
  stencil: boolean;

  /**
   * 指定GPU的性能配置，仅在传入的是 `canvas` 对象时有用
   */
  powerPreference: WebGLPowerPreference;

  /**
   * 指定是否开启预乘alpha
   */
  premultipliedAlpha: boolean;

  /**
   * 是否开启绘制缓冲区，仅在传入的是 `canvas` 对象时有用
   */
  preserveDrawingBuffer: boolean;

  /**
   * 获取 `webgl2` 实例，仅在传入的是 `canvas` 对象时有用
   */
  requestWebGl2: boolean;
  /**
   * 是否开启视锥剔除，默认不开启
   */
  frustumCull: boolean;
}

export interface RenderParams {
  /**
   * 场景对象
   */
  scene: Scene;

  /**
   * 相机对象
   */
  camera: any;

  /**
   * 指定渲染目标 `RenderTarget`，常用于在多个 `RenderPass` 做流转，用来实现诸如后处理 `PostProcessing`。
   */
  target?: RenderTarget;

  /**
   * 指定是否强制更新
   */
  update?: boolean;

  /**
   * 指定是否进行渲染对象的排序
   */
  sort?: boolean;

  /**
   * 是否开启进行视锥剔除（通过计算各渲染对象的包围盒，完全在视锥外的排除在`RendererList` 之外）。
   */
  frustumCull?: boolean;

  /**
   * 指定是否进行（颜色、深度、模版）缓冲区清除
   */
  clear?: boolean;
}

/**
 * 渲染器
 */
export default class Renderer {
  readonly #gl: WebGLRenderingContext | WebGL2RenderingContext;

  readonly #state: any;

  readonly #extensions: {
    [key in ExtensionKeys]: Extensions;
  };

  readonly #autoClear: boolean;

  readonly #depth: WithUndef<boolean>;

  readonly #alpha: WithUndef<boolean>;

  readonly #stencil: WithUndef<boolean>;

  readonly #antialias: WithUndef<boolean>;

  readonly #premultipliedAlpha: WithUndef<boolean>;

  readonly #preserveDrawingBuffer: WithUndef<boolean>;

  readonly #color: boolean;

  readonly #dpr: number;

  readonly #frustumCull: boolean;

  public vertexAttribDivisor: any;
  public drawArraysInstanced: any;
  public drawElementsInstanced: any;
  public createVertexArray: any;
  public bindVertexArray: any;
  public deleteVertexArray: any;

  public width: number;

  public height: number;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext | HTMLCanvasElement, opts: Partial<RendererOptions> = {}) {
    const options = Object.assign({}, {
      autoClear: true,
      depth: true,
      alpha: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      requestWebGl2: true,
    }, opts);

    this.#autoClear = Boolean(options.autoClear);

    this.#depth = options.depth;

    this.#alpha = options.alpha;

    this.#stencil = options.stencil;

    this.#premultipliedAlpha = options.premultipliedAlpha;

    this.#preserveDrawingBuffer = options.preserveDrawingBuffer;

    this.#gl = ((isWebGL(gl) || isWebGL2(gl)) ? gl : getContext(gl as HTMLCanvasElement, {
      alpha: this.#alpha,
      depth: this.#depth,
      stencil: this.#stencil,
      antialias: this.#antialias,
      powerPreference: options.powerPreference,
      premultipliedAlpha: this.#premultipliedAlpha,
      preserveDrawingBuffer: this.#preserveDrawingBuffer,
    }, options.requestWebGl2)) as WebGLRenderingContext | WebGL2RenderingContext;

    this.#state = new State(this);

    this.#color = true;

    this.#dpr = options.dpr || 1;

    this.#frustumCull = !!options.frustumCull;

    this.#extensions = {} as {
      [key in ExtensionKeys]: Extensions;
    };

    this.vertexAttribDivisor = this.getExtension(
      'ANGLE_instanced_arrays',
      'vertexAttribDivisor',
      'vertexAttribDivisorANGLE'
    );
    this.drawArraysInstanced = this.getExtension(
      'ANGLE_instanced_arrays',
      'drawArraysInstanced',
      'drawArraysInstancedANGLE',
    );
    this.drawElementsInstanced = this.getExtension(
      'ANGLE_instanced_arrays',
      'drawElementsInstanced',
      'drawElementsInstancedANGLE',
    );
    this.createVertexArray = this.getExtension(
      'OES_vertex_array_object',
      'createVertexArray',
      'createVertexArrayOES',
    );
    this.bindVertexArray = this.getExtension(
      'OES_vertex_array_object',
      'bindVertexArray',
      'bindVertexArrayOES',
    );
    this.deleteVertexArray = this.getExtension(
      'OES_vertex_array_object',
      'deleteVertexArray',
      'deleteVertexArrayOES',
    );
  }

  /**
   * 获取 gl 实例
   */
  get gl() {
    return this.#gl;
  }

  /**
   * 获取 canvas 实例
   */
  get canvas () {
    return this.#gl.canvas;
  }

  /**
   * 判断是否是 `webgl1`
   */
  get isWebGL() {
    return isWebGL(this.gl);
  }

  /**
   * 判断是否是 `webgl2`
   */
  get isWebGL2() {
    return isWebGL2(this.gl);
  }

  /**
   * 获取 canvas 画布大小
   */
  get size () {
    return {
      width: 'clientWidth' in this.canvas ? this.canvas.clientWidth : this.canvas.width,
      height: 'clientHeight' in this.canvas ? this.canvas.clientHeight : this.canvas.height,
    };
  }

  /**
   * 获取 `renderState`
   */
  get state () {
    return this.#state;
  }

  /**
   * 获取 `premultipliedAlpha` 配置
   */
  get premultipliedAlpha() {
    return this.#premultipliedAlpha;
  }

  /**
   * 设置画布宽高
   * @param width 宽
   * @param height 高
   */
  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.gl.canvas.width = width * this.#dpr;
    this.gl.canvas.height = height * this.#dpr;
  }

  /**
   * 设置 `webgl` 的 `viewport`
   * @param width
   * @param height
   * @param x
   * @param y
   */
  setViewport(width, height, x = 0, y = 0) {
    this.#state.setViewport(width, height, x, y);
  }

  /**
   * @private
   * 获取扩展
   * @param extension
   * @param method
   * @param extFunc
   */
  getExtension (extension, method, extFunc) {
    const func = this.gl[method];
    if (method && func) return func.bind(this.gl);
    if (!this.#extensions[extension]) {
      this.#extensions[extension] = this.gl.getExtension(extension);
    }
    const ef = this.#extensions[extension];
    return method ? ef ? ef[extFunc].bind(ef) : null : ef;
  }

  /**
   * 获取渲染列表（排序先不实现）
   * @param scene
   * @param camera
   */
  getRenderList({ scene, camera }) {
    let renderList: any[] = [];

    scene.traverse((node) => {
      if (!node.visible) return true;
      if (!node.draw) return;

      if (this.#frustumCull && node.frustumCulled && camera) {
        if (!camera.frustumIntersectsMesh(node)) return;
      }

      renderList.push(node);
    });

    return renderList;
  }

  /**
   * 渲染函数，一般会在每一帧中调用此方法
   * @param params
   */
  render(params: RenderParams) {
    const { scene, camera, target = null, update = true, clear } = params;
    if (target === null) {
      // make sure no render target bound so draws to canvas
      this.#state.bindFramebuffer({
        buffer: null,
      });
      this.setViewport(this.width * this.#dpr, this.height * this.#dpr);
    } else {
      // bind supplied render target and update viewport
      target.bind();
      this.setViewport(target.width, target.height);
    }

    if (clear || (this.#autoClear && clear !== false)) {
      // 确保深度缓冲区写入已启用，以便可以将其清除
      if (this.#depth && (!target || target.depth)) {
        this.#state.enable(this.gl.DEPTH_TEST);
        this.#state.setDepthMask(true);
      }
      this.gl.clear(
        (this.#color ? this.gl.COLOR_BUFFER_BIT : 0) |
        (this.#depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
        (this.#stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
      );
    }

    // 更新场景矩阵
    if (update) scene.updateMatrixWorld();

    // 单独更新相机矩阵
    if (camera) camera.updateMatrixWorld();

    const renderList = this.getRenderList({ scene, camera });

    let i = 0;
    const len = renderList.length;
    for (; i < len; i++) {
      const node = renderList[i];
      node.draw({ camera });
    }
  }
}

import State from './State';
import RenderTarget from './RenderTarget';
import Scene from '../objects/Scene';
import { isWebGL, isWebGL2, getContext } from '../utils';
import type { WithNull, WithUndef } from '../types';

const innerExtensionKeys = [
  'ANGLE_instanced_arrays', // 实例化绘制
  'OES_vertex_array_object', // 顶点数组对象
] as const;

type InnerExtensionKeys = typeof innerExtensionKeys[number];

/**
 * 仅在 webgl 1 中使用的扩展，webgl2 直接支持
 */
const external1ExtensionKeys = [
  'WEBGL_depth_texture', // 深度纹理
  'OES_texture_half_float', // 半浮点型纹理
  'OES_texture_float', // 浮点型纹理
  'OES_standard_derivatives', // 标准导数
  'OES_element_index_uint', // UNSIGNED_INT索引
  'EXT_frag_depth', // 设置gl_FragDepth
  'EXT_blend_minmax', // 混合公式MIN/MAX
  'EXT_shader_texture_lod', // 直接纹理LOD获取
  'WEBGL_draw_buffers', // 多种绘制缓冲
  'WEBGL_color_buffer_float', // 32 位浮点数颜色缓冲区
] as const;

/**
 * 仅在 webgl 2 中支持的扩展
 */
const external2ExtensionKeys = [
  'EXT_color_buffer_float', // 32 位浮点数颜色缓冲区
] as const;

/**
 * 在 webgl1 和 webgl2 都支持的扩展
 */
const external12ExtensionKeys = [
  'WEBGL_lose_context', // 模拟丢失和恢复 gl 上下文
  'OES_texture_half_float_linear', // 半浮点型纹理线性过滤
  'OES_texture_float_linear', // 浮点型纹理线性过滤
  'EXT_color_buffer_half_float', // 半（16 位）浮点数颜色缓冲区
  'WEBGL_debug_renderer_info', // 图形驱动信息
  'EXT_texture_filter_anisotropic', // 有效各向异性值
] as const;

type External1ExtensionKeys = typeof external1ExtensionKeys[number];
type External2ExtensionKeys = typeof external2ExtensionKeys[number];
type External12ExtensionKeys = typeof external12ExtensionKeys[number];

type ExternalExtensionKeys =
  | External1ExtensionKeys
  | External2ExtensionKeys
  | External12ExtensionKeys;

type ExtensionKeys = InnerExtensionKeys | ExternalExtensionKeys;

type Extensions =
  | ANGLE_instanced_arrays
  | OES_vertex_array_object
  | WEBGL_depth_texture
  | OES_texture_half_float
  | OES_texture_float
  | OES_texture_half_float_linear
  | OES_texture_float_linear
  | OES_standard_derivatives
  | OES_element_index_uint
  | EXT_frag_depth
  | EXT_blend_minmax
  | EXT_shader_texture_lod
  | WEBGL_draw_buffers;

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

  /**
   * WebGL 上下文支持的扩展列表。默认 []
   */
  extensions: ExternalExtensionKeys[];
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

  readonly #state: State;

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

  public vertexAttribDivisor:
    | ANGLE_instanced_arrays['vertexAttribDivisorANGLE']
    | WebGL2RenderingContext['vertexAttribDivisor'];
  public drawArraysInstanced:
    | ANGLE_instanced_arrays['drawArraysInstancedANGLE']
    | WebGL2RenderingContext['drawArraysInstanced'];
  public drawElementsInstanced:
    | ANGLE_instanced_arrays['drawElementsInstancedANGLE']
    | WebGL2RenderingContext['drawElementsInstanced'];
  public createVertexArray:
    | OES_vertex_array_object['createVertexArrayOES']
    | WebGL2RenderingContext['createVertexArray'];
  public bindVertexArray:
    | OES_vertex_array_object['bindVertexArrayOES']
    | WebGL2RenderingContext['bindVertexArray'];
  public deleteVertexArray:
    | OES_vertex_array_object['deleteVertexArrayOES']
    | WebGL2RenderingContext['deleteVertexArray'];

  public width: number;

  public height: number;

  constructor(
    gl: WebGLRenderingContext | WebGL2RenderingContext | HTMLCanvasElement,
    opts: Partial<RendererOptions> = {},
  ) {
    const options = Object.assign(
      {},
      {
        autoClear: true,
        depth: true,
        alpha: false,
        stencil: false,
        antialias: false,
        premultipliedAlpha: false,
        preserveDrawingBuffer: false,
        requestWebGl2: true,
        extensions: [],
      },
      opts,
    );

    this.#autoClear = Boolean(options.autoClear);

    this.#depth = options.depth;

    this.#alpha = options.alpha;

    this.#stencil = options.stencil;

    this.#antialias = options.antialias;

    this.#premultipliedAlpha = options.premultipliedAlpha;

    this.#preserveDrawingBuffer = options.preserveDrawingBuffer;

    this.#gl = (
      isWebGL(gl) || isWebGL2(gl)
        ? gl
        : getContext(
            gl as HTMLCanvasElement,
            {
              alpha: this.#alpha,
              depth: this.#depth,
              stencil: this.#stencil,
              antialias: this.#antialias,
              powerPreference: options.powerPreference,
              premultipliedAlpha: this.#premultipliedAlpha,
              preserveDrawingBuffer: this.#preserveDrawingBuffer,
            },
            options.requestWebGl2,
          )
    ) as WebGLRenderingContext | WebGL2RenderingContext;

    const attrs = this.#gl?.getContextAttributes();

    const viewport = this.#gl?.getParameter(this.#gl.VIEWPORT);
    const flipY = this.#gl?.getParameter(this.#gl.UNPACK_FLIP_Y_WEBGL);

    this.#state = new State(this);

    if (attrs) {
      this.#depth = Boolean(attrs.depth);
      this.#antialias = Boolean(attrs.antialias);
      this.#alpha = Boolean(attrs.alpha);
      this.#stencil = Boolean(attrs.stencil);
      this.#premultipliedAlpha = Boolean(attrs.premultipliedAlpha);
      this.#preserveDrawingBuffer = Boolean(attrs.preserveDrawingBuffer);
    }

    this.#state.flipY = Boolean(flipY);
    this.#state.setViewport(viewport[2], viewport[3], viewport[0], viewport[1]);
    this.#state.premultiplyAlpha = this.#premultipliedAlpha;

    this.#color = true;

    this.#dpr = options.dpr || 1;

    this.width = this.gl.canvas.width / this.#dpr;
    this.height = this.gl.canvas.height / this.#dpr;

    this.#frustumCull = !!options.frustumCull;

    this.#extensions = {} as {
      [key in ExtensionKeys]: Extensions;
    };

    this.vertexAttribDivisor = this.getExtension(
      'ANGLE_instanced_arrays',
      'vertexAttribDivisor',
      'vertexAttribDivisorANGLE',
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

    if (options.extensions) {
      options.extensions
        .filter(
          (extension: ExternalExtensionKeys) =>
            external1ExtensionKeys.findIndex((ext) => ext === extension) > -1,
        )
        .forEach((extension: ExternalExtensionKeys) => {
          if (!this.#extensions[extension] && !this.isWebGL2) {
            this.#extensions[extension] = this.gl.getExtension(extension);
          }
        });

      options.extensions
        .filter(
          (extension: ExternalExtensionKeys) =>
            external2ExtensionKeys.findIndex((ext) => ext === extension) > -1,
        )
        .forEach((extension: ExternalExtensionKeys) => {
          if (!this.#extensions[extension] && this.isWebGL2) {
            this.#extensions[extension] = this.gl.getExtension(extension);
          }
        });

      options.extensions
        .filter(
          (extension: ExternalExtensionKeys) =>
            external12ExtensionKeys.findIndex((ext) => ext === extension) > -1,
        )
        .forEach((extension: ExternalExtensionKeys) => {
          if (!this.#extensions[extension]) {
            this.#extensions[extension] = this.gl.getExtension(extension);
          }
        });
    }
  }

  /**
   * 获取 gl 实例
   */
  get gl() {
    return this.#gl;
  }

  /**
   * 获取 `Renderer` 的内部属性值
   */
  get attributes() {
    return {
      dpr: this.#dpr,
      flipY: this.#state.flipY,
      depth: this.#depth,
      color: this.#color,
      antialias: this.#antialias,
      alpha: this.#alpha,
      stencil: this.#stencil,
      autoClear: this.#autoClear,
      frustumCull: this.#frustumCull,
      premultipliedAlpha: this.#premultipliedAlpha,
      preserveDrawingBuffer: this.#preserveDrawingBuffer,
    };
  }

  /**
   * 获取 canvas 实例
   */
  get canvas() {
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
   * 获取已开启的扩展
   */
  get extensions() {
    return this.#extensions;
  }

  /**
   * 获取指定的扩展
   * @param key
   */
  extension(key: ExtensionKeys) {
    return this.#extensions[key];
  }

  /**
   * 获取 canvas 画布大小
   */
  get size() {
    return {
      width: 'clientWidth' in this.canvas ? this.canvas.clientWidth : this.canvas.width,
      height: 'clientHeight' in this.canvas ? this.canvas.clientHeight : this.canvas.height,
    };
  }

  /**
   * 获取 `renderState`
   */
  get state(): State {
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
  getExtension(extension, method, extFunc) {
    const func = this.gl[method];
    if (method && func) return func.bind(this.gl);
    if (!this.#extensions[extension]) {
      this.#extensions[extension] = this.gl.getExtension(extension);
    }
    const ef = this.#extensions[extension];
    return method ? (ef ? ef[extFunc].bind(ef) : null) : ef;
  }

  /**
   * 获取渲染列表（排序先不实现）
   * @param scene
   * @param camera
   */
  getRenderList({ scene, camera }) {
    const renderList: any[] = [];

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

      this.clear(this.#color, this.#depth, this.#stencil);
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

    if (target) {
      target.unbind();
    }
  }

  /**
   * 清空画布
   * @param color 颜色
   * @param depth 深度
   * @param stencil 模板
   */
  clear(color = this.#color, depth = this.#depth, stencil = this.#stencil) {
    let bits = 0;

    if (color) bits |= this.gl.COLOR_BUFFER_BIT;
    if (depth) bits |= this.gl.DEPTH_BUFFER_BIT;
    if (stencil) bits |= this.gl.STENCIL_BUFFER_BIT;

    this.gl.clear(bits);
  }

  /**
   * 重置内部 `WebGL` 状态。
   * 需要注意的是一般单独使用时我们不需要去重置状态，但是在跨多个 `WebGL` 库共享单个 `WebGL` 上下文时我们需要关注此方法。默认情况下
   * 我们会重置所有的状态，但是当我们确认多个共享库使用的状态完全相同时我们可以考虑仅重置部分状态以提高性能。但是有可能会出现无法预料的情况
   * 请在你确认状态完全匹配时使用 `force = false` 重置部分状态。
   * @param force 是否强制重置所用状态，默认是 `true`
   * @param vao
   */
  resetState(
    force = true,
    vao: WithNull<WebGLVertexArrayObject | WebGLVertexArrayObjectOES> = null,
  ) {
    this.#state.reset(force);
    this.bindVertexArray(vao);
  }
}

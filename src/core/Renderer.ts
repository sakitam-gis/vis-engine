import State from './State';
import RenderTarget from './RenderTarget';
import Scene from '../objects/Scene';

/** Check if supplied parameter is a WebGLRenderingContext */
export function isWebGL(gl: any): boolean {
  if (typeof WebGLRenderingContext !== 'undefined' && gl instanceof WebGLRenderingContext) {
    return true;
  }
  if (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) {
    return true;
  }
  // Look for debug contexts, headless gl etc
  return Boolean(gl && Number.isFinite(gl._version));
}


/** Check if supplied parameter is a WebGL2RenderingContext */
export function isWebGL2(gl: any): boolean {
  if (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) {
    return true;
  }
  // Look for debug contexts, headless gl etc
  return Boolean(gl && gl._version === 2);
}

export type ExtensionKeys = 'ANGLE_instanced_arrays' | 'OES_vertex_array_object';
export type Extensions = ANGLE_instanced_arrays | OES_vertex_array_object;

export interface RendererOptions {
  dpr: number;
  autoClear: boolean;
  depth: boolean;
  stencil: boolean;
  premultipliedAlpha: boolean;
}

/**
 * 这是一个基类，
 */
export default class Renderer {
  #gl: WebGLRenderingContext | WebGL2RenderingContext;

  #state: any;

  #extensions: {
    [key in ExtensionKeys]: Extensions;
  };

  #autoClear: boolean;

  #depth: boolean;

  #stencil: boolean;

  #color: boolean;

  #dpr: number;

  #premultipliedAlpha: boolean;

  public vertexAttribDivisor: any;
  public drawArraysInstanced: any;
  public drawElementsInstanced: any;
  public createVertexArray: any;
  public bindVertexArray: any;
  public deleteVertexArray: any;

  public width: number;

  public height: number;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, options: Partial<RendererOptions> = {
    autoClear: true,
    depth: true,
    premultipliedAlpha: false,
  }) {
    this.#gl = gl;

    this.#state = new State(this);

    this.#autoClear = Boolean(options.autoClear);

    this.#depth = Boolean(options.depth);

    this.#stencil = Boolean(options.stencil);

    this.#premultipliedAlpha = !!options.premultipliedAlpha;

    this.#color = true;

    this.#dpr = options.dpr || 1;

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

  get gl() {
    return this.#gl;
  }

  get canvas () {
    return this.#gl.canvas;
  }

  get isWebGL() {
    return isWebGL(this.gl);
  }

  get isWebGL2() {
    return isWebGL2(this.gl);
  }

  get size () {
    return {
      width: 'clientWidth' in this.canvas ? this.canvas.clientWidth : this.canvas.width,
      height: 'clientHeight' in this.canvas ? this.canvas.clientHeight : this.canvas.height,
    };
  }

  get state () {
    return this.#state;
  }

  get premultipliedAlpha() {
    return this.#premultipliedAlpha;
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.gl.canvas.width = width * this.#dpr;
    this.gl.canvas.height = height * this.#dpr;
  }

  setViewport(width, height, x = 0, y = 0) {
    if (this.#state.viewport.width === width && this.#state.viewport.height === height) return;
    this.#state.setViewport(width, height, x, y);
    this.gl.viewport(x, y, width, height);
  }

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
   */
  getRenderList({ scene }) {
    let renderList: any[] = [];

    scene.traverse((node) => {
      if (!node.visible) return true;
      if (!node.draw) return;

      renderList.push(node);
    });

    return renderList;
  }

  render(params: {
    scene: Scene;
    camera: any;
    target: RenderTarget;
    update: boolean;
    sort: boolean;
    frustumCull: boolean;
    clear: boolean;
  }) {
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

    const renderList = this.getRenderList({ scene });

    renderList.forEach((node) => {
      node.draw({ camera });
    });
  }
}

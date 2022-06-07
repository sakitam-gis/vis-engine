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
  autoClear: boolean;
  depth: boolean;
  stencil: boolean;
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

  public vertexAttribDivisor: any;
  public drawArraysInstanced: any;
  public drawElementsInstanced: any;
  public createVertexArray: any;
  public bindVertexArray: any;
  public deleteVertexArray: any;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, options: Partial<RendererOptions> = {}) {
    this.#gl = gl;

    this.#state = new State(this);

    this.#autoClear = Boolean(options.autoClear);

    this.#depth = Boolean(options.depth);

    this.#stencil = Boolean(options.stencil);

    this.#color = true;

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

  setViewport(width, height, x = 0, y = 0) {
    if (this.#state.viewport.width === width && this.#state.viewport.height === height) return;
    this.#state.viewport.width = width;
    this.#state.viewport.height = height;
    this.#state.viewport.x = x;
    this.#state.viewport.y = y;
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

    // Get visible
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
      // this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      // bind supplied render target and update viewport
      target.bind();
      this.setViewport(target.width, target.height);
    }

    if (clear || (this.#autoClear && clear !== false)) {
      // Ensure depth buffer writing is enabled so it can be cleared
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

    // updates all scene graph matrices
    if (update) scene.updateMatrixWorld();

    // Update camera separately, in case not in scene graph
    if (camera) camera.updateMatrixWorld();

    // Get render list - entails culling and sorting
    const renderList = this.getRenderList({ scene });

    renderList.forEach((node) => {
      node.draw({ camera });
    });
  }
}

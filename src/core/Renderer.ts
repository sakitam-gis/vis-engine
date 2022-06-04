import State from './State';

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

/**
 * 这是一个基类，
 */
export default class Renderer {
  #gl: WebGLRenderingContext | WebGL2RenderingContext;

  #state: any;

  #extensions: {
    [key in ExtensionKeys]: Extensions;
  };

  public vertexAttribDivisor: any;
  public drawArraysInstanced: any;
  public drawElementsInstanced: any;
  public createVertexArray: any;
  public bindVertexArray: any;
  public deleteVertexArray: any;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext) {
    this.#gl = gl;

    this.#state = new State(this);
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

  getExtension (extension, method, extFunc) {
    const func = this.gl[method];
    if (method && func) return func.bind(this.gl);
    if (!this.#extensions[extension]) {
      this.#extensions[extension] = this.gl.getExtension(extension);
    }
    const ef = this.#extensions[extension];
    return method ? ef ? ef[extFunc].bind(ef) : null : ef;
  }
}

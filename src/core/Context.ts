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

/**
 * 这是一个基类，
 */
export default class Context {
  #gl: WebGLRenderingContext | WebGL2RenderingContext;

  #state: any;

  constructor(gl: WebGLRenderingContext | WebGL2RenderingContext) {
    this.#gl = gl;
  }

  get contextState() {
    return this.#state;
  }

  get gl() {
    return this.#gl;
  }

  get isWebGL() {
    return isWebGL(this.gl);
  }

  get isWebGL2() {
    return isWebGL2(this.gl);
  }
}

export type IType = 'webgl' | 'webgl1' | 'webgl2';

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
  #context: WebGLRenderingContext | WebGL2RenderingContext;

  #type: IType;

  #state: any;

  constructor(context: WebGLRenderingContext | WebGL2RenderingContext, type = 'webgl') {
    this.#context = context;

    this.#type = type as IType;
  }

  get contextState() {
    return this.#state;
  }

  get context() {
    return this.#context;
  }

  get isWebGL() {
    return isWebGL(this.context);
  }

  get isWebGL2() {
    return isWebGL2(this.context);
  }

  get type() {
    return this.#type;
  }
}

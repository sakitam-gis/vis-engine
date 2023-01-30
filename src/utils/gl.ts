/**
 * 判断是否是 webgl
 * @param gl
 */
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

/**
 * 判断是否是 webgl2
 * @param gl
 */
export function isWebGL2(gl: any): boolean {
  if (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext) {
    return true;
  }
  // Look for debug contexts, headless gl etc
  return Boolean(gl && gl._version === 2);
}

export interface GlOptions {
  /**
   * 指定画布是否包含alpha缓冲区
   */
  alpha: boolean;
  /**
   * 指定是否开启抗锯齿。
   */
  antialias: boolean;
  /**
   * 指定是否开启深度检测。
   */
  depth: boolean;
  /**
   *  表示绘图缓冲区的深度缓冲区至少为16位。
   */
  desynchronized: boolean;
  /**
   * 指定是否开启模板缓冲区。
   */
  stencil: boolean;
  /**
   * 指定如果系统性能较低，是否创建上下文。
   */
  failIfMajorPerformanceCaveat: boolean;
  /**
   * 指定是否开启预乘alpha。
   */
  premultipliedAlpha: boolean;
  /**
   * 是否开启绘制缓冲区。
   */
  preserveDrawingBuffer: boolean;
  /**
   * 指定GPU的性能配置。
   */
  powerPreference: WebGLPowerPreference;
}

/**
 * 获取 webgl 示例
 * @param canvas
 * @param glOptions
 * @param requestWebGl2
 * @returns {null}
 */
export function getContext(
  canvas: HTMLCanvasElement,
  glOptions: Partial<GlOptions> = {},
  requestWebGl2 = false,
) {
  const names = ['webgl2', 'webgl', 'experimental-webgl'];
  if (!requestWebGl2) {
    names.shift();
  }
  let context: WebGLRenderingContext | null = null;

  function onContextCreationError(error: any) {
    console.error(error.statusMessage);
  }

  canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
  for (let ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], glOptions) as WebGLRenderingContext;
    } catch (e) {} // eslint-disable-line
    if (context) {
      break;
    }
  }

  canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);

  return context;
}

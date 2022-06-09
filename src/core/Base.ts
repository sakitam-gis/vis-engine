import Renderer from './Renderer';

/**
 * 这是一个基类，主要用于暴露 `renderer` 和 `gl` 以及 `rendererState`
 */
export default class Base {
  public renderer: Renderer;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }

  /**
   * 获取 `webgl` 实例
   */
  get gl(): WebGLRenderingContext | WebGL2RenderingContext {
    return this.renderer.gl;
  }

  get rendererState() {
    return this.renderer.state;
  }
}

import Renderer from './Renderer';

export default class Base {
  public renderer: Renderer;

  constructor(renderer: Renderer) {
    this.renderer = renderer;
  }

  get gl(): WebGLRenderingContext | WebGL2RenderingContext {
    return this.renderer.gl;
  }

  get rendererState() {
    return this.renderer.state;
  }
}

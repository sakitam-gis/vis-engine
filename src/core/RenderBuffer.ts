import Resource from './Resource';
import Renderer from './Renderer';

export interface RenderBufferOptions {
  width: number;
  height: number;

  format: GLenum;
}

export default class RenderBuffer extends Resource<RenderBufferOptions> {
  public width: number;

  public height: number;

  #internalFormat: GLenum;

  constructor (renderer: Renderer, options: RenderBufferOptions = {} as RenderBufferOptions) {
    super(renderer, {
      ...options,
      format: options.format || renderer.gl.DEPTH_COMPONENT16,
    });

    this.#internalFormat = this.options.format as GLenum;

    this.width = this.options.width as number;
    this.height = this.options.height as number;

    console.assert(
      this.width > 0 && this.height > 0,
      'Renderbuffer object requires valid width and height greater than zero'
    );
    this.bind();
    renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, this.#internalFormat, this.width, this.height);
  }

  resize (width, height) {
    if (width === this.width && height === this.height) return;
    this.bind();
    this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.#internalFormat, width, height);
    this.unbind();
  }

  bind () {
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.handle);
  }

  unbind () {
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
  }

  destroy () {
    this.unbind();
    this.deleteHandle();
  }

  createHandle () {
    return this.gl.createRenderbuffer();
  }

  deleteHandle () {
    this.handle && this.gl.deleteRenderbuffer(this.handle);
  }
}
